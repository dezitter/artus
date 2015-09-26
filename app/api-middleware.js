import httpProxy from 'http-proxy';

let proxy = httpProxy.createProxyServer();

export default function(req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:3001'
    });
}
