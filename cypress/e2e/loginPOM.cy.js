/// <reference types='Cypress' />
import { loginPage } from "../page_objects/loginPage";

describe("login POM", () => {
  let validEmail = "filip.nedovic@vivifyideas.com";
  let validPassword = "Test12345";

  before("visit login page", () => {
    cy.visit("/");
    loginPage.loginBtn.click();
  });

  it("valid login using POM", () => {
    cy.url().should("include", "/login");
    loginPage.login(validEmail, validPassword);
    /*loginPage.emailInput.type(validEmail);
    loginPage.passwordInput.type(validPassword);
    loginPage.submitBtn.click();
    cy.url().should("not.include", "/login"); */
  });
});
