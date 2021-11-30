import Logs from "../usefull/Logs";
import Math from "../usefull/Math";

export default class UsefullFactory {
    private _logs: Logs;
    private _math: Math;

    constructor() {
        this._logs = new Logs();
        this._math = new Math();

        return this;
    }

    public createLogs(): Logs {
        return this._logs;
    }

    public createMath(): Math {
        return this._math;
    }
}