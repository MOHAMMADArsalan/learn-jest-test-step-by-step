function fetchData(cb) {
   return new Promise((res) => {
        setTimeout(() => {
           res("some data")
        }, 3000)
    })
}
module.exports = fetchData;