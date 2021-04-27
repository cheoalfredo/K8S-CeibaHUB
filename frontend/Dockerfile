FROM nginx:1.17.10-alpine
RUN apk add nano && apk add curl
COPY ./index.html /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
COPY ./ok.png /usr/share/nginx/html
COPY ./cancel.png /usr/share/nginx/html	
EXPOSE 80
