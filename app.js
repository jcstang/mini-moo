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

var date = new Date();
var curr_year = date.getFullYear();
var next_year = curr_year + 1;

app.get('/', (req, res) => {
    res.render(
        'index',
        {
          title: 'KH Miniature Herefords',
          curr_year: curr_year,
          next_year: next_year
        }
    );
});

//notes - more notes
app.listen(port, () => {
    debug(`listening on port ${chalk.green(port)}`);
    console.log(`listenting on port ${port}`);
});