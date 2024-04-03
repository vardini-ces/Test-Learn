class kfcDealsPage{

    locators:{
        findAKfcButton: string;
        startYourOrder:string;
        startYourOrderText:string;
    };
    url:string

    constructor(){
        this.locators = {
        findAKfcButton: '[aria-label="Find a KFC"]',
        startYourOrder: '[data-testid="contenttext-component"]',
        startYourOrderText: 'How would you like to receive your order?',
        };
        this.url='/offers';
    }


    visit() {

        cy.visit(this.url);
    }

    clickFindAKfc(){

        cy
        .get(this.locators.findAKfcButton)
        .click()

        return this;
    }

    verifyStartOrder(){

        cy
        .get(this.locators.startYourOrder)
        .contains(this.locators.startYourOrderText)

        return this;
    }
}

export default kfcDealsPage;

