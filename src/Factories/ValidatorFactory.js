

export class ValidatorFactory
{

    constructor()
    {
        this.params;
    }

    make(params)
    {
        this.validRules = ["required", "min", "max"];

        this.messages = {
            required: "required __FIELD__ is not filled",
            min: "__FIELD__ min size is __MIN__ but has __HAVE_MIN__",
            max: "__FIELD__ max size is __MAX__ but has __HAVE_MAX__"
        };

        this.params = params;
    }

    validate(data)
    {
        Object.keys(this.params).forEach(field => 
        {
            let rules = this.params[field] = field.split("|")
                .map(rule => {
                    if (!rule.includes(':'))
                        return { rule, value: true };

                    let [rule, value] = rule.split(":");
                    return { rule, value };
                })
                .filter(({ rule }) => this.validRules.includes(rule));
        });
    }

    buildResponse(errors)
    {
        return {
            isValid: () => Object.keys(errors).length > 0,
            getErrors: (key = null) =>
                key && errors[key] ? errors[key] : errors
        }
    }

}