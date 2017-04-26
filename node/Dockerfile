# Set the base image to Ubuntu
FROM    ubuntu:trusty



# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup | sudo bash - && \
    apt-get -y install python build-essential nodejs

# Install nodemon
#RUN npm install -g nodemon


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app



# Expose port
EXPOSE  8080

# Run app using node
CMD [ "npm", "start" ]
