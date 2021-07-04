FROM alpine:latest

RUN apk update
RUN apk add build-base npm git

RUN git clone --recursive https://github.com/caiocaldeira3/PuppyFinder.git
WORKDIR PuppyFinder/frontend/puppyfinder

# Install node packages
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

# Build the app
RUN npm run build

CMD ["npm", "start"]
