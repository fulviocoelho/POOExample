import Repository from "../abstract/Repository";
import code_messages from "../constants/CodeMessages";
import IClientInfo from "../interfaces/IClientInfo";

export default class ClientRepository extends Repository {

    public getClientInfo(client_id: string): IClientInfo {
        let query_result = this.database.fetch('client_table', { client_id });
        
        if(Array.isArray(query_result)){
            query_result = query_result[0];
        }

        if(typeof query_result !== 'object'){
            this.logs.error(code_messages.query_result_isnt_object);
            throw new Error();
        }

        return query_result as IClientInfo;
    }

}