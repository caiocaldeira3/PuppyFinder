FROM alpine:latest

RUN apk update
RUN apk add --update --no-cache curl py-pip build-base python3-dev git 

RUN git clone --recursive https://github.com/caiocaldeira3/PuppyFinder.git

WORKDIR /PuppyFinder

RUN pip3 install -r requirements.build.txt
RUN virtualenv env 
RUN env/bin/pip3 install -r requirements.txt

ENTRYPOINT [ "env/bin/python3" ]
CMD [ "run.py" ]
