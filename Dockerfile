FROM node:16

COPY . /workspace
WORKDIR /workspace

RUN \
  npm install \
  && npm run build -w frontend \
  && npm run build -w backend

EXPOSE 3001
CMD [ "node", "./backend/dist/server.js" ]