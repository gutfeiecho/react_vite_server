FROM node:18.18.2
COPY . /home/soft/www/react_vite_server
WORKDIR /home/soft/www/react_vite_server

# 指定环境变量 NODE_ENV为production
ENV NODE_ENV=production
RUN npm install
EXPOSE 8989
# CMD 在docker run时运行，RUN在docker build时运行
CMD ["node", "src/app.js"]