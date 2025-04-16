PROJECT_NAME := docs_project

dev:
	@echo "Targetting development environment"
	@docker compose -p $(PROJECT_NAME) up -d docusaurus-dev --build
	@echo "Docusaurus development build complete"
	@echo "Access the site at http://localhost:3000"
	@echo "To stop the server, run 'make stop'"

prod:
	@echo "Targetting production environment"
	@docker compose -p $(PROJECT_NAME) down -v --remove-orphans
	@docker build --build-arg CACHEBUST=$(shell date +%s) -t $(PROJECT_NAME)_docusaurus-prod -f docker/Dockerfile .
	@docker compose -p $(PROJECT_NAME) up -d docusaurus-prod
	@echo "Docusaurus production build complete"
	@echo "Access the site at http://localhost:3000"
	@echo "To stop the server, run 'make stop'"

stop:
	@echo "Stopping all containers"
	@docker compose -p $(PROJECT_NAME) down
	@echo "All containers stopped"
	@echo "To start the server again, run 'make dev' or 'make prod'"

restart-dev:
	@echo "Restarting development environment"
	@docker compose -p $(PROJECT_NAME) down
	@docker compose -p $(PROJECT_NAME) up -d docusaurus-dev --build
	@echo "Docusaurus development build complete"
	@echo "Access the site at http://localhost:3000"
	@echo "To stop the server, run 'make stop'"

restart-prod:
	@echo "Restarting production environment"
	@docker compose -p $(PROJECT_NAME) down -v --remove-orphans
	@docker build --build-arg CACHEBUST=$(shell date +%s) -t $(PROJECT_NAME)_docusaurus-prod -f docker/Dockerfile .
	@docker compose -p $(PROJECT_NAME) up -d docusaurus-prod
	@echo "Docusaurus production build complete"
	@echo "Access the site at http://localhost:3000"
	@echo "To stop the server, run 'make stop'"

clean:
	@echo "Cleaning up all packages and containers"
	@docker compose -p $(PROJECT_NAME) down -v --remove-orphans
	@rm -rf node_modules
	@rm -rf .docusaurus
	@echo "All packages and containers cleaned up"
	@echo "To start the server again, run 'make dev' or 'make prod'"
