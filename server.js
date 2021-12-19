const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static(__dirname + "/public/"));

app.get('/', (req, res) => {
  res.status(200).send('Hello Node!!');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));