import { expect } from "chai";
import { Utils } from "../../../lib";

describe("Unit/Utils/StringTest", () => 
{
    describe("isString()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Text.isString("foobar")).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Text.isString(123)).to.be.false;
            expect(Utils.Text.isString(null)).to.be.false;
        });
    });

    describe("isLowercase()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Text.isLowercase("foobar")).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Text.isLowercase("FOOBAR")).to.be.false;
            expect(Utils.Text.isLowercase("FOoBaR")).to.be.false;
        });
    });

    describe("isUppercase()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Text.isUppercase("FOOBAR")).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Text.isUppercase("foobar")).to.be.false;
            expect(Utils.Text.isUppercase("FOoBaR")).to.be.false;
        });
    });

    describe("isBase64()", () => 
    {
        it("Should validate", () => 
        {
            let pngString =
                "iVBORw0KGgoAAAANSUhEUgAABQAAAALQAQMAAAD1s08VAAAAA1BMVEX/AAAZ4gk3AAAAh0lEQVR42u3BMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GsTfAAGc95RKAAAAAElFTkSuQmCC";
            let pngStringWithMime =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAALQAQMAAAD1s08VAAAAA1BMVEX/AAAZ4gk3AAAAh0lEQVR42u3BMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GsTfAAGc95RKAAAAAElFTkSuQmCC";
            let jpgString =
                "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEACAhITMkM1EwMFFCLy8vQiccHBwcJyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBIjMzNCY0IhgYIhQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAYABgMBIgACEQEDEQH/xABVAAEBAAAAAAAAAAAAAAAAAAAAAxAAAQQCAwEAAAAAAAAAAAAAAgABAxQEIxIkMxMBAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIE7MwkbOUJDJWx+ZjXATitx2/h2bEWvX5Y0npQ7aIiD/9k=";
            let jpgStringWithMime =
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEACAhITMkM1EwMFFCLy8vQiccHBwcJyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBIjMzNCY0IhgYIhQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAYABgMBIgACEQEDEQH/xABVAAEBAAAAAAAAAAAAAAAAAAAAAxAAAQQCAwEAAAAAAAAAAAAAAgABAxQEIxIkMxMBAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIE7MwkbOUJDJWx+ZjXATitx2/h2bEWvX5Y0npQ7aIiD/9k=";

            expect(Utils.Text.isBase64("uuLMhh==")).to.be.true;
            expect(Utils.Text.isBase64(pngString)).to.be.true;
            expect(Utils.Text.isBase64(pngStringWithMime)).to.be.true;
            expect(Utils.Text.isBase64(jpgString)).to.be.true;
            expect(Utils.Text.isBase64(jpgStringWithMime)).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Text.isBase64("awdafa2eawd")).to.be.false;
            expect(Utils.Text.isBase64("12354353==")).to.be.false;
            expect(Utils.Text.isBase64("awdgrfedwad341trweda==")).to.be.false;
            expect(Utils.Text.isBase64("awdafa2eawd")).to.be.false;
            expect(Utils.Text.isBase64("uuLMhh")).to.be.false;
        });
    });

    describe("isIPAddress()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Text.isIPAddress("192.168.1.172")).to.be.true;
            expect(Utils.Text.isIPAddress("10.10.248.244")).to.be.true;
            expect(Utils.Text.isIPAddress("255.168.92.2")).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Text.isIPAddress("localhost")).to.be.false;
            expect(Utils.Text.isIPAddress("example.com")).to.be.false;
            expect(Utils.Text.isIPAddress("http://example.com")).to.be.false;
            expect(Utils.Text.isIPAddress("1000.10.10.100")).to.be.false;
            expect(Utils.Text.isIPAddress("256.192.16.100")).to.be.false;
            expect(Utils.Text.isIPAddress("192.168.12.92.5")).to.be.false;
        });
    });

    describe("isJSON()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Text.isJSON("{\"a\":5}")).to.be.true;
            expect(Utils.Text.isJSON("{}")).to.be.true;
            expect(Utils.Text.isJSON("[]")).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Text.isJSON("[{")).to.be.false;
            expect(Utils.Text.isJSON("]}")).to.be.false;
            expect(Utils.Text.isJSON("NaN")).to.be.false;
            expect(Utils.Text.isJSON("null")).to.be.false;
            expect(Utils.Text.isJSON("{[")).to.be.false;
            expect(Utils.Text.isJSON("}]")).to.be.false;
            expect(Utils.Text.isJSON(2)).to.be.false;
            expect(Utils.Text.isJSON("[{\"a\"}]")).to.be.false;
        });
    });

    describe("isEmailAddress()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Text.isEmailAddress("foo@bar.com.br")).to.be.true;
            expect(Utils.Text.isEmailAddress("foo@bar.com")).to.be.true;
            expect(Utils.Text.isEmailAddress("bar@foo.net")).to.be.true;
            expect(Utils.Text.isEmailAddress("bar_foo@foo.net")).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Text.isEmailAddress("bar.com")).to.be.false;
            expect(Utils.Text.isEmailAddress(null)).to.be.false;
            expect(Utils.Text.isEmailAddress(5)).to.be.false;
            expect(Utils.Text.isEmailAddress("undefined")).to.be.false;
        });
    });

    describe("isURI()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Text.isURI("http://google.com")).to.be.true;
            expect(Utils.Text.isURI("http://example.w3.org/path%20with%20spaces.html")).to.be.true;
            expect(Utils.Text.isURI("ftp://bar.foo/rfc1808.txt")).to.be.true;

            expect(Utils.Text.isURI("mailto:foo.bar@example.com")).to.be.true;
            expect(Utils.Text.isURI("tel:+1-123-123-1233")).to.be.true;
            expect(Utils.Text.isURI("urn:oasis:names:specification:docbook:dtd:xml:4.1.2")).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Text.isURI("bar_foo@foo.net")).to.be.false;
            expect(Utils.Text.isURI("://foo/")).to.be.false;
            expect(Utils.Text.isURI("http:////foo.html")).to.be.false;
            expect(Utils.Text.isURI(5)).to.be.false;
            expect(Utils.Text.isURI("http://example.w3.org/%a")).to.be.false;
            expect(Utils.Text.isURI("http://<foo>")).to.be.false;
        });
    });
});
