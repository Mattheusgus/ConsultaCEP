# ConsultaCEP

---

## Português (PT-BR)

Este é o frontend da aplicação ConsultaCEP, desenvolvido em React. Ele permite que você consulte informações de CEP de forma rápida e eficiente.

### Visão Geral

O ConsultaCEP é uma **aplicação de consulta de CEP** que utiliza a API do [BrasilAPI](https://brasilapi.com.br/api/cep/v2/{cep}). Nela, é possível procurar por um CEP via um campo de input ou diretamente pela URL, usando um parâmetro de rota. Se o CEP for válido e encontrado, a aplicação retorna os principais dados relacionados a ele.

### Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Node-RED (hospedado no Railway)

### Como Rodar o Projeto Localmente

Para rodar este frontend localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Mattheusgus/ConsultaCEP.git](https://github.com/Mattheusgus/ConsultaCEP.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd ConsultaCEP
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    # ou yarn start
    ```
    O aplicativo estará disponível em `http://localhost:3000` (ou outra porta disponível).

### Conexão com o Backend

Este frontend se conecta a um backend Node-RED. É essencial que o Node-RED esteja em execução e configurado corretamente para aceitar requisições deste frontend (especialmente em relação ao **CORS**, para evitar problemas de comunicação entre domínios).

- **Repositório do Backend Node-RED:** [https://github.com/Mattheusgus/node-red](https://github.com/Mattheusgus/node-red) (Ajuste para a URL real do seu repositório Node-RED)

### Deploy

Este frontend está atualmente em deploy no Vercel. Você pode acessá-lo [aqui](https://consulta-cep-coral.vercel.app/).

### Contribuição

Contribuições são bem-vindas! Se você tiver alguma sugestão ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

### Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

---

## English (EN)

This is the frontend for the ConsultaCEP application, developed with React. It allows you to quickly and efficiently look up ZIP code (CEP) information.

### Overview

ConsultaCEP is a **ZIP code lookup application** that uses the [BrasilAPI](https://brasilapi.com.br/api/cep/v2/{cep}). You can search for a CEP via an input field or directly through the URL, by using a route parameter. If the CEP is valid and found, the application returns its main related data.

### Technologies Used

- **Frontend:** React
- **Backend:** Node-RED (hosted on Railway)

### How to Run the Project Locally

To run this frontend locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Mattheusgus/ConsultaCEP.git](https://github.com/Mattheusgus/ConsultaCEP.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd ConsultaCEP
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```
4.  **Start the development server:**
    ```bash
    npm start
    # or yarn start
    ```
    The application will be available at `http://localhost:3000` (or another available port).

### Backend Connection

This frontend connects to a Node-RED backend. It's essential that Node-RED is running and correctly configured to accept requests from this frontend (especially regarding **CORS**, to avoid cross-domain communication issues).

- **Node-RED Backend Repository:** [https://github.com/Mattheusgus/node-red](https://github.com/Mattheusgus/node-red) (Adjust to the actual URL of your Node-RED repository)

### Deployment

This frontend is currently deployed on Vercel. You can access it [here](https://consulta-cep-coral.vercel.app/).

### Contribution

Contributions are welcome! If you have any suggestions or find any issues, feel free to open an issue or submit a pull request.

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
