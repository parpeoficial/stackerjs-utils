export default function NIF(nif) 
{
    this.validate = () => 
    {
        let total =
            nif.substr(0, 1) * 9 +
            nif.substr(1, 1) * 8 +
            nif.substr(2, 1) * 7 +
            nif.substr(3, 1) * 6 +
            nif.substr(4, 1) * 5 +
            nif.substr(5, 1) * 4 +
            nif.substr(6, 1) * 3 +
            nif.substr(7, 1) * 2;

        let value = total - parseInt(total / 11) * 11;
        let comparator = 0;

        if (value == 1 || value == 0) 
        {
            comparator = 0;
        }
        else 
        {
            comparator = 11 - value;
        }

        var lastDigit = nif.substr(8, 1) * 1;
        if (lastDigit != comparator) return false;

        return true;
    };

    return this;
}
