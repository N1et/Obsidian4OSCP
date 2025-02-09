---
imageNameKey: ausência_de_do_cabeçalho_de_segurança_hsts_(strict-transport-security)
---
## Criticidade
==INSERIR CRITICIDADE==
## Tipo de vulnerabilidade
Ausência de do cabeçalho de segurança HSTS (Strict-Transport-Security)
## Descrição da vulnerabilidade
A vulnerabilidade de ausência do cabeçalho HTTP Strict Transport Security (HSTS) é uma configuração de segurança crítica que está faltando em um aplicativo web. Sem o cabeçalho HSTS, o aplicativo não instrui os navegadores a se comunicarem exclusivamente por conexões HTTPS seguras. Isso deixa a aplicação suscetível a ataques de intermediários, como ataques de downgrade de protocolo e sequestro de sessão via cookies não seguros. Quando um usuário acessa o site, inicialmente ele pode se conectar através de HTTP não seguro antes de ser redirecionado para HTTPS, criando uma oportunidade para ataques de intermediários (MDN Web Docs, Splunk).
## Descrição de achado
==INSERIR TEXTO==
## Recomendações
É recomendável implementar o cabeçalho HSTS em todas as respostas do servidor web. Este cabeçalho garante que os navegadores façam apenas conexões HTTPS com o domínio, reforçando a segurança do transporte e evitando conexões inseguras, mesmo que o usuário tente acessar o site via HTTP.
## Referências
https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
## Evidencias
==INSERIR IMAGEM==