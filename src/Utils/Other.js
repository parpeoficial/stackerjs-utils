import { isString } from "./String";
import { isArray } from "./Array";
import { isInteger, isNumber } from "./Number";
export const isEmpty = value => 
{
    if (isString(value) && !value.length) 
    {
        return true;
    }
    if (isArray(value) && !value.length) 
    {
        return true;
    }
    if (typeof value !== "object" || value === null) 
    {
        return false;
    }
    return !Object.keys(value).length;
};

export const hasLength = (value, length) => 
{
    if (!isArray(value) && !isString(value) && typeof value !== "function")
        return false;

    return value.length === length;
};

export const hasLengthRange = (value, lower, upper) => 
{
    if (!isArray(value) && !isString(value) && typeof value !== "function")
        return false;

    if (!isInteger(lower))
        throw new TypeError(`hasLengthRange(): invalid input argument. Second argument must be an integer. value: ${lower}`);

    if (lower < 0)
        throw new RangeError(`hasLengthRange(): invalid input argument. Second argument must be greater than or equal to 0. value: ${lower}`);

    if (!isInteger(upper))
        throw new TypeError(`hasLengthRange(): invalid input argument. Upper bound must be an integer. value: ${lower}`);

    if (upper < lower)
        throw new RangeError(`hasLengthRange(): invalid input argument. Upper bound must be greater than or equal to lower bound. value: ${upper}`);

    return lower <= value.length && value.length <= upper;
};

export const matches = (value, options) => 
{
    if (!isString(options))
        throw new TypeError(`matches(): invalid input argument. List of options must be a string. value: ${options}`);

    if (!isString(value) && !isNumber(value)) return false;

    if (typeof value === "number") value = value.toString();
    options = options.split(",");

    for (var i = 0; i < options.length; i++) 
    {
        if (options[i] === value) return true;
    }
    return false;
};
