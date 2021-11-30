import IClientInfo from "./app/src/interfaces/IClientInfo";

const clients_examples: {
    tax_payer: {
        savings: string;
        cheking: string;
    };
    elder: {
        savings: string;
        cheking: string;
    };
} = {
    tax_payer: {
        cheking: '522f3dc4-4cc2-4fa9-bc8b-29958482855c',
        savings: '992640cc-a4f6-4d68-894f-b2e8a67658d6'
    },
    elder: {
        cheking: '2b68fa36-0999-4e2d-94b0-6dacaeacd576',
        savings: 'da3274a1-ad6d-4658-a279-d82b3c06e47c'
    }
}

export default clients_examples;