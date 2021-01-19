var _ = {
    isEmpty: function (value) {
        return value.length > 0;
    },
    isNum: function (value) {
        return /^[0-9]*$/.test(value);
    },
    isAboveNum: function (value, limit) {
        if (!value)
            return true;
        return !isNaN(Number(value)) && Number(value) > limit;
    },
    isAboveLen: function (value, limit) {
        if (!value)
            return true;
        return value.length > limit;
    }
};
export default _;
