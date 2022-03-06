var config = require("./dbconfig");
const sql = require("mssql");


async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log(" mathus-error :" + error);
  }
}
 
async function getIssues() {
    try {
        
      let pool = await sql.connect(config);
      let res = await pool.request().query("SELECT *  FROM NewspaperIssue");
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }

async function getWorkers() {
    try {
        
      let pool = await sql.connect(config);
      let res = await pool.request().query("SELECT *  FROM Workers");
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }
  

  async function getWorker(workerId) {
    try {
        
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('input_parameter',sql.Int,workerId)
      .query("SELECT *  FROM Workers where id = @input_parameter");
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }

 
  

module.exports = {
  getdata: getdata,
  getWorkers:getWorkers,
  getWorker:getWorker,
  getIssues:getIssues
};
