import clc from 'cli-color';
import ILogs from '../interfaces/ILogs';

export default class Logs implements ILogs{

    private terminal: Function;

    constructor(terminal = console.log) {
        this.terminal = terminal;
    }

    public info(info: unknown) {
        if(Array.isArray(info)) {
            this.terminal(clc.blue('INFO::'), ...info);
        } else {
            this.terminal(clc.blue('INFO::'), info);
        }
    }
    public error(error: unknown) {
        if(Array.isArray(error)) {
            this.terminal(clc.red('ERROR::', ...error));
        } else {
            this.terminal(clc.red('ERROR::', error));
        }
    }
    public alert(alert: unknown) {
        if(Array.isArray(alert)) {
            this.terminal(clc.yellow('ALERT::'), ...alert);
        } else {
            this.terminal(clc.yellow('ALERT::'), alert);
        }
    }
}