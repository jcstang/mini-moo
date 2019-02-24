const express = require('express');
const debug = require('debug')('app:aboutRoutes');

const aboutRouter = express.Router();

function router(titleThing) {
  aboutRouter.route('/')
    .get((req, res) => {
      res.render(
        'about',
        {
          title: titleThing
        }
      );
    });
  return aboutRouter;
};

module.exports = router;