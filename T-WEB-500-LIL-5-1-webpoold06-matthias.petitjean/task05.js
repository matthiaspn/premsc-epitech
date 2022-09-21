module.exports = {
    range: function(start, end, step = 1) {
        if (step == 0 || step == -0) return [];

        var arr = [];
        if (step > 0) {
            for (let i = 0; i < end - start + 1; i += step)
                arr.push(start + i);
        } else {
            for (let i = end - start; i <= 0; i-= step)
                arr.push(end - i);
        }
        return arr;
    }
}