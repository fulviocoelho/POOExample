import Client from "../abstract/Client";
import UsefullFactory from "../factory/UsefullFactory";
import IActionsConstructor from "../interfaces/IActionConstructor";
import IActionRequests from "../interfaces/IActionRequests"
import IAvailableActions from "../interfaces/IAvailableActions"
import IExecutableAction from "../interfaces/IExecutableAction"
import Logs from "../usefull/Logs";

export default class Actions {

    private actions: Array<IActionRequests>;
    private available: IAvailableActions;
    private client: Client;
    private logs: Logs

    constructor({ client, actions }: IActionsConstructor, usefull: UsefullFactory = new UsefullFactory()) {
        this.actions = actions;
        this.client = client;
        this.logs = usefull.createLogs();
        this.available = this.generate();

        return this;
    }

    private generate(): IAvailableActions {
        return {
            balance: (value?: number | undefined): void => {
                this.logs.info(this.client.getBalance())
            },
            deposit: (value?: number | undefined): void => {
                if(value && typeof value === 'number'){
                    this.client.deposit(value)
                }
            },
            withdraw: (value?: number | undefined): void => {
                if(value && typeof value === 'number'){
                    this.client.withdraw(value)
                }
            },
        }
    }
    
    public execute(): void {
        const available = this.available;
        for (const action of this.actions) {
            const actionFunction: IExecutableAction = available[action.type as keyof typeof available];
            actionFunction(action.value);
        }
    }
}