import Client from "../abstract/Client";
import IClientInfo from "../interfaces/IClientInfo";
import ILogs from "../interfaces/ILogs";
import IOptions from "../interfaces/IOptions";

export default class TaxPayerClient extends Client {
    protected logs: ILogs;

    constructor(client_info: IClientInfo, { database, usefull, accountFactory }: IOptions) {
        super(client_info, { database, usefull, accountFactory });
        
        this.logs = usefull.createLogs();

        this.logs.alert(`Atendimento Normal`);
    }
}