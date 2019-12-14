import Picolors from '../helpers/Picolors';
import * as http from 'http'
import * as url from 'url'

console.log('HTTP Server Started');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});

    if (req.url == "/ping") {
        res.end();
    } else {
        let query = url.parse(req.url, true).query.s;
        Picolors(query)
            .then(colors => res.end(JSON.stringify(colors)))
            .catch(() => {
                res.statusCode = 400;
                res.end(JSON.stringify({
                    error: "You must send an image URL in the query"
                }));
            })
        console.log(`${req.url}`);
    }
}).listen(80);