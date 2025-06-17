# Build nextjs app with static export
FROM node:lts AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# export the static files with lightweight static server
FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /app/out ./out

RUN npm install -g serve

EXPOSE 3000

CMD [ "serve", "-s", "out", "-l", "3000" ]