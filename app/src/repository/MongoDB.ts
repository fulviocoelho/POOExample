import Database from '../abstract/Database';
import UsefullFactory from '../factory/UsefullFactory';
import IDatabaseInfo from '../interfaces/IDatabaseInfo';
import MongoDBDriver from './MongoDBDriver';

export default class MongoDB extends Database {
    public driver: MongoDBDriver;

    constructor(database_info: IDatabaseInfo, usefull: UsefullFactory = new UsefullFactory(), driver: MongoDBDriver = new MongoDBDriver(database_info)) {
        super(database_info, usefull);

        this.driver = driver;
    }

    public connect() {
        this.logs.info(['conects with mongo', this.user, this.pass, this.host])
        this.driver.connect();
    }

    public fetch (table_name: string, objeto: object): unknown {
        this.logs.info(['fetch mongo data from ', table_name, 'with', objeto])
        return this.driver.colection(table_name).getItem(objeto);
    }
    public insert (table_name: string, objeto: object): unknown {
        this.logs.info(['insert mongo into ', table_name, 'with', objeto])
        this.driver.colection(table_name).putItem(objeto);
        return 'teste' as unknown
    }
    public update (table_name: string, objeto: object): unknown {
        this.logs.info(['update mongo ', table_name, 'with', objeto])
        this.driver.colection(table_name).updateItem(objeto);
        return 'teste' as unknown
    }
    public delete (table_name: string, objeto: object): unknown {
        this.logs.info(['delete mongo ', table_name, 'with', objeto])
        this.driver.colection(table_name).deleteItem(objeto);
        return 'teste' as unknown
    }
}