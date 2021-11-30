import ClientFactory from "../factory/ClientFactory"
import code_messages from "../constants/CodeMessages"
import IEvent from "../interfaces/IEvent"
import Actions from "../business/Actions"
import Logs from "../usefull/Logs"
import DatabaseFactory from "../factory/DatabaseFactory"
import UsefullFactory from "../factory/UsefullFactory"
import database_connect_info from "../constants/DatabaseConnectInfo"

export function handler(
        { client_id, actions }: IEvent, 
        usefull: UsefullFactory = new UsefullFactory(), 
        actionClass: Actions = new Actions({ 
            client: new ClientFactory(client_id, {
                usefull: new UsefullFactory(),
                database: new DatabaseFactory(database_connect_info).create(),
            }).create(), 
            actions 
        }) 
    ){
    const logs: Logs = usefull.createLogs();
    try {
        actionClass.execute();
    } catch (error) {
        logs.error(code_messages.error_on_handler)
        logs.error(error)
    }
}