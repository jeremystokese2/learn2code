
// this is a *named* function
function sumMyNums(a, b) {
    return (a + b)
};

function isPos(x) {
    return x >= 0
};

function randomNum() {
    return Math.random
};

// this is (or contains an) anonymous function
document.addEventListener('click', function() {
    console.log("Sup log")
})