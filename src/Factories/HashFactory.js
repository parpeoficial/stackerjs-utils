import * as bcrypt from "bcrypt";
import { Config } from "./../Config";


export class HashFactory 
{

    constructor() 
    {
        this.params = {
            rounds: Config.get("application.hash.rounds", 10)
        };
    }

    do(phrase) 
    {
        let salt = bcrypt.genSaltSync(this.rounds);
        return bcrypt.hashSync(phrase, salt);
    }

    check(phrase, hashedPhrase) 
    {
        return bcrypt.compareSync(phrase, hashedPhrase);
    }

}