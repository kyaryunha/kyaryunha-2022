import {action, makeObservable, observable} from "mobx";
import {CardType, normalCardMaxCount, typeToIdx} from "../components/Mighty/card.util";
import {rootStore} from "./index";
import {CardOp} from "./card-log.store";

export class MightyStore {
    @observable joker: boolean = true;
    @observable normalCards = Array.from(Array(4), () => Array(normalCardMaxCount+2).fill(true));

    @action
    public update = (type:CardType, priority:number) => {
        let value;
        if(type === CardType.JOKER) {
            this.joker = !this.joker;
            value = this.joker;
        }
        else {
            // @ts-ignore
            this.normalCards[typeToIdx(type)][priority] = !this.normalCards[typeToIdx(type)][priority];
            value = this.normalCards[typeToIdx(type)][priority];
        }
        rootStore.cardLogStore.push({
            op: CardOp.Card,
            content: 'update '+type+' '+priority+' '+value,
        })
    }
    @action
    public init = () => {
        this.joker = true;
        this.normalCards = Array.from(Array(4), () => Array(normalCardMaxCount+2).fill(true));
        rootStore.cardLogStore.push({
            op: CardOp.Card,
            content: 'init',
        })
    }
    constructor() {
        makeObservable(this);
    }
}
