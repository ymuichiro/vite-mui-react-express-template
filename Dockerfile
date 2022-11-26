FROM node:16-alpine3.16 as builder

COPY . /workspace
WORKDIR /workspace

RUN \
  npm ci \
  && npm run build

FROM node:16-alpine3.16

COPY --from=builder /workspace/dist /workspace/dist
COPY --from=builder /workspace/package.json /workspace/package.json
COPY --from=builder /workspace/package-lock.json /workspace/package-lock.json

WORKDIR /workspace
RUN NODE_ENV=production npm ci

EXPOSE 3001
CMD [ "npm", "run", "serve" ]