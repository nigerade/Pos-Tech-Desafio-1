📝 Formulário POSTECH-FULLSTACK - Desafio Aula Inaugural
Este projeto foi desenvolvido como parte do desafio da aula inaugural do curso POSTECH-FULLSTACK, com o objetivo de criar um formulário funcional que envia dados para uma API REST.

🚀 Funcionalidades
Formulário interativo com campos para 5 integrantes e uma mensagem

Validação básica dos campos antes do envio

Envio via POST para a API https://fsdt-contact.onrender.com/contact

Feedback visual com alerts personalizados

Limpeza automática dos campos após envio bem-sucedido

Design responsivo com cabeçalho preto e formulário sobreposto

🛠️ Tecnologias Utilizadas
HTML5

CSS3

JavaScript Vanilla (ES6+)

📦 Estrutura do Projeto
Copy
postech-fullstack-form/
├── index.html        # Página principal com o formulário
├── style.css         # Estilos da aplicação
├── script.js         # Lógica de envio do formulário
└── README.md         # Este arquivo
🔧 Como Usar
Clone o repositório:

bash
Copy
git clone https://github.com/seu-usuario/postech-fullstack-form.git
Abra o arquivo index.html em seu navegador favorito.

Preencha os campos:

Nomes dos integrantes (pelo menos um obrigatório)

História do grupo (campo obrigatório)

Clique em "Enviar" para submeter os dados.

📤 Especificação da API
Endpoint: POST https://fsdt-contact.onrender.com/contact

Payload (JSON):

json
Copy
{
    "names": ["Integrante 1", "Integrante 2"],
    "message": "Texto da história do grupo"
}
Respostas:

200 OK: Envio bem-sucedido

400 Bad Request: Dados inválidos

500 Server Error: Erro no servidor

👥 Integrantes do Grupo
Allan Alves de Holanda - rm361293

Guilherme de Souza Pimentel - rm364539

Luiz Carlos Dantas Ribeiro Junior - rm364856

Nicholas Gerade - rm364665

Pedro Paulo Pereira Peixoto de Lima - rm362502

Thomaz de Azevedo Lucca Moreira - rm363841

📌 Requisitos Cumpridos
Formulário conforme mockup do Figma

Envio via POST com payload JSON

Limpeza dos campos após envio

Alertas de sucesso/erro

Sem reload da página

Sem uso de frameworks/bibliotecas

Arquivos separados (HTML, CSS, JS)

✨ Destaques do Código
Envio assíncrono:

javascript
Copy
const response = await fetch('https://fsdt-contact.onrender.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
});
Limpeza dos campos:

javascript
Copy
// Limpa todos os campos
form.nome1.value = '';
form.nome2.value = '';
// ... outros campos
form.history.value = '';
📄 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

Desenvolvido como parte do curso POSTECH-FULLSTACK - FIAP