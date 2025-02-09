module.exports = async (params) => {
    const { app, quickAddApi } = params;
    const fs = app.vault.adapter;

    // Função para listar notas no diretório "Notas/"
    async function getNoteList(directory) {
        let notes = await fs.list(directory);
        return notes.files.map(file => file.replace(directory, '').replace('.md', ''));
    }

    // Função para pedir ao usuário para escolher uma nota
    async function promptForNote() {
        const notes = await getNoteList('Notas/');
	const notesVisual = await notes.map(file => "🗒 "+file);
        return await quickAddApi.suggester(notesVisual, notes, 'Selecione uma nota para adicionar o link:');
    }

    // Função para adicionar link ao parâmetro YAML "NoteRel"
    async function addLinkToYAML() {
        const selectedNote = await promptForNote();
        if (!selectedNote) {
            new Notice('Nenhuma nota selecionada.');
            return;
        }

        const currentFile = app.workspace.getActiveFile();
        if (!currentFile) {
            new Notice('Nenhum arquivo ativo.');
            return;
        }

        const link = ` "[[Notas/${selectedNote}]]"`;
        const content = await app.vault.read(currentFile);

        let updatedContent;
        const yamlRegex = /---\n([\s\S]*?)\n---/;
        const match = content.match(yamlRegex);

        if (match) {
            let yamlContent = match[1];
            if (yamlContent.includes('NoteRel:')) {
                yamlContent = yamlContent.replace(/(NoteRel: *).*/, `$1${link}`);
            } else {
                yamlContent += `\nNoteRel: ${link}`;
            }
            updatedContent = content.replace(yamlRegex, `---\n${yamlContent}\n---`);
        } else {
            updatedContent = `---\nNoteRel: ${link}\n---\n${content}`;
        }

        await app.vault.modify(currentFile, updatedContent);
        new Notice(`Link adicionado ao parâmetro YAML NoteRel: ${link}`);
    }

    await addLinkToYAML();
};

