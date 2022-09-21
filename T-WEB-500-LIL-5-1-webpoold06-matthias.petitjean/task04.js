module.exports = {
    fizzBuzz: function(num) {
        let tempArr = [];

        for (let i = 1; i <= num; i++) {
            if (i % 15 === 0) tempArr.push("FizzBuzz");
            else if (i % 3 === 0) tempArr.push("Fizz");
            else if (i % 5 === 0) tempArr.push("Buzz");
            else tempArr.push(i.toString());
        }
        console.log(tempArr.join(", "));
    }
}