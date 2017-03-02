function checkEmail(email) {
    let pattren = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
    return pattren.test(email)
}

module.exports = checkEmail