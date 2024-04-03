class kfcHomePage{
  
    locators:{
        setLocationText: string;
        setLocationButton: string;
        menuItemPeriPeri: string;
        menuItemValueSnackers: string;
        menuItemChickenRolls: string;
        locationText: string;
    };
    url: string;

    constructor(){
    this.locators = {
        setLocationText: 'div[class="setLocationText"]',
        setLocationButton: 'button[data-testid="set-location-button"]',
        menuItemPeriPeri: '[data-testid="tiles-click-PERI PERI CHICKEN"]',
        menuItemValueSnackers: '[data-testid="tiles-click-VALUE SNACKERS"]',
        menuItemChickenRolls: '[data-testid="tiles-click-CHICKEN ROLLS"]',
        locationText: 'Allow location access for local store menu and promos',
    };
    this.url= '/';
    }

    visit() {

        cy.visit(this.url);
    }

    verifyLocationText() {
        
        cy
        .get(this.locators.setLocationText)
        .should('have.text',this.locators.locationText);

    }

    verifyLocationButton() {

        cy
        .get(this.locators.setLocationButton)
        .should('be.visible')
        .should('be.enabled')
        
    }

    verifyValueSnacker() {

        cy
        .get(this.locators.menuItemValueSnackers)
        .should('have.attr', 'href')
        .and('include', '/menu/value-snackers');

    }

    verifyPeriPeriTile() {

        cy
        .get(this.locators.menuItemPeriPeri)
        .should('have.attr', 'href')
        .and('include', '/menu/peri-peri-chicken');

    }

    verifyChickenRolls() {

        cy
        .get(this.locators.menuItemChickenRolls)
        .should('have.attr', 'href')
        .and('include', '/menu/chicken-rolls');

    }


}

export default kfcHomePage;