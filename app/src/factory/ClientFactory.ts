import IClientInfo from "../interfaces/IClientInfo";
import Client from "../abstract/Client";
import ElderClient from '../business/ElderClient'
import TaxPayerClient from '../business/TaxPayerClient'
import IOptions from "../interfaces/IOptions";
import ClientRepository from "../repository/ClientRepository";
import code_messages from "../constants/CodeMessages";

export default class ClientFactory {
    private client_info: IClientInfo
    private age: number
    private options: IOptions;
    
    constructor(client_id: string, { database, usefull, repository = new ClientRepository({database, usefull}) }: IOptions) {
        const logs = usefull.createLogs();

        if(!(repository instanceof ClientRepository)){
            logs.error(code_messages.repository_is_not_client_repository);
            throw new Error();
        }

        const client_info: IClientInfo = repository.getClientInfo(client_id);
        
        this.client_info = client_info;
        this.age = client_info.age;
        this.options = { database, usefull, repository };
    }

    public create(): Client {
        if(this.isElderClient(this.age)){
            return new ElderClient(this.client_info, this.options)
        }else{
            return new TaxPayerClient(this.client_info, this.options)
        }
    }

    private isElderClient(age: number): boolean {
        return age > 60 ? true : false
    }
}