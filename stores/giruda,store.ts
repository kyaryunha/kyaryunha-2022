import {action, makeObservable, observable} from "mobx";
import {CardType} from "../components/Mighty/card.util";

export class GirudaStore {
    @observable girudaType: CardType|undefined = undefined;
    @observable giruda:number = 13;
    @action
    public girudaCheck = (num:number) => {
        this.giruda = Math.max(0, this.giruda-num);
    }
    @action
    public init = () => {
        this.girudaType = undefined;
        this.giruda = 13;
    }
    constructor() {
        makeObservable(this);
    }
}
