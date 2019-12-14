# Picolors

> Extract prominent colors from an image

Based on [node-vibrant](https://github.com/akfish/node-vibrant)

## Microservice

```sh
Picolors on  master [!?] via ⬢ v12.13.1 on 🐳 v19.03.5 took 7s
➜ docker run --rm -p 8080:80 ealen/picolors web
HTTP Server Started

Picolors on  master [!?] via ⬢ v12.13.1 on 🐳 v19.03.5 took 7s
➜ curl localhost:8080/?s=https://picsum.photos/id/274/200/300
{ color: '#444cc0', textColor: '#fff' }
```

## CLI

```sh
# URL
Picolors on  master [!?] via ⬢ v12.13.1 on 🐳 v19.03.5 took 7s
➜ docker run --rm ealen/picolors https://picsum.photos/id/274/200/300
{ color: '#444cc0', textColor: '#fff' }

# File
Picolors on  master [!?] via ⬢ v12.13.1 on 🐳 v19.03.5 at took 3s
➜ docker run --rm --read-only -v $PWD:/home picolors:latest /home/test.jpg
{ color: '#4294eb', textColor: '#fff' }
```
