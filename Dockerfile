# Étape 1 : utiliser une image officielle Node
FROM node:18

# Étape 2 : définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Étape 3 : copier package.json et package-lock.json
COPY package*.json ./

# Étape 4 : installer les dépendances
RUN npm install

# Étape 5 : copier tout le reste du code
COPY . .

# Étape 6 : exposer le port de l’application
EXPOSE 4000

# Étape 7 : démarrer l’application
CMD ["node", "server.js"]

