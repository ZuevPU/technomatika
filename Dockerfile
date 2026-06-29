FROM node:24-slim

WORKDIR /app/bot

RUN apt-get update \
  && apt-get install -y --no-install-recommends curl \
  && rm -rf /var/lib/apt/lists/*

COPY bot/package.json bot/package-lock.json ./
RUN npm ci --omit=dev

COPY bot/bot.js ./

ENV NODE_ENV=production
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD curl -f http://127.0.0.1:8080/health || exit 1

CMD ["node", "bot.js"]
