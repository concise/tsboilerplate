"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foobar(arg0, arg1, arg2, arg3, arg4) {
    return arg0 + arg1 + arg2 + arg3 + arg4;
}
function thisIsJustOneFunctionWhoseNameIsSuperLong(someParam) {
    return '' + someParam;
}
exports.hello = 'world' + foobar(5, 6, 7, 8, 9);
exports.happyWorld = thisIsJustOneFunctionWhoseNameIsSuperLong(943537587788699);
