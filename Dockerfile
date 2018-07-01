FROM node:8-alpine

ENV PORT 3000

WORKDIR /usr/src/app
COPY ./ ./

RUN npm run build
CMD npm run server
EXPOSE 3000
