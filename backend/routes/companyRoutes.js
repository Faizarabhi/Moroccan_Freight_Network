const express = require('express')
const router = express.Router()
const {
  registerCompany,
  loginCompany,
  getMe,
} = require('../controllers/companyController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerCompany)
router.post('/login', loginCompany)
router.get('/me', protect, getMe)

module.exports = router
