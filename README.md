📚 Gerenciador de Livros - Angular
Sistema simples de cadastro, listagem e remoção de livros, desenvolvido com Angular e JSON Server. Ideal para fins de aprendizado e demonstração de habilidades em Angular.

🧰 Tecnologias Utilizadas
Angular 14+

RxJS

JSON Server

TypeScript

Reactive Forms

📦 Instalação
Clone o repositório:


git clone https://github.com/evandrolima7/booksbrasil.git

Instale as dependências:

npm install
Inicie o servidor JSON:

npx json-server --watch db.json --port 3000
Em outro terminal, inicie o servidor Angular:

ng serve
Acesse http://localhost:4200 no seu navegador.

🧪 Funcionalidades
✅ Adicionar novos livros com título, autor e descrição

✅ Listar todos os livros cadastrados

✅ Deletar livros existentes

✅ Validação de formulários com mensagens de erro

✅ Spinner de carregamento durante requisições

📁 Estrutura do Projeto
css
Copiar
Editar
src/
├── app/
│   ├── components/
│   │   ├── all-books/
│   │   ├── forAdd/
│   │   ├── navbar/
│   │   └── footer/
│   ├── service/
│   │   └── addbook.service.ts
│   ├── Interface/
│   │   └── InterfaceBook.ts
│   └── app-routing.module.ts
├── assets/
│   └── demo.gif
├── db.json
└── index.html

📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
