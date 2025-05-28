# Use an official Node.js runtime as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

