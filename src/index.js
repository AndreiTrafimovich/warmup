module.exports = function warmup(temperature) {
    if(!isNaN(temperature)) {
        return temperature * 9/5 + 32;
    } else {
        throw "Not a valid input data";
    }
};
