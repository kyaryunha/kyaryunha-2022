import {action, makeObservable, observable} from "mobx";
import { v4 as uuidv4 } from "uuid";
import {rootStore} from "./index";
import {root} from "postcss";

export enum CardOp {
    Giruda = 'giruda',
    Card = 'card',
}

export type inputLogProp = {
    op: CardOp,
    content: string,
}

export type logProp = {
    id: string,
    op: CardOp,
    content: string,
}

export class CardLogStore {
    @observable logs:logProp[] = Array();

    @action
    public push = (log:inputLogProp) => {
        if (log.op === CardOp.Giruda && log.content === 'init') this.logs = [];
        this.logs.push({
            id: uuidv4(),
            ...log,
        });
    }

    public top = () => {
        return this.logs.at(-1);
    }

    public size = () => {
        return this.logs.length;
    }

    @action
    public rollbackOne = () => {
        const log = this.top();
        if (!log) return;
        const content = log.content.split(' ');
        const functionName = content[0];
        if (log.op===CardOp.Card && functionName === 'update') {
            // @ts-ignore
            rootStore.mightyStore.rollback(content[1], parseInt(content[2]), content[3] === "true");
        }
        else if (log.op===CardOp.Giruda && functionName === 'girudaCheck') {
            rootStore.girudaStore.rollback(parseInt(content[1]))
        }
        this.logs.pop();
    }

    @action
    public rollback = (idx:number) => {
        let i = this.logs.length;
        for (;i > idx; i--) {
            this.rollbackOne();
        }
    }

    constructor() {
        makeObservable(this);
    }
}
