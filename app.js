const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(
        'index',
        {
          title: 'KH Miniature Herefords'
        }
    );
});

app.listen(port, () => {
    debug(`listening on port ${chalk.green(port)}`);
});