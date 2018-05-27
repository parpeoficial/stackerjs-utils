

module.exports = {

    factories: {
        DB: function ()
        {
            function getQueryCriteria()
            {
                return { 
                    eq(field, value) { return field === value; } 
                }
            }
        },

        Person: {
            factory: function Person ({ name, job, race })
            {
                this.name = name;
                this.job = job;
                this.race = race;
                
                this.presentYourself = () =>
                {
                    return `Hi, my name is ${this.name}, I'm a ${this.race} that does ${this.job} for living!`
                }
            },
            params: {
                name: "Luke Sky Walker",
                job: "Jedi Fights",
                race: "Human"
            }
        }
    }

}