import { StackerJS } from "stackerjs-types";


declare module "stacker-utils" {


    export class Config extends StackerJS.Config { }

    export class Cache extends StackerJS.Cache { }

}