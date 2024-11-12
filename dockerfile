# Dockerfile to run frontend and backend concurrently

# Base image for Node.js
FROM node:18

# Set up working directory
WORKDIR /app

# Copy and install frontend dependencies
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Copy and install backend dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Copy the rest of the code for both frontend and backend
COPY frontend ./frontend
COPY backend ./backend

# Build the frontend for production
RUN cd frontend && npm run build

# Expose the backend port
EXPOSE 3000

# Install concurrently to run both frontend and backend
RUN npm install concurrently --save-dev

# Use concurrently to run both frontend and backend
CMD ["npx", "concurrently", "node backend/server.js", "npm --prefix frontend run preview"]
