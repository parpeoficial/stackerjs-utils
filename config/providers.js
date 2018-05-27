

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
            factory: function Person ()
            {
                this.params = {};

                this.make = (params) =>
                {
                    this.params = params;
                }
                
                this.presentYourself = () =>
                {
                    let { name, race, job } = this.params;
                    return `Hi, my name is ${name}, I'm a ${race} that does ${job} for living!`
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