const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/product');

const router = express.Router();

router.post('/store-product', (req, res, next) => {
  const formData = req.body.formData;
  formData.forEach(form => {
    Product.findOne({companyName: form.companyName, productName:form.productName, category: form.category})
    .then((product) => {
      if(product){
        console.log("---------------Got Update Product----------------")
        const history = product.history;
        history.push({
          date: new Date().toISOString(),
          totalProduct: product.totalProduct,
          totalPrice: product.totalPrice,
          prePieceSalePrice: product.prePieceSalePrice
        })
        const _product = product
        _product.history = history;
        _product.totalProduct += parseInt(form.totalProduct);
        _product.totalPrice += parseInt(form.totalPrice);
        _product.prePieceSalePrice = parseInt(form.prePieceSalePrice)
        Product.findByIdAndUpdate({_id: product._id}, {$set: _product})
          .then(updateProduct=> {
            const xx = updateProduct
            xx.history = []
            console.log("Update ",xx)
          })
        
      } else {
        console.log("---------------NO pRODUCT----------------")
        const product = new Product({
          _id: mongoose.Types.ObjectId(),
          companyName: form.companyName,
          productName: form.productName,
          category: form.category,
          totalProduct:parseInt(form.totalProduct),
          totalPrice:parseInt(form.totalPrice),
          prePieceSalePrice:parseInt(form.prePieceSalePrice)
        })
        product.save()
        const xx = product
        xx.history = []
        console.log("Update ",xx)
      }
      
    })
    .catch(error => {
      console.log(error)
    })
    
  });
  return res.status(200).json({
    success: true
  });
})

module.exports = router;