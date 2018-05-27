#!/bin/sh

echo ${FIREFOX_VERSIONS:-60.0.1} | tr ',' '\n' | while read version; do 
    wget --no-verbose -O /tmp/firefox.tar.bz2 "https://ftp.mozilla.org/pub/firefox/releases/"$version"/linux-x86_64/en-US/firefox-"$version".tar.bz2" 
    tar -C /opt -xjf /tmp/firefox.tar.bz2 
    rm /tmp/firefox.tar.bz2 
    mv /opt/firefox /opt/firefox-$version 
    echo $version
    node /opt/api-test/api-test.js /opt/firefox-$version
    done

rm -rf /opt/firefox*