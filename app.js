const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const aboutRouter = require('./src/routes/aboutRoutes')('About Pages');

app.use('/about', aboutRouter);

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