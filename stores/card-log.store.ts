import {action, makeObservable, observable} from "mobx";

export enum CardOp {
    Giruda = 'giruda',
    Card = 'card',
}

export type logProp = {
    op: CardOp,
    content: string,
}
export class CardLogStore {
    @observable logs:logProp[] = [];

    @action
    public push = (log:logProp) => {
        this.logs.push(log);
    }
    @action
    public top = () => {
        return this.logs.at(-1);
    }
    @action
    public size = () => {
        return this.logs.length;
    }
    @action
    public pop = () => {
        this.logs.pop();
    }
    constructor() {
        makeObservable(this);
    }
}
