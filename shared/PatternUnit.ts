import { Stims } from "../models/Stims";
import { StimSets } from "./StimSets";

export class PatternUnit {
    type:Stims;
    payload: Array<string>;

    constructor(
        type: Stims, setName: string 
    ){
        this.payload = StimSets.get(type)?.get(setName) || ['Set not found'];

    }

    static play(row: PatternUnit[]){
        
    }
}