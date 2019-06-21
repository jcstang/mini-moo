const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public'),{ maxAge: '1d' }));
//app.use(express.static(path.join(__dirname, '/public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const aboutRouter = require('./src/routes/aboutRoutes')('About Pages');
const showsRouter = require('./src/routes/showsRoutes')('Shows Page');
app.use('/about', aboutRouter);
app.use('/shows', showsRouter);

var date = new Date();
var curr_year = date.getFullYear();
var next_year = curr_year + 1;

app.get('/', (req, res) => {
    res.render(
        'index',
        {
          title: 'KH Miniature Herefords',
          thisYear: curr_year,
          nextYear: next_year
        }
    );
});

//notes - more notes
app.listen(port, () => {
    debug(`listening on port ${chalk.green(port)}`);
    console.log(`listenting on port ${port}`);
});