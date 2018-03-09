export default function NIF(nif) 
{
    this.validate = () => 
    {
        let value = this.clear(nif);

        if (parseInt(value) === 999999999) return true;

        if (!value || value.length !== 9 || isNaN(parseInt(value))) 
        {
            return false;
        }

        let partValue = value.slice(0, 8);
        let sum = 0;
        let len = partValue.length;

        for (var i = 0; i < len; i++) 
        {
            sum += partValue[i] * (len + 1 - i);
        }
        var mod = sum % 11;
        let checksum = "" + (mod === 0 || mod === 1 ? 0 : 11 - mod);

        return checksum === value[8];
    };

    this.clear = () => 
    {
        return nif.replace(/\s+/g, "");
    };

    this.format = () => 
    {
        let value = this.clear();
        return value.replace(/^(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3");
    };

    return this;
}
