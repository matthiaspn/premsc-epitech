module.exports = {
    arraysAreEqual: function(arr1, arr2) {
        return Array.isArray(arr1) && Array.isArray(arr2) &&
        arr1.length == arr2.length &&
        arr1.every((value, index) => value == arr2[index]);
    }
}