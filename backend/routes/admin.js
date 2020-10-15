const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const router = express.Router();
const Admin = require('../models/admin');

router.get('/:email', (req, res, next) => {
  Admin.findOne({email: req.params.email.toString()})
    .then(admin => {
      //console.log('admin : ',admin)
      if(admin){
        return res.status(200).json({
          success: true,
          admin: admin
        }); 
      }
      return res.status(200).json({
        success: false,
        error: admin
      });
    })
    .catch(error => {
      //console.log('on admin error : ',error)
      res.status(200).json({
        success: false,
        error: error
      });
    })
})

module.exports = router;