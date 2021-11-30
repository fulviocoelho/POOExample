import Database from "../abstract/Database";
import Repository from "../abstract/Repository";
import AccountFactory from "../factory/AccountFactory";
import UsefullFactory from "../factory/UsefullFactory";

export default interface IOptions {
    database: Database;
    usefull: UsefullFactory;
    repository?: Repository;
    accountFactory?: AccountFactory;
}