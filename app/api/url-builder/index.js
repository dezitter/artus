const HOST = process.env.API_HOST;
const PORT = process.env.API_PORT;

export default function(url) {
    return `http://${HOST}:${PORT}${url}`;
}
