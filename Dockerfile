# Base image is version 8-onbuild of codemao-master
FROM registry.srv.codemao.cn:5000/codemao-master:8-onbuild

# Workdir is unprivileged user home
WORKDIR /usr/src/app

# Copy application source code
COPY . /usr/src/app

RUN chown -R codemao /usr/src/app

# Download qshell
RUN mkdir /srv/qiniu && \
  curl -o /srv/qiniu/qshell https://ops-files.codemao.cn/qshell && \
  chmod -R +x /srv/qiniu

USER codemao

RUN npm config set registry https://registry.npm.taobao.org

# Install node dependencies, don't modify lockfile
RUN npm install
RUN npm rebuild node-sass
# Build Application
RUN npm run build:production

EXPOSE 5000

ARG QN_AKEY=''
ARG QN_SKEY=''

RUN echo "UPLOAD FILES TO QINIU SERVER" \
    && if [ "$QN_AKEY" != ''  -a  "$QN_SKEY" != '' ]; then /srv/qiniu/qshell account $QN_AKEY $QN_SKEY \ 
    && /srv/qiniu/qshell qupload 2 ./config/qnconfig.json; fi

# Entry point
ENTRYPOINT ["npm","run"]
CMD ["startApp"]
