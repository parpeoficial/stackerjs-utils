import { Config } from ".";


export const Factory = who =>
{
    if (Factory.pool[who])
        return Factory.pool[who].built;

    return null;
};

Factory.make = (who, params = {}) =>
{
    if (!Factory.pool[who])
        return null;

    return Factory.build({
        ...Factory.pool[who],
        params: {
            ...Factory.pool[who].params,
            ...params
        }
    }, false);
};

Factory.load = () =>
{
    let factories = Config.get("providers.factories");
    Object.keys(factories).forEach(key => 
    {
        let data = factories[key];
        if (typeof data === "function")
            data = { name: key, factory: data };

        if (!data.name)
            data.name = data.factory.name;

        return Factory.build(data);
    });

    return true;
};

Factory.build = ({ name, factory, params }, save = true) =>
{
    let built = new factory();
    if (typeof built.make === "function")
        built.make(params);

    if (save)
        Factory.pool[name] = {
            name,
            params,
            factory,
            built
        };

    return built;
};

Factory.pool = {};