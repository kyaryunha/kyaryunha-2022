import {createContext, useContext} from "react";
import { MightyStore } from "./mighty.store";
import {CardBoardStore} from "./card-board.store";
import {GirudaStore} from "./giruda.store";
import {CardLogStore} from "./card-log.store";

export const rootStore = {
    cardBoardStore: new CardBoardStore(),
    cardLogStore: new CardLogStore(),
    girudaStore: new GirudaStore(),
    mightyStore: new MightyStore(),
}
export const rootStoreContext = createContext(rootStore);

export const useStores = () => useContext(rootStoreContext);
