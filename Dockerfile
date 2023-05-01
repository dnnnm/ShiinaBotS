FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY . .

EXPOSE 5000

CMD ["pm2", "start", "index.js", "--no-daemon", "&&", "pm2", "save", "&&", "pm2", "logs"]
