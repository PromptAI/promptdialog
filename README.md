## Usage

[View the documentation](https://pmarsceill.github.io/just-the-docs/) for usage information.

## Develop

```
docker-compose up jekyll
```

## Build

```
docker-compose run --rm jekyll jekyll build
```

## Build without language selector
```
docker-compose run --rm jekyll jekyll build --config _noLanguageSelector.yml
```