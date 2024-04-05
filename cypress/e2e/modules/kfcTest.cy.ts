import KfcHomePage from "../helpers/kfcHomePage";
import KfcDealsPage from "../helpers/kfcDealsPage";

const kfcHomePage = new KfcHomePage();
const kfcDealsPage = new KfcDealsPage();

describe("Verify the KFC Home page location details and Deals page menu tiles", () => {
  let UITextsJson: { startYourOrderText: string; locationText: string };

  before(() => {
    cy.fixture("UITexts").then((UITexts) => {
      UITextsJson = UITexts;
    });
  });

  it("Verify the location text and button in home page is displayed correcly", () => {
    kfcHomePage.visit();
    kfcHomePage.verifyLocationText(UITextsJson.locationText);
    kfcHomePage.verifyLocationButton();
  });

  it("Verify the category menu tiles in Home page have valid links", () => {
    const expectedTiles: string[] = [
      "value-snackers",
      "peri-peri-chicken",
      "chicken-rolls",
    ];

    kfcHomePage.visit();
    expectedTiles.forEach((tile) => {
      kfcHomePage.verifyTileisValidLink(tile);
    });
  });

  it("Verify the Kfc deals page ", () => {
    kfcDealsPage.visit();
    kfcDealsPage
      .clickFindAKfcButton()
      .verifyStartOrderText(UITextsJson.startYourOrderText);
  });
});
