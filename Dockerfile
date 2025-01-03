FROM ruby:2.7

ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

WORKDIR /usr/src/app

# 安装系统依赖
RUN apt-get update && apt-get install -y \
    build-essential \
    libssl-dev \
    zlib1g-dev \
    ca-certificates && \
    update-ca-certificates

RUN gem install bundler:2.4.22

ADD . ./
RUN bundle install

EXPOSE 4000
