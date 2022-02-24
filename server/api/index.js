const router = require('express').Router()

router.use('/restaurants', require('./restaurants'))
router.use('/neighborhoods', require('./neighborhoods'))

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
