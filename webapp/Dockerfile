# STEP 1 build static website
FROM node:alpine as builder

RUN apk update && apk add --no-cache make git
# # Create app directory
WORKDIR /opt
# # Install app dependencies
COPY .  /opt

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++

RUN node --version
RUN cd /opt && npm set progress=false && npm install
RUN cd /opt && npm run build
RUN apk del .gyp


# STEP 2 build a small nginx image with static website
FROM nginx:alpine
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'builder' copy website to default nginx public folder
COPY --from=builder /opt/dist/toolbox /usr/share/nginx/html
EXPOSE 80   
CMD ["nginx", "-g", "daemon off;"]
