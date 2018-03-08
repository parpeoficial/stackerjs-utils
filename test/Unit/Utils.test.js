import { expect } from "chai";
import { Utils } from "../../lib";

describe("Unit/UtilsTest", () => 
{
    describe("CPF", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.CPF("130.483.426-30").validate()).to.be.true;
            expect(Utils.CPF("592.518.100-01").validate()).to.be.true;
            expect(Utils.CPF("424.723.125-12").validate()).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.CPF("000.000.000-00").validate()).to.be.false;
            expect(Utils.CPF("123.456.789-00").validate()).to.be.false;
            expect(Utils.CPF("123.456.789-10").validate()).to.be.false;
        });

        it("Should clear", () => 
        {
            expect(Utils.CPF("130.483.426-30").clear()).to.be.equal("13048342630");
        });

        it("Should format", () => 
        {
            expect(Utils.CPF("13048342630").format()).to.be.equal("130.483.426-30");
        });

        it("Should get locale", () => 
        {
            expect(Utils.CPF("000.000.000-00").locale()).to.be.equal("Rio Grande do Sul");
            expect(Utils.CPF("000.000.001-00").locale()).to.be.equal("Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins");
            expect(Utils.CPF("000.000.002-00").locale()).to.be.equal("Pará, Amazonas, Acre, Amapá, Rondônia e Roraima");
            expect(Utils.CPF("000.000.003-00").locale()).to.be.equal("Ceará, Maranhão e Piauí");
            expect(Utils.CPF("000.000.004-00").locale()).to.be.equal("Pernambuco, Rio Grande do Norte, Paraíba e Alagoas");
            expect(Utils.CPF("000.000.005-00").locale()).to.be.equal("Bahia e Sergipe");
            expect(Utils.CPF("000.000.006-00").locale()).to.be.equal("Minas Gerais");
            expect(Utils.CPF("000.000.007-00").locale()).to.be.equal("Rio de Janeiro e Espírito Santo");
            expect(Utils.CPF("000.000.008-00").locale()).to.be.equal("São Paulo");
            expect(Utils.CPF("000.000.009-00").locale()).to.be.equal("Paraná e Santa Catarina");
        });
    });
});
