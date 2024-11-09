# HealthConnect

Este projeto integrador apresenta o desenvolvimento do HealthConnect, uma plataforma web modularizável voltada para a gestão de saúde, que conecta profissionais de saúde, pacientes e gestores de clínicas. A proposta visa solucionar a fragmentação de informações e otimizar processos como o agendamento de consultas, teleconsultas e o gerenciamento de prontuários eletrônicos. A plataforma busca melhorar a experiência dos pacientes, ao centralizar o acesso a seus dados de saúde, e aumentar a eficiência dos profissionais de saúde, facilitando o acompanhamento de tratamentos. Além disso, o sistema se diferencia por oferecer customização para diferentes áreas da saúde, integração com plataformas externas e suporte à telemedicina. O protótipo foi desenvolvido utilizando a ferramenta Figma, demonstrando as principais funcionalidades da interface e o fluxo de uso por diferentes tipos de usuários. A interface foi projetada com foco na usabilidade.

## Tecnologias Utilizadas

- **Node.js**: JavaScript runtime para executar o backend.
- **Express**: Framework minimalista para criar APIs em Node.js.
- **Mongoose**: ODM (Object Data Modeling) para trabalhar com MongoDB.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as informações dos pacientes.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Body-parser**: Middleware para interpretar os corpos das requisições HTTP.

## Requisitos

Antes de rodar o projeto, é necessário ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [VSCode](https://code.visualstudio.com/)

## Instalação

### 1. Clone o repositório
Clone este repositório para sua máquina local.

```bash
git clone https://github.com/Princyrr/PISegunda_entrega.git
cd PISegunda_entrega
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configuração do banco de dados
Certifique-se de que o MongoDB está em execução em sua máquina. Caso contrário, inicie o MongoDB ou utilize uma instância na nuvem, como o [MongoDB Atlas](https://www.mongodb.com/pt-br/cloud/atlas/register).

O banco de dados será criado automaticamente quando o servidor for iniciado. Por padrão, a API usará o banco de dados saude.

### 4. Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione a configuração de variáveis necessárias:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/saude
```

## Execução
Após a instalação das dependências e configuração do ambiente, inicie o servidor:

```bash
npm run dev
```

A API estará disponível no endereço http://localhost:3000.

## Contribuições
Contribuições são bem-vindas! Se você encontrou algum problema ou tem sugestões de melhoria, abra uma issue ou envie um pull request.

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.



