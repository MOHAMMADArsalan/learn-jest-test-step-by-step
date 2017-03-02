function fetchData(cb) {
   setTimeout(()=>{
        cb("some data")
   },3000)   
}
module.exports = fetchData;