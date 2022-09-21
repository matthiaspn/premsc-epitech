module.exports = {
    countGs: function(str) {
        return (str.match(/G/g) || []).length;
    }
}