import { ValidatorFactory } from "./../src/Factories/ValidatorFactory";
import { HashFactory } from "../src/Factories/HashFactory";

module.exports = {

    factories: {
        Validator: ValidatorFactory,

        Hash: HashFactory,

        Person: {
            factory: function Person() 
            {
                this.params = {};

                this.make = (params) => 
                {
                    this.params = params;
                };

                this.presentYourself = () => 
                {
                    let { name, race, job } = this.params;
                    return `Hi, my name is ${name}, I'm a ${race} that does ${job} for living!`;
                };
            },
            params: {
                name: "Luke Sky Walker",
                job: "Jedi Fights",
                race: "Human"
            }
        }
    }

};