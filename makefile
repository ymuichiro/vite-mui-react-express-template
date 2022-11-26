include .env

DOCKER_COMPOSE_DEVELOPMENT=".config/docker/docker-compose.development.yml"

up:
	docker compose -f $(DOCKER_COMPOSE_DEVELOPMENT) up -d

down:
	docker compose -f $(DOCKER_COMPOSE_DEVELOPMENT) down
