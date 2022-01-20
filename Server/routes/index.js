const { request } = require('express');
var express = require('express');
var router = express.Router();

const dboperations=require('../dboperation')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//test connection
router.get('/test', function(req, res, next)
{
  dboperations.getdata()
  res.render('index',{title:'Express'})
})

//get all workers
router.get('/workers', function(req, res, next)
{
  dboperations.getWorkers().then(result=>
    {
        console.log(result)
        res.json(result[0])
    })
  //res.render('index',{title:'Express'})
})

//get all workers
router.get('/issues', function(req, res, next)
{
  dboperations.getIssues().then(result=>
    {
        console.log(result)
        res.json(result[0])
    })
  //res.render('index',{title:'Express'})
})

//get a specific worker
router.get('/worker/:id', function(req, res, next)
{
  dboperations.getWorker(req.params.id).then(result=>
    {
        console.log(result[0])
        res.json(result[0])
    })
})

module.exports = router;
