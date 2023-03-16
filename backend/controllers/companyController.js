const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Company = require('../models/companyModel')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerCompany = asyncHandler(async (req, res) => {
  console.log(req.body)
  const { companyName, email, password, tel, adress, lont, lat } = req.body
  if (!companyName || !email || !password || !tel || !adress || !lont || !lat) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if user exists
  const companyExists = await Company.findOne({ companyName, lat, lont })

  if (companyExists) {
    res.status(400)
    throw new Error('Company already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create company
  const company = await Company.create({
    companyName,
    email,
    password: hashedPassword,
    tel,
    adress,
    lont,
    lat
  })

  if (company) {
    res.status(201).json({
      _id: company.id,
      companyName: company.companyName,
      email: company.email,
      token: generateToken(company._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginCompany = asyncHandler(async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body
  // Check for user email
  const company = await Company.findOne({ email })

  if (company && (await bcrypt.compare(password, company.password))) {
    res.json({
      _id: company.id,
      companyName: company.companyName,
      email: company.email,
      token: generateToken(company._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Get company data
// @route   GET /api/companys/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.company)
})

// @desc    Get comapanys data
// @route   GET /api/companys/getAllCompanys
// @access  Public
const getCompanys = async (req, res) => {
  const companys = await Company.find({})
  // console.log(companys)
  res.status(200).json(companys)
}
// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30min',
  })
}

module.exports = {
  registerCompany,
  loginCompany,
  getMe,
  getCompanys
}
