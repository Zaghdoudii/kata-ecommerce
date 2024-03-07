#Use NodeJS Alpine image as build stage
FROM node:18.19-alpine as builder

# Set working directory inside the container
WORKDIR /app

COPY package.json .

# Install dependencies defined in package.json
RUN npm install

# Copy all source code into the working directory
COPY . .

RUN npm run build

#Use NGINX Alpine image to serve the built application
FROM nginx:alpine-slim

RUN rm -rf /usr/share/nginx/html/*

# Copy built files from previous stage into NGINX HTML directory
COPY --from=builder /app/dist/* /usr/share/nginx/html

# Expose port 80 to access the application via HTTP
EXPOSE 80

# Start command to run NGINX in daemon mode
CMD ["nginx", "-g", "daemon off;"]
