FROM node:20-alpine AS builder

COPY . .

RUN yarn install --frozen-lockfile

RUN yarn build

FROM nginx:alpine AS runner

COPY nginx.conf.default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder dist /usr/share/nginx/html
