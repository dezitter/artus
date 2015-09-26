import httpProxy from 'http-proxy';

const HOST = process.env.API_HOST;
const PORT = process.env.API_PORT;

let proxy = httpProxy.createProxyServer();

export default function(req, res) {
    proxy.web(req, res, {
        target: `http://${HOST}:${PORT}`
    });
}
