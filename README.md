# boxshot service [![Build Status](https://travis-ci.com/vergissberlin/boxshot-service.svg?branch=master)](https://travis-ci.com/vergissberlin/boxshot-service)

> Service to make screenshots of boxes

## Run

```bash
docker-compose up -d
# OR on production
docker-compose -f docker-compose.production.yml up -d
```

## Development

### Build

```bash
docker-compose build boxshot-service
```

### Releae

```bash
docker-compose push boxshot-service
```
