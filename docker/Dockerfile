FROM node:current-alpine

WORKDIR /usr/app/frontend

COPY ../ .

ENV PORT=32147
EXPOSE 32147

RUN npm install -g yarn
RUN yarn

ENTRYPOINT ["yarn", "build"]
CMD ["yarn", "start"]

