// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const photoRouter = require('./photo')
const commentRouter = require('./comment');
const tagRouter=require('./tag');

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});



router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/photo', photoRouter);

router.use('/comment',commentRouter);

router.use('/tag', tagRouter)

module.exports = router;
