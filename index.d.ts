import { StackerJS } from "stackerjs-types";

declare module "stackerjs-utils" {
    export class Config extends StackerJS.Config 
    {}

    export class Cache extends StackerJS.Cache 
    {}

    export namespace Utils {
        export namespace Text {
            export function snakeCasefy(value:string):string;

            export function camelCasefy(value:string):string;
            
            export function isString(value): boolean;

            export function isLowercase(value): boolean;

            export function isUppercase(value): boolean;

            export function isBase64(value): boolean;

            export function isIPAddress(value): boolean;

            export function isJSON(value): boolean;

            export function isEmailAddress(value): boolean;

            export function isURI(value): boolean;
        }

        export namespace Arrays {
            export function isArray(value): boolean;
        }

        export namespace Numbers {
            export function isNumber(value): boolean;

            export function isLessThan(value, comparator): boolean;

            export function isGreaterThan(value, comparator): boolean;

            export function isInteger(value): boolean;
        }

        export namespace Other {
            export function isEmpty(value): boolean;

            export function hasLength(value, length): boolean;

            export function hasLengthRange(value, lower, upper): boolean;

            export function matches(value, options): boolean;
        }

        export namespace BR {
            export function CPF(
                cpf: string
            ): {
                validate(): boolean;

                clear(): string;

                format(): string;

                locale(): string;
            };

            export function CNPJ(
                cpf: string
            ): {
                validate(): boolean;

                clear(): string;

                format(): string;
            };
        }

        export namespace PT {
            export function NIF(
                nif: string
            ): {
                validate(): boolean;

                clear(): string;

                format(): string;
            };
        }
    }
}
