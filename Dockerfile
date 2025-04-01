FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

COPY . .
RUN bun run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
