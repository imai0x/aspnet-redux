/***********************************************************************************
 *                                                                                  *
 *   Redux Reducers and React Context API Provider/Consumer for state TetrisModel   *
 *   Generated by ts2redux from Source file ../TetrisModel.ts                       *
 *                                                                                  *
 ***********************************************************************************/
export interface Cell {
    color: string;
}
export declare enum Colors {
    EMPTY = ""
}
export interface ActivePiece {
    x: number;
    y: number;
    width: number;
    height: number;
    cells: Cell[][];
}
/**
 * [' O '],
 *  ['OOO'],
 *  [' O ']
 */
export declare const createNewPiece: (usingColor: string) => ActivePiece;
/**
 * @redux true
 */
export declare class TetrisModel {
    useColors: string[];
    lastUsedColor: number;
    points: number;
    rows: number;
    cols: number;
    cells: Cell[][];
    activePiece: ActivePiece;
    gameOn: boolean;
    gameEnded: boolean;
    ticksPerMove: number;
    tickCnt: number;
    doesCollide(pieceX: number, pieceY: number, pieceCells?: Cell[][]): boolean;
    tick(): void;
    left(): void;
    right(): void;
    rotate(): void;
    rotateCells(cells: Cell[][]): Cell[][];
    step(): void;
    pickNextColor(): string;
    masonPiece(): void;
    dropRows(): void;
    clearCells(): void;
    resetGame(): void;
    start(): void;
}
import { IState } from "./index";
import * as React from "react";
export interface IContainerPropsMethods {
    tick: () => any;
    left: () => any;
    right: () => any;
    rotate: () => any;
    step: () => any;
    masonPiece: () => any;
    dropRows: () => any;
    clearCells: () => any;
    resetGame: () => any;
    start: () => any;
}
export interface ITetrisModel {
    useColors: string[];
    lastUsedColor: number;
    points: number;
    rows: number;
    cols: number;
    cells: Cell[][];
    activePiece: ActivePiece;
    gameOn: boolean;
    gameEnded: boolean;
    ticksPerMove: number;
    tickCnt: number;
}
export declare const useColorsSelectorFn: (state: ITetrisModel) => string[];
export declare const lastUsedColorSelectorFn: (state: ITetrisModel) => number;
export declare const pointsSelectorFn: (state: ITetrisModel) => number;
export declare const rowsSelectorFn: (state: ITetrisModel) => number;
export declare const colsSelectorFn: (state: ITetrisModel) => number;
export declare const cellsSelectorFn: (state: ITetrisModel) => Cell[][];
export declare const activePieceSelectorFn: (state: ITetrisModel) => ActivePiece;
export declare const gameOnSelectorFn: (state: ITetrisModel) => boolean;
export declare const gameEndedSelectorFn: (state: ITetrisModel) => boolean;
export declare const ticksPerMoveSelectorFn: (state: ITetrisModel) => number;
export declare const tickCntSelectorFn: (state: ITetrisModel) => number;
export declare type IContainerPropsState = ITetrisModel;
export interface IProps extends IContainerPropsState, IContainerPropsMethods {
}
export declare const mapStateToProps: (state: IState) => ITetrisModel;
export declare const mapDispatchToProps: (dispatch: any) => IContainerPropsMethods;
export declare const StateConnector: any;
/**
 * @generated true
 */
export declare class RTetrisModel {
    private _state?;
    private _dispatch?;
    private _getState?;
    constructor(state?: ITetrisModel, dispatch?: (action: any) => void, getState?: () => any);
    useColors: string[] | undefined;
    lastUsedColor: number | undefined;
    points: number | undefined;
    rows: number | undefined;
    cols: number | undefined;
    cells: Cell[][] | undefined;
    activePiece: ActivePiece | undefined;
    gameOn: boolean | undefined;
    gameEnded: boolean | undefined;
    ticksPerMove: number | undefined;
    tickCnt: number | undefined;
    doesCollide(pieceX: number, pieceY: number, pieceCells?: Cell[][]): boolean;
    tick(): void;
    static tick(): (dispatcher: any, getState: any) => void;
    left(): void;
    static left(): (dispatcher: any, getState: any) => void;
    right(): void;
    static right(): (dispatcher: any, getState: any) => void;
    rotate(): void;
    static rotate(): (dispatcher: any, getState: any) => void;
    rotateCells(cells: Cell[][]): Cell[][];
    step(): void;
    static step(): (dispatcher: any, getState: any) => void;
    pickNextColor(): string;
    masonPiece(): void;
    static masonPiece(): (dispatcher: any, getState: any) => void;
    dropRows(): void;
    static dropRows(): (dispatcher: any, getState: any) => void;
    clearCells(): void;
    static clearCells(): (dispatcher: any, getState: any) => void;
    resetGame(): void;
    static resetGame(): (dispatcher: any, getState: any) => void;
    start(): void;
    static start(): (dispatcher: any, getState: any) => void;
}
export declare const TetrisModelEnums: {
    TetrisModel_useColors: string;
    TetrisModel_lastUsedColor: string;
    TetrisModel_points: string;
    TetrisModel_rows: string;
    TetrisModel_cols: string;
    TetrisModel_cells: string;
    TetrisModel_activePiece: string;
    TetrisModel_gameOn: string;
    TetrisModel_gameEnded: string;
    TetrisModel_ticksPerMove: string;
    TetrisModel_tickCnt: string;
    TetrisModel_doesCollide: string;
    TetrisModel_tick: string;
    TetrisModel_left: string;
    TetrisModel_right: string;
    TetrisModel_rotate: string;
    TetrisModel_rotateCells: string;
    TetrisModel_step: string;
    TetrisModel_pickNextColor: string;
    TetrisModel_masonPiece: string;
    TetrisModel_dropRows: string;
    TetrisModel_clearCells: string;
    TetrisModel_resetGame: string;
    TetrisModel_start: string;
};
export declare const TetrisModelReducer: (state: ITetrisModel, action: any) => ITetrisModel;
/***************************
 * React Context API test   *
 ***************************/
export declare const TetrisModelContext: React.Context<IProps>;
export declare const TetrisModelConsumer: React.ComponentType<React.ConsumerProps<IProps>>;
export declare class TetrisModelProvider extends React.Component {
    state: ITetrisModel;
    lastSetState: ITetrisModel;
    private __devTools;
    constructor(props: any);
    componentWillUnmount(): void;
    setStateSync(state: ITetrisModel): void;
    tick(): void;
    left(): void;
    right(): void;
    rotate(): void;
    step(): void;
    masonPiece(): void;
    dropRows(): void;
    clearCells(): void;
    resetGame(): void;
    start(): void;
    render(): JSX.Element;
}
