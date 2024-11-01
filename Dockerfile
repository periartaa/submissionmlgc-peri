# Use the official Node.js image.
FROM node:20

# Set the working directory inside the container.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install the dependencies.
RUN npm install

# Copy the rest of your application code.
COPY . .

# Expose the port your application runs on (change as necessary).
EXPOSE 3000

# Command to run your application.
CMD ["npm", "start"]
