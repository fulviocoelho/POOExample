import clients_examples from './ClientsExamples';
import { handler } from './app/src/handler/Handler';
import IEvent from './app/src/interfaces/IEvent';

const action = {
    withdraw: 'withdraw',
    deposit: 'deposit',
    balance: 'balance'
}

const event: IEvent = {
    client_id: clients_examples.tax_payer.cheking,
    actions: [
        {
            type: action.balance,
        },
        {
            type: action.deposit,
            value: 10
        },
        {
            type: action.balance,
        },
        {
            type: action.withdraw,
            value: 5
        },
        {
            type: action.balance,
        }
    ]
};

handler(event);