import * as fs from "fs";

export class Config 
{
    static set(key, value) 
    {
        this.config[key.trim()] =
            typeof value === "string" ? value.trim() : value;
    }

    static get(key, defaultValue = null) 
    {
        if (!this.envFileLoaded) this.loadEnvFile();

        if (!this.configFilesLoaded) this.loadConfigFiles();

        if (typeof this.config[key] !== "undefined") return this.config[key];

        return defaultValue;
    }

    static delete(key) 
    {
        delete this.config[key];
    }

    static clear() 
    {
        this.config = {};
        this.envFileLoaded = this.configFilesLoaded = false;
    }

    static loadEnvFile() 
    {
        let envFilePath = `${process.cwd()}/.env`;
        if (!fs.existsSync(envFilePath)) return false;

        let envFileItem = fs
            .readFileSync(envFilePath, {
                encoding: "utf8",
            })
            .split("\n");

        envFileItem.forEach(row => 
        {
            if (row.trim()[0] === "#") return;

            let [key, value] = row.trim().split("=");
            if (key && value) 
            {
                this.set(key, value);
                this.set(key.replace(/[-_]/g, ".").toLowerCase(), value);
            }
        });

        this.envFileLoaded = true;
    }

    static loadConfigFiles() 
    {
        const parseConfig = (key, items) =>
            Object.keys(items).map(subKey => 
            {
                this.set(`${key}.${subKey}`, items[subKey]);
                if (typeof items[subKey] === "object")
                    return parseConfig(`${key}.${subKey}`, items[subKey]);

                return items[subKey];
            });

        fs
            .readdirSync(`${process.cwd()}/config/`)
            .forEach(file =>
                parseConfig(
                    file.slice(0, -3),
                    require(`${process.cwd()}/config/${file}`)
                ));

        this.configFilesLoaded = true;
    }
}
Config.config = {};
Config.envFileLoaded = false;
Config.configFilesLoaded = false;
