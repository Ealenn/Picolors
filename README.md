# Picolors

[![GitHub issues](https://img.shields.io/github/issues/Ealenn/Picolors?style=for-the-badge)](https://github.com/Ealenn/Picolors/issues) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ealenn/picolors/Node%20CI?style=for-the-badge) ![David](https://img.shields.io/david/ealenn/picolors?style=for-the-badge)

> Extract prominent colors from an image

Based on [node-vibrant](https://github.com/akfish/node-vibrant)

## Microservice

```sh
➜ docker run --rm -p 8080:80 ealen/picolors web
HTTP Server Started
```

```sh
➜ curl localhost:8080/?s=https://picsum.photos/id/274/200/300
{ color: '#444cc0', textColor: '#fff' }
```

## CLI

```sh
# URL
➜ docker run --rm ealen/picolors https://picsum.photos/id/274/200/300
{ color: '#444cc0', textColor: '#fff' }

# File
➜ docker run --rm --read-only -v $PWD:/home picolors:latest /home/test.jpg
{ color: '#4294eb', textColor: '#fff' }
```
