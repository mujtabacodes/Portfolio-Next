# Use the official Node.js image as the base image
FROM node:18-alpine

# Install yarn globally 
# RUN npm install -g yarn //un comment if did not using already yarn or not installed in your system

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the Next.js application
CMD ["yarn", "start"]
