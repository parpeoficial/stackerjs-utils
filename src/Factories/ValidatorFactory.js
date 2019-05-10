

export class ValidatorFactory 
{

    constructor() 
    {
        this.params;

        this.validRules = ["required", "min", "max"];
        this.messages = {
            string: "__FIELD__ is not a string",
            number: "__FIELD__ is not a number",
            boolean: "__FIELD__ is not a boolean",
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
        let errors = {};
        this.params.forEach(rulesGroup =>
            rulesGroup.forEach(rule => this.checkupRule(rule, data, errors)));

        return this.buildResult(errors);
    }

    checkupRule(rule, data, errors) 
    {
        if (rule.name === "string" && typeof data[rule.field] === "string") return;

        if (rule.name === "number" && typeof data[rule.field] === "number") return;

        if (rule.name === "boolean" && typeof data[rule.field] === "boolean") return;

        if (rule.name === "required" && (typeof data[rule.field] !== "undefined" && data[rule.field] !== null)) return;

        if (rule.name === "min" && ((typeof data[rule.field] === "string" && data[rule.field].length > rule.value) || (typeof data[rule.field] === "number" && data[rule.field] > rule.value)))
            return;

        if (rule.name === "max" && ((typeof data[rule.field] === "string" && data[rule.field].length < rule.value) || (typeof data[rule.field] === "number" && data[rule.field] < rule.value)))
            return;

        this.addError(errors, rule.field, this.messages[rule.name]
            .replace(/__FIELD__/g, rule.field)
            .replace(/__MIN__/g, rule.value)
            .replace(/__HAVE_MIN__/g, typeof data[rule.field] === "string" ? data[rule.field].length : data[rule.field])
            .replace(/__MAX__/g, rule.value)
            .replace(/__HAVE_MAX__/g, typeof data[rule.field] === "string" ? data[rule.field].length : data[rule.field]));
    }

    addError(errors, field, message) 
    {
        if (!errors[field])
            errors[field] = [];

        errors[field].push(message);
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