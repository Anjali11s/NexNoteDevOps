# STAGE 1: Builder - Heavy tools + dependencies

#  base image -> Node.js version 18 on Alpine Linux -> Smaller size = faster downloads = less bandwidth
FROM node:18-alpine AS builder 

# Set working directory inside container (Create /app folder and go inside it)
WORKDIR /app

# Copy package.json from your laptop to container
COPY package*.json ./

# npm ci: Installs EXACT versions from package-lock.json ->Faster, more reliable for production
# npm install: Can update versions, good for development
RUN npm ci --only=production


# STAGE 2: Production image
FROM node:18-alpine
WORKDIR /app

# Copy only what we need from builder stage -> Smaller image size (only production deps, no dev tools)
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# EXPOSE: Documents which port your app uses
EXPOSE 5001

# HEALTHCHECK? -> Docker will check if your app is alive every 30s
# curl -f = fail if HTTP error
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5001/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Command to run when container starts
CMD ["node", "server.js"]