FROM node:16.15-buster
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ["package.json", "./"]

RUN npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent

COPY . .

EXPOSE 3000