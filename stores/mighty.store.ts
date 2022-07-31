import {action, makeObservable, observable} from "mobx";
import {CardType, normalCardMaxCount, typeToIdx} from "../components/Mighty/card.util";

export class MightyStore {
    @observable joker: boolean = true;
    @observable normalCards = Array.from(Array(4), () => Array(normalCardMaxCount+2).fill(true));

    @action
    public update = (type:CardType, priority:number) => {
        if(type === CardType.JOKER) {
            this.joker = !this.joker;
        }
        else {
            // @ts-ignore
            this.normalCards[typeToIdx(type)][priority] = !this.normalCards[typeToIdx(type)][priority];
        }
    }
    @action
    public init = () => {
        this.joker = true;
        this.normalCards = Array.from(Array(4), () => Array(normalCardMaxCount+2).fill(true));
    }
    constructor() {
        makeObservable(this);
    }
}
