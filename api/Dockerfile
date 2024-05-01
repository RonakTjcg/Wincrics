# Use the official Node.js v16.17.0 image
FROM node:16.17.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm i -g knex

# Copy the rest of the application code to the working directory
COPY . .

# Delay before running database migration and starting the application
CMD ["sh", "-c", "sleep 10 && npx knex migrate:latest && node index.js"]

# Expose port 3000
EXPOSE 3000
