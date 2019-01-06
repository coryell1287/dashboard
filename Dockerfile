FROM keymetrics/pm2:latest-alpine

WORKDIR ./
COPY package-lock.json package.json ecosystem.config.js . ./
RUN npm install
CMD npm start

ENV PORT 3000
EXPOSE 3000
