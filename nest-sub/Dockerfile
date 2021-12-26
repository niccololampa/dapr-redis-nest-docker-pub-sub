FROM node:16.13.0-alpine

WORKDIR "/app"
COPY ./nest-sub/package.json ./
RUN yarn install
COPY ./nest-sub .
RUN yarn run build

EXPOSE 3000
CMD ["yarn","start:prod"]
