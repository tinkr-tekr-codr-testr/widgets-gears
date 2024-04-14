import { Stims } from "./models/Stims";
import { PatternUnit } from "./shared/PatternUnit";

const one = new PatternUnit(Stims.TOKENS, 'First Five');
const two = new PatternUnit(Stims.TOKENS, 'Sleepy');

const row = [one, two];
PatternUnit.play(row);