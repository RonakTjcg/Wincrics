# Use an official Node.js image as the base image
FROM node:21.7.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --global npm@latest
RUN npm install react-scripts@latest -g --silent
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 (assuming your React app runs on port 3000)
EXPOSE 5000

# Start the React app
CMD ["npm", "start"]
