export const snakeCasefy = value => 
{
    return value
        .split("")
        .map(letter =>
            letter === letter.toUpperCase()
                ? `_${letter.toLowerCase()}`
                : letter)
        .join("");
};

export const camelCasefy = value => 
{
    return value
        .split(/[-_]+/g)
        .map((word, index) =>
            index !== 0
                ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                : word)
        .join("");
};

export const isString = value => 
{
    return (
        typeof value === "string" ||
        Object.prototype.toString.call(value) === "[object String]"
    );
};

export const isLowercase = value => 
{
    return isString(value) && value.valueOf() === value.toLowerCase();
};

export const isUppercase = value => 
{
    return isString(value) && value.valueOf() === value.toUpperCase();
};

export const isBase64 = value => 
{
    let regex = /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gi;
    return regex.test(value);
};

export const isIPAddress = value => 
{
    let regex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/;
    return regex.test(value);
};

export const isJSON = value => 
{
    if (typeof value !== "string") 
    {
        return false;
    }
    let regex = /^\{[\s\S]*\}$|^\[[\s\S]*\]$/;
    if (!regex.test(value)) 
    {
        return false;
    }
    try 
    {
        JSON.parse(value);
    }
    catch (err) 
    {
        return false;
    }
    return true;
};

export const isEmailAddress = value => 
{
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return isString(value) && regex.test(value);
};

export const isURI = value => 
{
    let parts, scheme, authority, path;
    if (!isString(value)) 
    {
        return false;
    }

    let ILLEGALS = /[^a-z0-9:/?#[\]@!$&'()*+,;=.\-_~%]/i;
    if (ILLEGALS.test(value)) 
    {
        return false;
    }

    let HEX1 = /%[^0-9a-f]/i;
    let HEX2 = /%[0-9a-f](:?[^0-9a-f]|$)/i;
    if (HEX1.test(value) || HEX2.test(value)) 
    {
        return false;
    }

    let URI = /(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/;
    parts = value.match(URI);
    scheme = parts[1];
    authority = parts[2];
    path = parts[3];

    let PATH = /^\/\//;
    let SCHEME = /^[a-z][a-z0-9+\-.]*$/;
    if (!scheme || !scheme.length || !SCHEME.test(scheme.toLowerCase())) 
    {
        return false;
    }

    if (!authority && PATH.test(path)) 
    {
        return false;
    }
    return true;
};
