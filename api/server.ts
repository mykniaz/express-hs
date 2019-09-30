import express from 'express';
import * as path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ping', (req, res) => {
  return res.send({ hello: 'world' });
});

app.listen(process.env.PORT || 8080);
