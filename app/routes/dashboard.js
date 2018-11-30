const express = require('express');
const router = express.Router();
const { issueStore } = require('../models');

router.get('/', function(req, res) {

  const openIssues = issueStore.getAllOpen();
  const openIssuesCount = openIssues.length;

  let highIssuesPercentage = calculatePercentage(openIssues, 'High');
  let mediumIssuesPercentage = calculatePercentage(openIssues, 'Medium');
  let lowIssuesPercentage = calculatePercentage(openIssues, 'Low');

  res.render('dashboard', {openIssuesCount, highIssuesPercentage, mediumIssuesPercentage, lowIssuesPercentage});
  
});

function calculatePercentage(issues, severity){
  let percentage = 0;
  if(issues.length > 0){
    percentage = issues.filter(issue => issue.severity === severity).length / issues.length;
  }
  return percentage;
}

module.exports = router;
