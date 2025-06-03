# Contributing

Thank you for your interest in contributing to this repository! To ensure a smooth and collaborative process, please follow these guidelines.

## Before You Start

Before making any changes, please discuss the proposed change with the repository owners. You can do this via an issue, email, or any other communication method. Clearly outline your proposal and its benefits to the project.

## Code of Conduct

Please adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md) in all your interactions with the project. Respectful and inclusive communication is essential for collaboration.

## Internationalization (I18N)

All contributions should be in English to ensure that all members of the community can understand and contribute to the project. Translations can be provided in addition to the English version. Use the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) standard for language codes when naming translation files.

## Documentation

Documentation is required for all contributions (code, issues, or pull requests). It should be:

* Clear and concise
* Written in Markdown
* Included in the main `README.md` when applicable
* Supplemented in the `docs/` folder if more detail is needed

### Adding New Documentation

1. Place your Markdown file in `site/docs/<your-section>/<your-file>.md`.
2. Add the English version in `site/i18n/en/docusaurus-plugin-content-docs/current/<your-section>/<your-file>.md`.
3. Update `site/sidebar.ts` to add your file to the sidebar navigation.
4. If you are introducing a new category, update:

   * `site/i18n/en/docusaurus-plugin-content-docs/current.json`
   * `site/i18n/fr/docusaurus-plugin-content-docs/current.json`

Ensure your documentation is well-structured and easy to navigate.

## Deployment

Every solution should include a Docker deployment option, with a `compose.yml` and `Dockerfile` if necessary. The deployment process should be:

* As simple as possible
* Fully documented in the `README.md`

### Running the Project Locally

```bash
# Stop containers, remove volumes and orphan containers
docker compose down -v --remove-orphans

# Build and start the Docusaurus production container
docker compose up -d docusaurus-prod-local --build
```

Access the project at [http://localhost:3000](http://localhost:3000).

## Testing

All contributions must include tests to ensure project stability. Please follow these principles:

* Write unit tests for new features and bug fixes
* Use a testing framework appropriate to the language and project
* Ensure all tests pass before opening a pull request
* Include test instructions in the `README.md`

## Commit Messages

All commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format. This format ensures that the commit messages are easy to read and follow a consistent structure.

The use of emojis in commit messages is encouraged to make the messages more engaging and easier to understand.

## Git Strategy

All contributions should follow the [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) branching model. The main branches are:

* `main`: The main branch for the project. This branch should always be stable and deployable.
* `develop`: The development branch for the project. All feature branches should be merged into this branch.
* `feature/*`: Feature branches for new functionality. These branches should be merged into the `develop` branch.
* `hotfix/*`: Hotfix branches for critical bug fixes. These branches should be merged into the `main` and `develop` branches.
* `release/*`: Release branches for preparing a new release. These branches should be merged into the `main` and `develop` branches.
* `support/*`: Support branches for long-term support. These branches should be merged into the `main` branch.
* `docs/*`: Documentation branches for updating the documentation. These branches should be merged into the `main` branch.

## Archiving

Each project within the DeVinci Fablab organization should be archived when it is no longer maintained. This includes projects that have been completed or abandoned. Ensure that archived projects are clearly marked and documented.

## Licensing

All public projects within the DeVinci Fablab organization are licensed under the [MIT License](../LICENSE).

---

By following these guidelines, you help ensure that the project remains well-organized, accessible, and collaborative. Thank you for your contributions!
