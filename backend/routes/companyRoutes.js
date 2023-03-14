const express = require('express')
const router = express.Router()
const {
  registerCompany,
  loginCompany,
  getMe,
  getCompanys
} = require('../controllers/companyController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerCompany)
router.post('/login', loginCompany)
router.get('/me', protect, getMe)
router.get('/getAllCompanys',  getCompanys)


module.exports = router
