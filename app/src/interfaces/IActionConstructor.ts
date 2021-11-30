import Client from "../abstract/Client";
import IActionRequests from "./IActionRequests";

export default interface IActionsConstructor {
    client: Client;
    actions: Array<IActionRequests>
}