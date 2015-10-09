export default function(err, req, res) {
    res.status(500)
       .send({ error: 'Something wrong happened' });
}
