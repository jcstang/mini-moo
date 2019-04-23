const express = require('express');
const debug = require('debug')('app:showsRoutes');

const showsRouter = express.Router();

function router(titleName) {
  showsRouter.route('/')
    .get((req, res) => {
      res.render(
        'Shows', {
          title: titleName
        }
      );
    });
  return showsRouter;
};


module.exports = router;