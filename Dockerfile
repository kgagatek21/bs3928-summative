# Stage1: UI Build
FROM node:20-slim
WORKDIR /usr/src
COPY client/ ./client/
RUN cd client && npm install && npm run build

# Stage2: API Build
# FROM node:20-slim AS api-build
WORKDIR /usr/src
COPY server/ server/
RUN cd server && npm install && ENVIRONMENT=production npm run build 
RUN ls
WORKDIR /usr/src/server

# Stage3: Packagign the app
# FROM node:20-slim
# WORKDIR /root/
# COPY /usr/src/client/build ./client/build
# COPY /usr/src/server/dist .
# RUN ls

EXPOSE 80

CMD ["node", "app.js"]