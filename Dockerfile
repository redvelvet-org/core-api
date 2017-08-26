FROM node:8
MAINTAINER Anoop Varghese <anoop@redvelvet.io>

## TODO refactor
RUN apt-get update && apt-get install -y postgresql-client
RUN mkdir -p /opt/watchexec \
    && curl -SL https://github.com/mattgreen/watchexec/releases/download/1.8.2/watchexec-1.8.2-x86_64-unknown-linux-gnu.tar.gz \
    | tar zx -C /opt/watchexec \
    && ln -s /opt/watchexec/watchexec-1.8.2-x86_64-unknown-linux-gnu/watchexec /usr/local/bin/watchexec
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app
COPY ./yarn.lock /usr/src/app
RUN yarn

ADD . /usr/src/app
