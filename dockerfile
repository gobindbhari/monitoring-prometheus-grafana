FROM oven/bun:1.1.0-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN bun install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "bun", "run", "start" ]