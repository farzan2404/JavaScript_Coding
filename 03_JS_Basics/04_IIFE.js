// Immediately Invoked Function Expressions (IIFE)

(function chai () {
    console.log("Hey! there");
})();

// We use IIFE, to get affected by the global pollution happens due to variables, or other things

(() => {
    console.log("Hey! there welcome again")
})()