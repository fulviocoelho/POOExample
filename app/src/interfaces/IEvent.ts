import IActionRequests from "./IActionRequests";

export default interface IEvent {
    client_id: string,
    actions: Array<IActionRequests>
}