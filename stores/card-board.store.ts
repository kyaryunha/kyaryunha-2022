import {action, makeObservable, observable} from "mobx";

export class CardBoardStore {
    @observable size: number = 1.0;
    @action
    public plus = () => {
        this.size *= 1.1;
    }
    @action
    public minus = () => {
        this.size *= 0.9;
        if (this.size <= 0.5) this.size = 0.5;
    }
    @action
    public init = () => {
        this.size = 1.0;
    }
    constructor() {
        makeObservable(this);
    }
}
