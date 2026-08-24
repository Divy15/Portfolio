# --- Stage 1: Base image for installing dependencies ---
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# --- Stage 2: Development Target (Vite Dev Server) ---
FROM base AS dev
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# --- Stage 3: Build static production assets ---
FROM base AS build
COPY . .
RUN npm run build

# --- Stage 4: Production Target (Nginx Web Server) ---
FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]