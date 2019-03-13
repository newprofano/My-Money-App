const express = require('express');

module.exports = function(server) {
  //URL

  const router = express.Router();
  server.use('/api', router);

  //routes billing cicle

  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles');
};
