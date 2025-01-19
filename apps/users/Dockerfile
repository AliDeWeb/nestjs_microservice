FROM node:current-alpine3.21 AS build
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm build

FROM node:current-alpine3.21 AS production
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --prod
COPY --from=build /app/dist ./dist
CMD [ "node", "dist/apps/users/main" ]