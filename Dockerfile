# Image Node officielle
FROM node:18-alpine

# Répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copie package.json et package-lock.json (si existant)
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le projet
COPY . .

# Expose le port 4000 du conteneur
EXPOSE 4000

# Commande pour démarrer l'app
CMD ["node", "server.js"]

