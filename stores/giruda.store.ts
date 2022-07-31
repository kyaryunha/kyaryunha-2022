import {action, makeObservable, observable} from "mobx";
import {CardType} from "../components/Mighty/card.util";
import {CardOp} from "./card-log.store";
import {rootStore} from "./index";

export class GirudaStore {
    @observable girudaType: CardType|undefined = undefined;
    @observable giruda:number = 13;
    @action
    public girudaCheck = (num:number) => {
        this.giruda = Math.max(0, this.giruda-num);
        rootStore.cardLogStore.push({
            op: CardOp.Giruda,
            content: 'girudaCheck '+num.toString(),
        })
    }
    @action
    public init = () => {
        this.girudaType = undefined;
        this.giruda = 13;
        rootStore.cardLogStore.push({
            op: CardOp.Giruda,
            content: 'init',
        })
    }
    constructor() {
        makeObservable(this);
    }
}
