# Etapa 1: Construir a aplicação React
FROM node:alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build

# Etapa 2: Servir a aplicação React com Nginx
FROM nginx:alpine

# Copie sua configuração Nginx (nginx.conf) se tiver uma personalizada
# Se você forneceu nginx.conf na sua imagem, certifique-se de que seja copiado aqui.
COPY nginx.conf /etc/nginx/conf.d/default.conf 

COPY --from=build /app/dist /usr/share/nginx/html
# Ou para create-react-app: COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]