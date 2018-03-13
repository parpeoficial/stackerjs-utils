import { StackerJS } from "stackerjs-types";


declare module "stackerjs-utils" {


    export class Config extends StackerJS.Config { }

    export class Cache extends StackerJS.Cache { }

    export namespace Utils {

        export namespace BR {

            export function CPF(cpf: string): {

                validate(): boolean;

                clear(): string;

                format(): string;

                locale(): string;

            };

            export function CNPJ(cpf: string): {

                validate(): boolean;

                clear(): string;

                format(): string;

            };

        }

        export namespace PT {

            export function NIF(nif: string): {

                validate(): boolean;

                clear(): string;

                format(): string;

            };

        }

    }
}