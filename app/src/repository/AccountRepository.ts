import Repository from "../abstract/Repository";
import code_messages from "../constants/CodeMessages";
import IAccountInfo from "../interfaces/IAccountInfo";

export default class AccountRepository extends Repository {

    public getAccountInfo(client_id: string): IAccountInfo {
        let query_result = this.database.fetch('account_table', { client_id });
        
        if(Array.isArray(query_result)){
            query_result = query_result[0];
        }

        if(typeof query_result !== 'object'){
            this.logs.error(code_messages.query_result_isnt_object);
            throw new Error();
        }

        return query_result as IAccountInfo;
    }

}