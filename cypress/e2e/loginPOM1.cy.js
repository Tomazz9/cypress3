/// <reference types='Cypress' />
import { loginPage } from "../page_objects/loginPage";

describe("login POM", () => {
  let invalidEmail = "filip.nedovic@vivifyidea";
  let validPassword = "Test12345";

  before("visit login page", () => {
    cy.visit("/");
    loginPage.loginBtn.click();
  });

  it("valid login using POM", () => {
    cy.url().should("include", "/login");
    loginPage.loginHeading
      .should("be.visible")
      .and("have.text", "Please login");
    loginPage.login(invalidEmail, validPassword);

    /*loginPage.emailInput.type(validEmail);
    loginPage.passwordInput.type(validPassword);
    loginPage.submitBtn.click();*/
    //cy.url().should("not.include", "/login");
    loginPage.errorMessage
      .should("be.visible")
      .and("have.text", "Bad Credentials")
      .and("have.css", "background-color", "rgb(248, 215, 218)");
  });
});
