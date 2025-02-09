---

imageNameKey: mensagem_de_erro_sem_tratamento

---
## Criticidade
==INSERIR CRITICIDADE==
## Tipo de vulnerabilidade
Mensagem de erro sem tratamento
## Descrição da vulnerabilidade
A ausência de tratamento de mensagens erros da tecnologia interna da aplicação pode ocasionar exposições de informações sensíveis da infraestrutura interna do sistema, como detalhes de códigos fonte, dados da memória, informações do banco de dados, dentre outros problemas de segurança. Para um usuário mal-intencionado, essas informações podem servir de auxílio para uma enumeração ou um meio para identificar ou explorar vulnerabilidades do ambiente.  
## Descrição de achado
==INSERIR TEXTO==
## Recomendações
Todos os erros ocasionados no ambiente interno da aplicação devem conter um tratamento com mensagens diretas ou genéricas para evitar a exposição de informações sensíveis da tecnologia interna. 
## Referências
https://cwe.mitre.org/data/definitions/209.html
https://owasp.org/www-community/Improper_Error_Handling
## Evidencias
==INSERIR IMAGEM==