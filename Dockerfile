FROM node:8
USER root
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN apt-get install curl &&\
    apt-get update &&\
    curl -sL https://deb.nodesource.com/setup 10.x|bash - &&\
    apt-get install -y -f nodejs &&\		
    apt-get install dialog apt-utils -y -f &&\
    npm install
EXPOSE 3000
CMD [ "npm", "start" ]
