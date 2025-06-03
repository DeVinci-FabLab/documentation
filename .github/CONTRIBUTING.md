# Contributing

Thank you for your interest in contributing to this repository! To ensure a smooth and collaborative process, please follow these guidelines.

## Before You Start

Before making any changes, please discuss the proposed change with the repository owners. You can do this via an issue, email, or any other communication method. Clearly outline your proposal and its benefits to the project.

## Code of Conduct

Please adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md) in all your interactions with the project. Respectful and inclusive communication is essential for collaboration.

## Internationalization (I18N)

All contributions should be in English to ensure that all members of the community can understand and contribute to the project. Translations can be provided in addition to the English version. Use the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) standard for language codes when naming translation files.

## Documentation

Documentation is mandatory for all contributions, including code, issues, and pull requests. The documentation should be:

- Clear and concise
- Written in Markdown format
- Included in the `README.md` file at the root of the project
- Additional documentation can be added to the `docs` folder

### Adding New Documentation

To add new documentation, follow these steps:

1. Add your Markdown file in the appropriate section under `site/docs/<your-section>/<your-file>.md`.
2. Add the English version of your file in `site/i18n/en/docusaurus-plugin-content-docs/current/<your-section>/<your-file>.md`.
3. Update `site/sidebar.ts` to include a link to your Markdown file in the sidebar.
4. If adding a new category, update the following files:
   - `site/i18n/en/docusaurus-plugin-content-docs/current.json`
   - `site/i18n/fr/docusaurus-plugin-content-docs/current.json`

Ensure that your documentation is well-structured and easy to navigate.

## Deployment

Every solution should include a Docker deployment option, with a `compose.yml` and `Dockerfile` if necessary. The deployment process should be:

- As simple as possible
- Documented in the `README.md` file

### Running the Project

To run the project locally, use the following commands:

```bash
# Stop any running containers and remove volumes and orphans
docker compose down -v --remove-orphans

# Build and start the Docusaurus production container
docker compose up -d docusaurus-prod-local --build
```

Once the project is running, you can access it at [http://localhost:300](http://localhost:300).

## Testing

All contributions should include tests to ensure the stability and reliability of the project. Please follow these guidelines for testing:

- Write unit tests for new functionality and bug fixes.
- Use a testing framework appropriate for the project's language and environment.
- Ensure that all tests pass before submitting a pull request.
- Include instructions on how to run the tests in the README.md file.

## Commit Messages

All commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format. This format ensures that the commit messages are easy to read and follow a consistent structure.

The use of emojis in commit messages is encouraged to make the messages more engaging and easier to understand.

## Git Strategy

All contributions should follow the [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) branching model. The main branches are:

- `main`: The main branch for the project. This branch should always be stable and deployable.
- `develop`: The development branch for the project. All feature branches should be merged into this branch.
- `feature/*`: Feature branches for new functionality. These branches should be merged into the `develop` branch.
- `hotfix/*`: Hotfix branches for critical bug fixes. These branches should be merged into the `main` and `develop` branches.
- `release/*`: Release branches for preparing a new release. These branches should be merged into the `main` and `develop` branches.
- `support/*`: Support branches for long-term support. These branches should be merged into the `main` branch.
- `docs/*`: Documentation branches for updating the documentation. These branches should be merged into the `main` branch.

## Archiving

Each project within the DeVinci Fablab organization should be archived when it is no longer maintained. This includes projects that have been completed or abandoned. Ensure that archived projects are clearly marked and documented.

## Licensing

All public projects within the DeVinci Fablab organization are licensed under the [MIT License](../LICENSE).

---

By following these guidelines, you help ensure that the project remains well-organized, accessible, and collaborative. Thank you for your contributions!
