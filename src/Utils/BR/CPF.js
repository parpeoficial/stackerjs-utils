export default function CPF(cpf) 
{
    this.validate = () => 
    {
        let value = this.clear();
        let summ = 0;
        let rest;

        if (value === "00000000000") return false;

        for (let i = 1; i <= 9; i++)
            summ = summ + parseInt(value.substring(i - 1, i)) * (11 - i);

        rest = (summ * 10) % 11;
        if (rest == 10 || rest == 11) rest = 0;

        if (rest != parseInt(value.substring(9, 10))) return false;

        summ = 0;

        for (let i = 1; i <= 10; i++)
            summ = summ + parseInt(value.substring(i - 1, i)) * (12 - i);

        rest = (summ * 10) % 11;
        if (rest == 10 || rest == 11) rest = 0;

        if (rest != parseInt(value.substring(10, 11))) return false;

        return true;
    };

    this.clear = () => 
    {
        return cpf.replace(/\D/g, "");
    };

    this.format = () => 
    {
        let value = this.clear();
        return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
    };

    this.locale = () => 
    {
        let value = parseInt(this.clear().substring(8, 9));
        switch (value) 
        {
        case 0:
            return "Rio Grande do Sul";
        case 1:
            return "Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins";
        case 2:
            return "Pará, Amazonas, Acre, Amapá, Rondônia e Roraima";
        case 3:
            return "Ceará, Maranhão e Piauí";
        case 4:
            return "Pernambuco, Rio Grande do Norte, Paraíba e Alagoas";
        case 5:
            return "Bahia e Sergipe";
        case 6:
            return "Minas Gerais";
        case 7:
            return "Rio de Janeiro e Espírito Santo";
        case 8:
            return "São Paulo";
        case 9:
            return "Paraná e Santa Catarina";
        }
    };

    return this;
}
