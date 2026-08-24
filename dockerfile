FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Vite requires --host so it binds to 0.0.0.0 inside the container
CMD ["npm", "run", "dev", "--", "--host"]