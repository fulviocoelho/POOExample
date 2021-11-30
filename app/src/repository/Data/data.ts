import account_types from "../../constants/AccountTypes";

const data: {
    account_table: Array<{
        client_id: string;
        account_type: account_types.checkings | account_types.savings;
        balance: number;
        number: number;
    }>;
    client_table: Array<{
        client_id: string;
        first_name: string;
        last_name: string;
        age: number;
    }>;
} = {
    account_table: [
        {
            client_id: '992640cc-a4f6-4d68-894f-b2e8a67658d6',
            balance: 0,
            account_type: account_types.savings,
            number: 1000123654
        },
        {
            client_id: '2b68fa36-0999-4e2d-94b0-6dacaeacd576',
            balance: 0,
            account_type: account_types.checkings,
            number: 1000453654
        },
        {
            client_id: 'da3274a1-ad6d-4658-a279-d82b3c06e47c',
            balance: 0,
            account_type: account_types.savings,
            number: 1100123654
        },
        {
            client_id: '522f3dc4-4cc2-4fa9-bc8b-29958482855c',
            balance: 0,
            account_type: account_types.checkings,
            number: 1000123963
        }
    ],
    client_table: [
        {
            client_id: '992640cc-a4f6-4d68-894f-b2e8a67658d6',
            first_name: 'Hugo',
            last_name: 'Fernando',
            age: 30
        },
        {
            client_id: '2b68fa36-0999-4e2d-94b0-6dacaeacd576',
            first_name: 'Tomas',
            last_name: 'Costa',
            age: 72
        },
        {
            client_id: 'da3274a1-ad6d-4658-a279-d82b3c06e47c',
            first_name: 'Tiago',
            last_name: 'Silva',
            age: 63
        },
        {
            client_id: '522f3dc4-4cc2-4fa9-bc8b-29958482855c',
            first_name: 'Felipe',
            last_name: 'Santos',
            age: 25
        }
    ]
}

export default data;