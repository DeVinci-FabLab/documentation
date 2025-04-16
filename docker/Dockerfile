# Stage 1: Base image.
FROM node:slim AS base
## Enable corepack as root first
RUN corepack enable
## Set the working directory to `/app`.
WORKDIR /app
## Disable colour output to make logs easier to read.
ENV FORCE_COLOR=0

# Stage 2a: Development mode.
FROM base AS dev
## Set the working directory to `/app`.
WORKDIR /app
## Expose the port that Docusaurus will run on.
EXPOSE 3000
## Create startup script
COPY ./docker/dev-startup.sh /dev-startup.sh
RUN chmod +x /dev-startup.sh
## Run the development server using the startup script
CMD ["/dev-startup.sh"]

# Stage 2b: Production build mode.
FROM base AS prod
## Use a build argument to force rebuild
ARG CACHEBUST=1
## Copy over the source code from site directory.
COPY ./site/ /app/
## Install dependencies with `--frozen-lockfile` to ensure reproducibility.
WORKDIR /app
RUN pnpm install --frozen-lockfile --force
## Build the static site.
RUN pnpm build

# Stage 3a: Serve with `docusaurus serve`.
FROM prod AS serve
## Expose the port that Docusaurus will run on.
EXPOSE 3000
## Add health check to verify the service is running properly
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -q --spider http://localhost:3000/ || exit 1
## Run the production server.
CMD ["pnpm", "serve", "--host", "0.0.0.0", "--no-open"]