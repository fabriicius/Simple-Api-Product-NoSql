FROM node:14
WORKDIR  /usr/share/nginx/html
ARG PORT=3000
ENV PORT=$PORT
EXPOSE $PORT
COPY . .
RUN npm install 
ENTRYPOINT npm start
