# Dockerfile
FROM node:18.15.0

WORKDIR '/var/www/M1P10AndroidNode'

# Copy application source
COPY . .

# Copy the package.json to workdir
COPY package.json  ./package.json

# Copy .env.docker to workdir/.env - use the docker env
COPY .env.example ./.env

# Run npm install - install the npm dependencies
# RUN npm run schema:sync
RUN npm install

# Expose internal port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]