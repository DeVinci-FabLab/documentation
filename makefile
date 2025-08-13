update:
	@echo "Pulling latest changes from the repository"
	@git pull --rebase
	@echo "Repository updated"

dev:
	@echo "Targetting development environment"
	docker compose -f docker/compose.dev.yml up -d --build
	@echo "Docusaurus development build complete"
	@echo "Access the site at http://localhost:3000"
	@echo "To stop the server, run 'make stop'"
	docker logs -f documentation-docusaurus-dev

prod-local:
	@echo "Targetting production environment with local build"
	docker compose -f docker/compose.dev.yml -f docker/compose.prod-local.yml -f docker/compose.yml down -v --remove-orphans
	docker compose -f docker/compose.prod-local.yml up -d --build
	@echo "Docusaurus production build complete"
	@echo "Access the site at http://localhost:3000"
	@echo "To stop the server, run 'make stop'"

prod:
	@echo "Targetting production environment"
	docker compose -f docker/compose.dev.yml -f docker/compose.prod-local.yml -f docker/compose.yml down -v --remove-orphans
	docker compose -f docker/compose.yml up -d --build
	@echo "Docusaurus production build complete"
	@echo "To stop the server, run 'make stop'"

stop:
	@echo "Stopping all containers"
	docker compose -f docker/compose.dev.yml -f docker/compose.prod-local.yml -f docker/compose.yml down
	@echo "All containers stopped"
	@echo "To start the server again, run 'make dev' or 'make prod'"

restart-dev:
	@echo "Restarting development environment"
	docker compose -f docker/compose.dev.yml down -v --remove-orphans
	docker compose -f docker/compose.dev.yml up -d --build
	@echo "Docusaurus development build complete"
	@echo "Access the site at http://localhost:3000"
	@echo "To stop the server, run 'make stop'"
	docker logs -f documentation-docusaurus-dev

restart-prod-local:
	@echo "Restarting production environment with local build"
	docker compose -f docker/compose.prod-local.yml down -v --remove-orphans
	docker compose -f docker/compose.prod-local.yml up -d --build
	@echo "Docusaurus production build complete"
	@echo "Access the site at http://localhost:3000"
	@echo "To stop the server, run 'make stop'"

restart-prod:
	@echo "Restarting production environment"
	docker compose -f docker/compose.yml down -v --remove-orphans
	docker compose -f docker/compose.yml up -d --build
	@echo "Docusaurus production build complete"
	@echo "To stop the server, run 'make stop'"

clean:
	@echo "Cleaning up all packages and containers"
	docker compose -f docker/compose.dev.yml -f docker/compose.prod-local.yml -f docker/compose.yml down -v --remove-orphans
	docker image prune -f
	rm -rf site/node_modules
	rm -rf site/.docusaurus
	rm -rf site/.pnpm-store
	@echo "All packages and containers cleaned up"
	@echo "To start the server again, run 'make dev' or 'make prod'"
