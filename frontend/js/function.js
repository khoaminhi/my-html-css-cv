// 1. Function parameter (hoisting, closure, parameter on default defined value)
// You can call function by parentheses (function(){})(paramter1, parameter2)
{
    // version 1.5 => exit or handle return of fCall, ...
    // Result in console
    // => must be return end check to exit in parent function called
    
    const khoaminhi = 'khoaminhi';
    const options = {};
    const param1 = 1, param3 = 3;

    const fCall = function(param11) {
        console.log(khoaminhi);
        console.log('arguments: ', arguments)
        console.log('param1: ', param11, 'param3: ', param3);
    }

    options.fCall = fCall;

    function fRoot(options = {}) {
        if (typeof options.fCall === 'function') {
            let param1 = 11;
            const param3 = 33;
            options.fCall(param1, param3);
            console.log('....end call fCall')
        }
    }

    fRoot(options);
    console.log('joiewph')
    //=========================================================\\
    //*/
}




// {
//     // version 1.4 => pass more argument than parameter into fCall()
//     // Result in console
//     // khoaminhi
//     // arguments:  [Arguments] { '0': 11, '1': 33 }
//     // param1:  11 param3:  3
//     // joiewph

//     const khoaminhi = 'khoaminhi';
//     const options = {};
//     const param1 = 1, param3 = 3;

//     const fCall = function(param11) {
//         console.log(khoaminhi);
//         console.log('arguments: ', arguments)
//         console.log('param1: ', param11, 'param3: ', param3);
//     }

//     options.fCall = fCall;

//     function fRoot(options = {}) {
//         if (typeof options.fCall === 'function') {
//             let param1 = 11;
//             const param3 = 33;
//             options.fCall(param1, param3);
//         }
//     }

//     fRoot(options);
//     console.log('joiewph')
//     //=========================================================\\
//     //*/
// }



// {
//     // version 1.4 => don't match parameter name and argument name in fCall()
//     // Result in console
//     // khoaminhi
//     // arguments:  [Arguments] { '0': 11, '1': 33 }
//     // param1:  11 param3:  33
//     // joiewph

//     const khoaminhi = 'khoaminhi';
//     const options = {};
//     const param1 = 1, param3 = 3;

//     const fCall = function(param11, param33) {
//         console.log(khoaminhi);
//         console.log('arguments: ', arguments)
//         console.log('param1: ', param11, 'param3: ', param33);
//     }

//     options.fCall = fCall;

//     function fRoot(options = {}) {
//         if (typeof options.fCall === 'function') {
//             let param1 = 11;
//             const param3 = 33;
//             options.fCall(param1, param3);
//         }
//     }

//     fRoot(options);
//     console.log('joiewph')
//     //=========================================================\\
//     //*/
// }


// {
//     // version 1.3 => define fCall with parameters
//     // Result in console
//     // khoaminhi
//     // arguments:  [Arguments] { '0': 11, '1': 33 }
//     // param1:  11 param3:  33
//     // joiewph

//     const khoaminhi = 'khoaminhi';
//     const options = {};
//     const param1 = 1, param3 = 3;

//     const fCall = function(param1, param3) {
//         console.log(khoaminhi);
//         console.log('arguments: ', arguments)
//         console.log('param1: ', param1, 'param3: ', param3);
//     }

//     options.fCall = fCall;

//     function fRoot(options = {}) {
//         if (typeof options.fCall === 'function') {
//             let param1 = 11;
//             const param3 = 33;
//             options.fCall(param1, param3);
//         }
//     }

//     fRoot(options);
//     console.log('joiewph')
//     //=========================================================\\
//     //*/
// }




/*/ version 1.3 => pass arguments to options.fCall()
// Result in console
// khoaminhi
// arguments:  [Arguments] { '0': 11, '1': 33 }
// param1:  1 param3:  3
// joiewph

const khoaminhi = 'khoaminhi';
const options = {};
const param1 = 1, param3 = 3;

const fCall = function() {
    console.log(khoaminhi);
    console.log('arguments: ', arguments)
    console.log('param1: ', param1, 'param3: ', param3);
}

options.fCall = fCall;

function fRoot(options = {}) {
    if (typeof options.fCall === 'function') {
        let param1 = 11;
        const param3 = 33;
        options.fCall(param1, param3);
    }
}

fRoot(options); 
console.log('joiewph')
//=========================================================\\
//*/


/*/ version 1.2 => don't hoisting function fRoot
// Result in console
// khoaminhi
// param1:  1 param3:  3
// joiewph

const khoaminhi = 'khoaminhi';
const options = {};
const param1 = 1, param3 = 3;

const fCall = function() {
    console.log(khoaminhi);
    console.log('param1: ', param1, 'param3: ', param3);
}

options.fCall = fCall;

function fRoot(options = {}) {
    if (typeof options.fCall === 'function') {
        options.fCall();
    }
}

fRoot(options);
console.log('joiewph')
//=====================================================================\\
//*/




/* version 1.1
const khoaminhi = 'khoaminhi';
const options = {};


const fCall = function() {
    console.log(khoaminhi);
    console.log('param1: ', param1, 'param3: ', param3);
}

options.fCall = fCall;

fRoot(options); // above it's define

function fRoot(options = {}) {
    if (typeof options.fCall === 'function') {
        options.fCall();
    }
}

//*/