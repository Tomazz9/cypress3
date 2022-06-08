/// <reference types='Cypress' />
import { registerPage } from "../page_objects/registerPage";

describe("registration Pom", () => {
  let firstName = "Dragan";
  let lastName = "Dragic";
  let validEmail = "dragan@gmail.com";
  let validPassword = "Test1234";
  let validPasswordConifrmation = "Test1234";

  before("visit register page", () => {
    cy.visit("/register");
    //registrationPage.registrationBtn.click()
  });
  it("valid register using POM", () => {
    cy.url().should("include", "/register");

    registerPage.register(
      firstName,
      lastName,
      validEmail,
      validPassword,
      validPasswordConifrmation
    );
  });
});
