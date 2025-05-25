# Step 1: Build the Vite app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app and build it
COPY . .
RUN npm run build


# Step 2: Serve the app using `serve`
FROM node:18

# Install the "serve" package globally
RUN npm install -g serve

# Copy build output from the previous stage
COPY --from=build /app/dist /app/dist

# Expose port 80
EXPOSE 80

# Start the app using `serve`
CMD ["serve", "-s", "/app/dist", "-l", "80"]
