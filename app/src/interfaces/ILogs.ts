export default interface ILogs {
    info: (info: unknown) => void;
    error: (info: unknown) => void;
    alert: (info: unknown) => void;
}