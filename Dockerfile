FROM keymetrics/pm2:latest-alpine

WORKDIR ./
COPY ./ ./
COPY package.json ./
COPY ecosystem.config.js .
RUN npm install
RUN npm run build
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]


ENV PORT 3000
EXPOSE 3000
