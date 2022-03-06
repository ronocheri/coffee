const { request } = require('express');
var express = require('express');
var router = express.Router();
var path = require('path'), fs=require('fs');

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


router.get('/getPicturesOfEvent/:year', function(req, res, next)
{
  fromDir(req.params.year,'.html');

function fromDir(year,filter){
  var startPath="C:\\eit\\appserv\\eitdev\\rte\\eit\\coffee\\Server\\public\\assets\\Events\\"+year
    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        res.json("no dir");
    }

    var files=fs.readdirSync(startPath);
    var filesArray=[];

    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var relativePath="assets\\Events\\"+year+"\\"+files[i]
        const obj={key:i,val:relativePath};
        //const obj={key:i,val:filename};
        filesArray.push(obj)
        console.log('-- found: ',relativePath);
    };
    res.json(filesArray);
};
})


module.exports = router;
