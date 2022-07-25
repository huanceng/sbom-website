FROM node:lts-alpine

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN npm config set registry https://registry.npmmirror.com/ \
    && npm install -g @vue/cli \
    && npm install -g http-server \
    && npm install \
    && npm run build-production

EXPOSE 8080

ENTRYPOINT [ "http-server", "dist" ]