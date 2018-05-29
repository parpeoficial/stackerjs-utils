

export class ValidatorFactory 
{

    constructor() 
    {
        this.params;
        this.validRules = ["required", "min", "max"];
        this.messages = {
            required: "required __FIELD__ is not filled",
            min: "__FIELD__ min size is __MIN__ but has __HAVE_MIN__",
            max: "__FIELD__ max size is __MAX__ but has __HAVE_MAX__"
        };
    }

    make(params) 
    {
        this.params = Object.keys(params || {}).map(field =>
            params[field].split("|")
                .map(rule => 
                {
                    if (!rule.includes(":"))
                        return { field, name: rule, value: true };

                    let [name, value] = rule.split(":");
                    return { field, name, value: parseInt(value) };
                }));
    }

    validate(data) 
    {
        const errors = {};
        const addError = (field, message) => 
        {
            if (!errors[field])
                errors[field] = [];

            errors[field].push(message);
        };

        this.params.forEach(rulesGroup => 
        {
            rulesGroup.forEach(rule => 
            {
                if (rule.name === "required" && (typeof data[rule.field] === "undefined" || data[rule.field] === null))
                    addError(rule.field, this.messages[rule.name]);
            });
        });

        return this.buildResult(errors);
    }

    buildResult(errors) 
    {
        return {
            isValid: () => !Object.keys(errors).length,
            getErrors: (key = null) =>
                key && errors[key] ? errors[key] : errors
        };
    }

}