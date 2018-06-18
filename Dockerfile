FROM node:alpine AS builder
WORKDIR /var/www
COPY package.json yarn.lock ./
RUN yarn install
COPY public public
COPY src src
RUN yarn build

FROM nginx:alpine
LABEL Author="Charles Stover"
LABEL traefik.backend="quisido"
LABEL traefik.frontend.rule="Host:quisido.com,www.quisido.com"
LABEL traefik.port="80"
RUN rm -rf /etc/nginx/conf.d
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /var/www/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
