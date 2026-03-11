FROM node:24.14-alpine
COPY package*.json ./
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
