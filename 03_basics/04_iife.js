//Immediately Invoked Function Expressions (IIFE)

//to separate two iife's use semicolon after first iife

(function chai(){
    //named iife
    console.log("DB CONNECTED");
})();

//how to pass the parameters to iife
( (name) => {
    console.log(`The arrow iife of ${name} :)`);
} )("Lokesh")


// (function definition)(call to function)