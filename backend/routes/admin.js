const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const router = express.Router();
const Admin = require('../models/admin');

router.get('/:email', (req, res, next) => {
  Admin.findOne({email: req.params.email})
    .then(admin => {
      if(admin){
        return res.status(200).json({
          status: true,
          admin: admin
        }); 
      }
      return res.status(200).json({
        status: false,
        admin: admin
      });
    })
    .catch(error => {
      
    })
})

module.exports = router;