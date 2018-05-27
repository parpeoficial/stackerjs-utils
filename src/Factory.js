import { Config } from ".";


export const Factory = who =>
{
    if (Factory.pool[who])
        return Factory.pool[who].built;

    return null;
}

Factory.make = (who, params = {}) =>
{
    if (!Factory.pool[who])
        return null;

    return new Factory.pool[who].factory({
        ...Factory.pool[who].params,
        ...params 
    });
}

Factory.load = () =>
{
    let factories = Config.get("providers.factories");
    Object.keys(factories).forEach(key => {
        let data = factories[key];
        if (typeof data === "function")
            data = { name: key, factory: data }

        if (!data.name)
            data.name = data.factory.name;

        return Factory.build(data);
    });

    return true;
}

Factory.build = ({ name, factory, params }) =>
{
    let built = new factory(params);
    Factory.pool[name] = {
        name,
        params,
        factory,
        built
    }
}

Factory.pool = {}