# Use an official Node.js image as the base image
FROM node:21.7.1

# Set the working directory in the container
WORKDIR /reactapp

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5000
EXPOSE 5000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Start the React app
CMD ["npx", "scripts", "start", "--", "--host", "0.0.0.0"]
