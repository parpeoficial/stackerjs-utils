import { expect } from "chai";
import { Config } from "./../../index";
import { writeFileSync, unlinkSync } from "fs";

describe("ConfigTest", () => 
{
    it("Should get vars setted manually", () => 
    {
        Config.set("some.var", 123);
        expect(Config.get("some.var")).to.be.equal(123);
    });

    it("Should get vars loaded from .env file", () => 
    {
        writeFileSync(
            process.cwd() + "/.env",
            "DB_DRIVER=mysql\n# COMMENTED_ROW\nKEY_WITHOUT_VALUE"
        );

        expect(Config.env("DB_DRIVER")).to.be.equal("mysql");
        expect(Config.env("db.driver")).to.be.equal("mysql");
    });

    it("Should set and get data from Configuration", () => 
    {
        Config.set("config.info", "testing something");
        expect(Config.get("config.info")).to.be.equal("testing something");
    });

    it("Should get default value when not found key", () => 
    {
        expect(Config.get("non.existent.key")).to.be.null;
        expect(Config.env("non.existent.key")).to.be.null;
    });

    it("Should delete any value by key", () => 
    {
        Config.set("any.value", { name: "stackerjs-utils" });
        expect(Config.get("any.value")).to.be.an("object");

        Config.delete("any.value");
        expect(Config.get("any.value")).to.be.null;
    });

    it("Should clear all values from Config", () => 
    {
        Config.clear();
        expect(Config.get("config.info")).to.be.null;
    });

    it("Should get data from .JS files in config folder", () => 
    {
        expect(Config.get("application.name")).to.be.equal("StackerJS Utils");
        expect(Config.get("application.test")).to.be.null;
        expect(Config.get("application.dependencies")).to.be.an("Array");
        expect(Config.get("application.dependencies.0")).to.be.an("object");
        expect(Config.get("application.dependencies.0.name")).to.be.equal("StackerJS Types");
    });

    after(() => unlinkSync(process.cwd() + "/.env"));
});
