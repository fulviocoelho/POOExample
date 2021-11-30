import IExecutableAction from './IExecutableAction';

export default interface IAvailableActions {
    balance: IExecutableAction;
    deposit: IExecutableAction;
    withdraw: IExecutableAction;
}