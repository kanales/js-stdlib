"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ctf = ctf;
exports.ftc = ftc;
exports.ctk = ctk;
exports.ktc = ktc;
exports.ftk = ftk;
exports.ktf = ktf;

/**
 * Converts celsius to farenheit
 * @param { number } celsius 
 * @returns 
 */
function ctf(celsius) {
  return celsius * 9 / 5 + 32;
}
/**
 * Converts farenheit to celsius
 * @param { number } farenheit 
 * @returns 
 */


function ftc(farenheit) {
  return (farenheit - 32) * 5 / 9;
}
/**
 * Converts celsius to kelvin
 * @param { number } celsius 
 * @returns 
 */


function ctk(celsius) {
  return celsius + 273.15;
}
/**
 * Converts kelvin to celsius
 * @param { number } kelvin 
 * @returns 
 */


function ktc(kelvin) {
  return kelvin - 273.15;
}
/**
 * Converts farenheit to kelvin
 * @param { number } farenheit 
 * @returns 
 */


function ftk(farenheit) {
  return ftc(farenheit) + 273.15;
}
/**
 * Converts kelvin to farenheit
 * @param { number } kelvin 
 * @returns 
 */


function ktf(kelvin) {
  return ctf(kelvin - 273.15);
}