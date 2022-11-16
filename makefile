include .env

DOCKER_COMPOSE_DEVELOPMENT = ".config/docker/docker-compose.development.yml"
DOCKER_COMPOSE_PRODUCTION = ".config/docker/docker-compose.production.yml"
DOCKER_COMPOSE_SWAGGER = ".config/docker/docker-compose.swagger.yml"

clean:
	docker compose -p app -f $(DOCKER_COMPOSE_DEVELOPMENT) down -v --remove-orphans
	docker compose -p swagger -f $(DOCKER_COMPOSE_SWAGGER) down -v --remove-orphans
	npm run clean -w backend
	npm run clean -w frontend
	npm run clean

down:
	docker compose -p app -f $(DOCKER_COMPOSE_DEVELOPMENT) down
	docker compose -p swagger -f $(DOCKER_COMPOSE_SWAGGER) down

up:
	docker compose -p app -f $(DOCKER_COMPOSE_DEVELOPMENT) up -d
	docker compose -p swagger -f $(DOCKER_COMPOSE_SWAGGER) up -d

lint:
	npm run lint -w backend
	npm run lint -w frontend

install:
	docker compose -p app	-f $(DOCKER_COMPOSE_DEVELOPMENT) run --rm app -c "npm install"

start:
	@echo run backend: $(VITE_API_URL):$(VITE_API_PORT)
	@echo run frontend: http://localhost:$(VITE_PORT)
	docker compose -p app	-f $(DOCKER_COMPOSE_DEVELOPMENT) up

deploy:
	make down
	npm run clean -w backend
	docker compose -p app	-f $(DOCKER_COMPOSE_PRODUCTION) run \
	 --rm app -c "npm run build -w backend && npm run build -w frontend"
	docker compose -p app -f $(DOCKER_COMPOSE_PRODUCTION) up -d

swagger:
	docker compose -p swagger -f $(DOCKER_COMPOSE_SWAGGER) up swagger-ui