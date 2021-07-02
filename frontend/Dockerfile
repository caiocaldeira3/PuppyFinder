FROM alpine:latest

RUN apk update
RUN apk add build-base npm 

WORKDIR /PuppyFinder
COPY . .

WORKDIR puppyfinder 

#RUN rm package-lock.json 

# Install node packages
RUN npm install #--silent
RUN npm install react-scripts@3.3.1 -g --silent

# Build the app
RUN npm run build

# Set host to localhost / the docker image
ENV NUXT_HOST=0.0.0.0

# Set app port
ENV NUXT_PORT=8080

CMD ["npm", "start"]
