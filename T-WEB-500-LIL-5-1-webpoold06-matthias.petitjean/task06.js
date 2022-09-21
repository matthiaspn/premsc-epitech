function checkObject(object) {
    return object != null && typeof (object) == "object";
}

module.exports = {
    objectsDeeplyEqual: function(cmp1, cmp2) {
        if (typeof(cmp1) !== "object" || typeof(cmp2) !== "object" || cmp1 == null || cmp2 == null) return cmp1 === cmp2;

        const cmp1Keys = Object.keys(cmp1);
        const cmp2Keys = Object.keys(cmp2);
        if (cmp1Keys.length !== cmp2Keys.length) return false;

        for (const index of cmp1Keys) {
            const firstValue = cmp1[index];
            const secondValue = cmp2[index];
        
            if ((checkObject(firstValue) && checkObject(secondValue) &&
                !this.objectsDeeplyEqual(firstValue, secondValue)) ||
                (!(checkObject(firstValue) && checkObject(secondValue)) &&
                    firstValue !== secondValue))
                return false;
        }
        return true;
    }
}