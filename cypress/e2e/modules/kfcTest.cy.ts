import KfcHomePage from "../helpers/kfcHomePage";
import KfcDealsPage from "../helpers/kfcDealsPage";

const kfcHomePage = new KfcHomePage();
const kfcDealsPage = new KfcDealsPage();

describe('Verify the KFC Home, Menu and Login page', ()=> {
   

    it('Verify the location text in home page', ()=> {
        kfcHomePage.visit();
        kfcHomePage.verifyLocationText();
        kfcHomePage.verifyLocationButton();
    })

    it('Verify the category tiles in home page', ()=> {
        kfcHomePage.visit();
        kfcHomePage.verifyPeriPeriTile();
        kfcHomePage.verifyChickenRolls();
        kfcHomePage.verifyValueSnacker();

    })

    it('Verify the Kfc deals page', ()=> {
        kfcDealsPage.visit();
        kfcDealsPage.clickFindAKfc().verifyStartOrder();


    })

    

})