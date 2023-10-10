#!/usr/bin/env node
import { multiplication } from '../src/calculator.js';
import { calculateAverage } from '../src/calculator.js';
import { isHappyTicket } from '../src/happyTicket.js';
import { determineTimeOfDay } from '../src/timeOfDayChecker.js';
import { isDivisibleBy5AndEven } from '../src/divisibleAndEvenValue.js';

console.log('start');
const x = 2;
const y = 3;
const result = multiplication(x, y);
const output = multiplication(x, y) === x * y ? 'ok' : 'bad';
console.log(`multiplication(${x}, ${y}) = ${result}, ${output}`);
const w = isHappyTicket('231002');
console.log(w);
console.log(determineTimeOfDay(123));
console.log(calculateAverage(-20, -2, -5, -7, -1));
console.log(isDivisibleBy5AndEven(5));
console.log('end');
