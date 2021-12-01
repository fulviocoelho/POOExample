import IClientInfo from "../interfaces/IClientInfo";
import ILogs from "../interfaces/ILogs";
import Client from "../abstract/Client";
import IOptions from "../interfaces/IOptions";

 export default class ElderClient extends Client {
    protected logs: ILogs;

    constructor(client_info: IClientInfo, { database, usefull, accountFactory }: IOptions) {
        super(client_info, { database, usefull, accountFactory });
        
        this.logs = usefull.createLogs();

        this.logs.alert(`Atendimento Preferencial`);
    }
 }