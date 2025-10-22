<div align="center">

# DVFL Documentation

**The comprehensive documentation platform for DeVinci Fablab**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![Node.js](https://img.shields.io/badge/Node.js->=18.0-brightgreen.svg)](https://nodejs.org/) [![Docusaurus](https://img.shields.io/badge/Docusaurus-3.8.1-3ECC5F.svg)](https://docusaurus.io/) [![pnpm](https://img.shields.io/badge/pnpm-10.19.0-orange.svg)](https://pnpm.io/)

[Documentation](https://docs.devinci-fablab.fr/) • [Report Bug](https://github.com/DeVinci-FabLab/documentation/issues/new?template=bug_report.md) • [Request Feature](https://github.com/DeVinci-FabLab/documentation/issues/new?template=feature_request.md)

</div>

---

## Overview

This is the official documentation site for **DeVinci FabLab**, a comprehensive platform built with Docusaurus that provides guides, tutorials, workshops, and reference materials for all tools and services available at the Fablab. The documentation covers 3D printing, electronics, fabrication, IT courses, safety guidelines, and more.

### Features

- Multi-language support (French & English)
- Full-text search powered by Algolia
- Dark mode support
- LaTeX/KaTeX math rendering
- Workshop blog section
- Comprehensive equipment guides
- IT training courses
- Safety and charter documentation

---

## Table of Contents

- [DVFL Documentation](#dvfl-documentation)
  - [Overview](#overview)
    - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Development](#development)
      - [Using npm/pnpm scripts](#using-npmpnpm-scripts)
      - [Using Docker \& Makefile](#using-docker--makefile)
    - [Production Builds](#production-builds)
      - [Local production build](#local-production-build)
      - [Using Docker](#using-docker)
  - [Documentation Structure](#documentation-structure)
  - [Usage](#usage)
    - [Available Commands](#available-commands)
    - [Makefile Commands](#makefile-commands)
  - [Docker Support](#docker-support)
    - [Development Environment](#development-environment)
    - [Production Environment](#production-environment)
    - [Configuration Files](#configuration-files)
  - [Contributing](#contributing)
    - [Quick Start for Contributors](#quick-start-for-contributors)
  - [Troubleshooting](#troubleshooting)
    - [Build Failures](#build-failures)
    - [Docker Issues](#docker-issues)
    - [Port Already in Use](#port-already-in-use)
    - [pnpm Not Found](#pnpm-not-found)
  - [Supported Platforms](#supported-platforms)
  - [Supported Languages](#supported-languages)
  - [License](#license)

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0 ([Download](https://nodejs.org/))
- **pnpm** 10.19.0 or higher ([Installation guide](https://pnpm.io/installation))
- **Docker** (optional, for containerized development) ([Download](https://www.docker.com/))
- **Make** (optional, for using Makefile commands)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/DeVinci-FabLab/documentation.git
cd documentation
```

2. Navigate to the site directory:

```bash
cd site
```

3. Install dependencies:

```bash
pnpm install
```

### Development

#### Using npm/pnpm scripts

Start the development server:

```bash
cd site
pnpm start
```

The site will be available at `http://localhost:3000`. Changes will be hot-reloaded automatically.

#### Using Docker & Makefile

For a containerized development environment:

```bash
make dev
```

This will:

- Build and start the Docker container
- Mount the project directory for live reloading
- Expose the site at `http://localhost:3000`
- Stream logs to your terminal

To stop the development server:

```bash
make stop
```

### Production Builds

#### Local production build

```bash
cd site
pnpm build
pnpm serve
```

#### Using Docker

For a local production build with Docker:

```bash
make prod-local
```

For a full production deployment:

```bash
make prod
```

---

## Documentation Structure

```plaintext
Documentation/
├── site/                       # Docusaurus site
│   ├── docs/                   # Documentation content
│   │   ├── 3d_printing/        # 3D printing guides
│   │   ├── it_courses/         # IT training materials
│   │   ├── spaces_charters/    # Space usage charters
│   │   ├── intro.md            # Introduction page
│   │   ├── safety.md           # Safety guidelines
│   │   └── srg.md              # Internal regulations
│   ├── blog/                   # Workshops content
│   ├── i18n/                   # Internationalization
│   │   ├── en/                 # English translations
│   │   └── fr/                 # French content
│   ├── src/                    # React components & custom CSS
│   ├── static/                 # Static assets
│   ├── docusaurus.config.ts    # Docusaurus configuration
│   ├── sidebars.ts             # Sidebar configuration
│   └── package.json            # Dependencies
├── docker/                     # Docker configurations
├── .github/                    # GitHub templates & workflows
├── makefile                    # Automation commands
└── README.md                   # This file
```

---

## Usage

### Available Commands

In the `site/` directory:

| Command | Description |
|---------|-------------|
| `pnpm start` | Start development server |
| `pnpm build` | Build for production |
| `pnpm serve` | Serve production build |
| `pnpm clear` | Clear cache |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm write-translations` | Extract translatable strings |

### Makefile Commands

At the project root:

| Command | Description |
|---------|-------------|
| `make update` | Pull latest changes from repository |
| `make dev` | Start Docker development environment |
| `make prod-local` | Local production build with Docker |
| `make prod` | Production deployment with Docker |
| `make stop` | Stop all Docker containers |
| `make restart-dev` | Restart development environment |
| `make restart-prod-local` | Restart local production environment |
| `make restart-prod` | Restart production environment |
| `make clean` | Clean all packages and containers |

---

## Docker Support

The project includes comprehensive Docker support for both development and production environments:

### Development Environment

```bash
make dev
```

Uses `docker/compose.dev.yml` with hot-reloading and source mounting.

### Production Environment

```bash
make prod
```

Builds optimized static files and serves them with nginx.

### Configuration Files

- `docker/Dockerfile` - Multi-stage Docker build
- `docker/compose.dev.yml` - Development configuration
- `docker/compose.prod-local.yml` - Local production testing
- `docker/compose.yml` - Production deployment
- `docker/healthcheck.sh` - Container health checks

---

## Contributing

We welcome contributions from the community! Whether you want to add new courses, fix typos, improve documentation, or suggest features, your help is appreciated.

Please read our [Contributing Guidelines](./.github/CONTRIBUTING.md) for detailed information on:

- How to submit pull requests
- Code of conduct
- Development workflow
- Documentation standards

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit using conventional commits (`git commit -m 'feat: add amazing feature'`)
5. Push to your branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

For more details, see:

- [Code of Conduct](./.github/CODE_OF_CONDUCT.md)
- [Pull Request Template](./.github/PULL_REQUEST_TEMPLATE.md)
- [Support Guide](./.github/SUPPORT.md)

---

## Troubleshooting

### Build Failures

If you encounter build errors:

```bash
# Clear Docusaurus cache
cd site
pnpm clear

# Clean all dependencies
make clean
```

### Docker Issues

```bash
# Remove all containers and rebuild
make clean
make dev
```

### Port Already in Use

If port 3000 is already in use, modify the port in `docker/compose.*.yml` or kill the process using the port.

### pnpm Not Found

Install pnpm globally:

```bash
npm install -g pnpm@10.19.0
```

Or use corepack (Node.js 16.9+):

```bash
corepack enable
corepack prepare pnpm@10.19.0 --activate
```

---

## Supported Platforms

This documentation site is tested and supported on:

- Linux (Ubuntu 20.04+, Debian 10+)
- macOS (11.0+)
- Windows (10/11)
- Docker (any platform)

> The site itself is accessible from any modern web browser on any platform.

---

## Supported Languages

- **French (fr)** - Default language
- **English (en)** - Full translation support

To contribute translations, see the [i18n documentation](https://docusaurus.io/docs/i18n/introduction).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with by the DeVinci Fablab team**

[⬆ Back to Top](#dvfl-documentation)

</div>
