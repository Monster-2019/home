FROM node:16-alpine as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.23.1-alpine

COPY --from=build /app/default.conf /etc/nginx/conf.d
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]