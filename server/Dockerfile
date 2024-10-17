FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

# ENV variable for the port and database connection
ENV PORT=3000
ENV MONGODB_URL=mongodb+srv://akay41024:askhan1497@cluster0.av6w9.mongodb.net
ENV CORS_ORIGIN=*

CMD [ "node", "src/index.js" ]

