export const isNumber = value => 
{
    return (
        (typeof value === "number" ||
            Object.prototype.toString.call(value) === "[object Number]") &&
        value.valueOf() === value.valueOf()
    );
};

export const isLessThan = (value, comparator) => 
{
    if (!isNumber(value) || !isNumber(comparator)) 
    {
        return false;
    }
    return value < comparator;
};

export const isGreaterThan = (value, comparator) => 
{
    if (!isNumber(value) || !isNumber(comparator)) 
    {
        return false;
    }
    return value > comparator;
};

export const isInteger = value => 
{
    return isNumber(value) && value % 1 === 0;
};
