module.exports = {
    drawTriangle: function(limit) {
        let output = '';

        for (let counter = 1; counter <= limit; counter++) {
            output += '$'.repeat(counter);
            output += '\n';
        }
        process.stdout.write(output);
    }
}