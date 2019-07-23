const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const port = process.env.PORT || 7000
const app = express();
dotenv.config();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'dist/index.html'))
});

app.listen(port, () => {
    console.log(`Server running on ${ port }`);
});
