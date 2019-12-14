FROM mhart/alpine-node:12 as dependencies
WORKDIR /work
COPY package.json .
COPY package-lock.json .
RUN npm install --production

FROM mhart/alpine-node:12 as build
WORKDIR /work
COPY package.json .
COPY package-lock.json .
RUN npm install --only-dev
COPY ./.babelrc .
COPY ./src ./src
RUN npm run build

FROM mhart/alpine-node:slim-12
WORKDIR /app
COPY --from=dependencies ./work/node_modules ./node_modules
COPY --from=build ./work/build .
COPY ./entrypoint.sh .

ENTRYPOINT [ "./entrypoint.sh"]
CMD ["cli"]