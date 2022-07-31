import {action, makeObservable, observable} from "mobx";
import {CardType} from "../components/Mighty/card.util";
import {CardOp} from "./card-log.store";
import {rootStore} from "./index";

export class GirudaStore {
    @observable girudaType: CardType|undefined = undefined;
    @observable giruda:number = 13;
    @action
    public girudaCheck = (num:number) => {
        const giruda = Math.max(0, this.giruda-num);
        const possibleNum = this.giruda-giruda;
        this.giruda = giruda;
        rootStore.cardLogStore.push({
            op: CardOp.Giruda,
            content: 'girudaCheck '+possibleNum,
        })
    }

    public rollback = (num:number) => {
        this.giruda += num;
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
