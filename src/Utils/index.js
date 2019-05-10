import * as BR from "./BR";
import * as PT from "./PT";
import {
    snakeCasefy,
    camelCasefy,
    isString,
    isLowercase,
    isUppercase,
    isBase64,
    isIPAddress,
    isJSON,
    isEmailAddress,
    isURI
} from "./String";
import { isArray } from "./Array";
import { isNumber, isLessThan, isGreaterThan, isInteger } from "./Number";
import { isEmpty, hasLength, hasLengthRange, matches } from "./Other";

exports.BR = BR;
exports.PT = PT;
exports.Text = {
    snakeCasefy,
    camelCasefy,
    isString,
    isLowercase,
    isUppercase,
    isBase64,
    isIPAddress,
    isJSON,
    isEmailAddress,
    isURI
};
exports.Arrays = { isArray };
exports.Numbers = { isNumber, isLessThan, isGreaterThan, isInteger };
exports.Other = { isEmpty, hasLength, hasLengthRange, matches };
