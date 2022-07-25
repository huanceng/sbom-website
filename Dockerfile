FROM node:lts-alpine

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN npm config set registry https://registry.npmmirror.com/
RUN npm install -g @vue/cli
RUN npm install -g http-server

RUN npm install

RUN npm run build-production

EXPOSE 8080

ENTRYPOINT [ "http-server", "dist" ]