/// <reference types='Cypress' />

const Locators = require("../fixtures/Locators.json");

describe("login with locators", () => {
  let email = "filip.nedovic@vivifyideas.com";
  let password = "Test12345";
  before("", () => {
    cy.visit("/");
    cy.get(Locators.Navigation.actionButton).eq(1).click();
  });

  it("login with locators", () => {
    cy.get(Locators.Navigation.actionButton).eq(1).click();
    cy.get(Locators.Login.emailInput).type(email);
    cy.get(Locators.Login.passwordInput).type(password);
    cy.get(Locators.Login.submitBtn).click();
  });

  it("sucsessful logout", () => {
    cy.get(Locators.Navigation.actionButton).should("have.length", 4);
    cy.get(Locators.Navigation.actionButton).eq(3).click();
  });
});
