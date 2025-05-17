# Use official Node.js image
FROM node:lts

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose port and run dev server
EXPOSE 3000
CMD ["npm", "run", "dev"]
