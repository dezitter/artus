import httpProxy from 'http-proxy';

const { API_HOST, API_PORT } = process.env;
const proxy = httpProxy.createProxyServer();

export default function(req, res) {
    proxy.web(req, res, {
        target: `http://${API_HOST}:${API_PORT}`
    });
}
