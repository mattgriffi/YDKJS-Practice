"use strict";
function foo(obj) {
    with (obj) {
        a = 2;
    }
}

var o2 = {
    b: 3
}

foo(o2);
console.log(o2.a);
console.log(a);