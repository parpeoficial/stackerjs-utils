import * as fs from "fs";

export class Cache 
{
    static get(fileName, defaultValue = null) 
    {
        if (!this.has(fileName)) return defaultValue;

        let cacheContent = JSON.parse(this.decode(fs.readFileSync(
            `${process.cwd()}/storage/cache/${this.encode(fileName)}.cache`,
            { encoding: "utf8" }
        )));

        let expiresAt = new Date(cacheContent.expiresAt);
        if (expiresAt < new Date()) 
        {
            this.delete(fileName);
            return defaultValue;
        }

        return cacheContent.data;
    }

    static set(fileName, fileContent, expiresAt = null) 
    {
        if (!expiresAt) 
        {
            expiresAt = new Date();
            expiresAt.setHours(expiresAt.getHours() + 2);
        }

        let filePath = `${process.cwd()}/storage/cache/${this.encode(fileName)}.cache`;
        this.createPathIfNeeded(filePath);
        fs.writeFileSync(
            filePath,
            this.encode(JSON.stringify({
                key: fileName,
                data: fileContent,
                expiresAt: expiresAt,
                createdAt: new Date()
            }))
        );
    }

    static has(fileName) 
    {
        return fs.existsSync(`${process.cwd()}/storage/cache/${this.encode(fileName)}.cache`);
    }

    static delete(fileName) 
    {
        if (!this.has(fileName)) return false;

        fs.unlinkSync(`${process.cwd()}/storage/cache/${this.encode(fileName)}.cache`);

        return true;
    }

    static createPathIfNeeded(path) 
    {
        let folders = path.split("/");

        folders.reduce((builtPath, folder) => 
        {
            builtPath += `/${folder}`;
            if (builtPath !== "" && folder.substr(-6) !== ".cache") 
            {
                if (!fs.existsSync(builtPath)) fs.mkdirSync(builtPath);
            }

            return builtPath;
        });
    }

    static encode(str) 
    {
        return new Buffer(new Buffer(str)
            .toString("base64")
            .split("")
            .reverse()
            .join("")).toString("base64");
    }

    static decode(str) 
    {
        return new Buffer(
            new Buffer(str, "base64")
                .toString("utf8")
                .split("")
                .reverse()
                .join(""),
            "base64"
        ).toString("utf8");
    }
}
