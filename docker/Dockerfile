FROM selenium/standalone-firefox

USER root

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - 
RUN apt-get install -y nodejs
RUN npm install -g npm@latest
RUN mkdir /opt/api-test/ && cd /opt/api-test/ \
    && npm install selenium-webdriver

COPY dl-and-access.sh /opt/dl-and-access.sh
COPY api-test.js /opt/api-test/api-test.js

RUN sudo echo ""

CMD ["/opt/dl-and-access.sh"]