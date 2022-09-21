const task06 = require('../task06');

var obj = {here: {is: "an"}, object: 2};
console.log(task06.objectsDeeplyEqual(1, "1"));
console.log(task06.objectsDeeplyEqual(obj, {here: 1, object: 2}));
console.log(task06.objectsDeeplyEqual(obj, {here: {is: "an"}, object: 2}));