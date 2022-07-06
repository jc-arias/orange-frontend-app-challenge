  # Base stage
# ---------------------------------------
FROM node:14.19-alpine AS base

# This get shared across later stages
WORKDIR /usr/src/app
RUN chown node:node /usr/src/app
RUN apk update && apk upgrade
USER node

# Development stage
# ---------------------------------------
FROM base AS development

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV SERVER_PORT=3000
EXPOSE $SERVER_PORT 9229

USER root
RUN npm install nodemon -g

USER node

COPY --chown=node:node package*.json ./

RUN \
  npm install && \
  npm audit fix && \
  npm cache clean --force

COPY --chown=node:node . .

CMD ["nodemon", "/usr/src/app/server.js"]

# Production stage
# ---------------------------------------
FROM base AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --chown=node:node package*.json ./

RUN \
  npm install && \
  npm audit fix && \
  npm cache clean --force


COPY --chown=node:node . .
ENV SERVER_PORT=3000

EXPOSE $SERVER_PORT

CMD [ "node", "/usr/src/app/server.js" ]

