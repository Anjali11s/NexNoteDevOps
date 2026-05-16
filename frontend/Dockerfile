# Multi-stage build concept:
# Stage 1: Build React app
# Stage 2: Serve with nginx (lightweight web server)

# STAGE 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# npm run build -> Converts React/JSX to plain HTML/CSS/JS
# Output goes to 'dist' folder
RUN npm run build

# STAGE 2: Production server
FROM nginx:alpine

# nginx -> Web server that serves static files (HTML, CSS, JS)
# Very fast, handles many concurrent connections

# Copy built files from build stage
# /usr/share/nginx/html = default nginx serving directory
COPY --from=build /app/dist /usr/share/nginx/html

# Custom nginx config for React Router
# Single Page Application needs all routes to go to index.html
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
    location /api { \
        proxy_pass http://backend:5001; \
        proxy_set_header Host $host; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]