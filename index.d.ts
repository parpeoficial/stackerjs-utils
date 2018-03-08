import { StackerJS } from "stackerjs-types";


declare module "stackerjs-utils" {


    export class Config extends StackerJS.Config { }

    export class Cache extends StackerJS.Cache { }

    export class Utils extends StackerJS.Utils { }
}