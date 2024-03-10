# syntax=docker/dockerfile:1.3-labs

FROM nginx:1.21.4
COPY /dist/* /usr/share/nginx/html/

# Docker Buildkit feature.
# This add try_files directive to default.conf.
RUN cat <<EOF > /etc/nginx/conf.d/default.conf
server {
    listen       80;
    server_name  localhost;
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files \$uri \$uri/ /index.html;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
EOF

CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
