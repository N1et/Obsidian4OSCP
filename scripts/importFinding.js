module.exports = async (params) => {
    const {quickAddApi: {inputPrompt}} = params;
    const files = app.vault.getFiles().filter(f => f.path.includes("Templates/Vulnerabilidades/VulnRepository"))
    const pickedFile = await params.quickAddApi.suggester(
        (file) => file.basename,
        files
    )

    if (!pickedFile) return;

    const content = await app.vault.read(pickedFile);

    const newPath = `⚠️ Vulnerabilidades/${pickedFile.basename}.md`;

    await app.vault.create(newPath, content);

    const newNoteFile = app.vault.getAbstractFileByPath(newPath);

    if (newNoteFile) {
        app.workspace.activeLeaf.openFile(newNoteFile);
    }    
}
