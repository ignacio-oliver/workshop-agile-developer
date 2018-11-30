const express = require('express');
const router = express.Router();
const { issueStore } = require('../models');

router.get('/', function(req, res) {

  const openIssues = issueStore.getAllOpen();
  const openIssuesCount = openIssues.length;
  let highIssuesCount = 0;
  if(openIssuesCount > 0){
    highIssuesCount = openIssues.filter(issue => issue.severity === 'High').length / openIssuesCount;
  }
  res.render('dashboard', {openIssuesCount, highIssuesCount});
  
});

module.exports = router;
