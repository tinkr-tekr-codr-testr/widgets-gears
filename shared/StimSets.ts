import { Stims } from "../models/Stims";
import { StimSet } from "../models/StimSet";



export const TokenSets = new Map<string, Array<string>>();
TokenSets.set('First Five', ['a', 'b', 'c', 'd', 'e']);
TokenSets.set('Sleepy', ['x', 'y', 'z', 'w', 'v']);
TokenSets.set('Prime Time', ['2', '3', '5', '7', '11']);

export const SoundFxSets = new Map<string, Array<string>>();


export const StimSets = new Map<Stims, StimSet>([
    [Stims.TOKENS, TokenSets],
    [Stims.SOUND_FX, SoundFxSets]
]);