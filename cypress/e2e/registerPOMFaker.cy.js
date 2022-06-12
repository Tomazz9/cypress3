/// <reference types='Cypress' />
import { registerPage } from "../page_objects/registerPage";
const faker = require("@faker-js/faker");

describe("registration Pom", () => {
  const userData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    validEmail: faker.internet.email(),
    noNumPass: faker.internet.password(20, true, /[A-Z]/),
    shortPassword: faker.internet.password(4),
    oneLetterName: faker.random.alpha({ count: 1 }),
    validPass: faker.internet.password(),
    emailNocom: faker.internet.email("Jeanne", "Doe", "gmail"),

    //passConfim: "Test1234",
  };

  before("visit register page", () => {
    cy.visit("/register");
    //registrationPage.registrationBtn.click()
  });

  xit("register with password less than 8 characters", () => {
    registerPage.register(
      userData.firstName,
      userData.lastName,
      userData.validEmail,
      userData.shortPassword
    );
    cy.url().should("include", "/register");
    registerPage.errorMessage.should("be.visible");
    registerPage.errorMessage.should(
      "have.text",
      "The password must be at least 8 characters."
    );
  });

  xit("register with email without @", () => {
    registerPage.register(
      userData.firstName,
      userData.lastName,
      userData.emailNocom,
      userData.validPass
    );
    registerPage.errorMessage.should("be.visible");
    registerPage.errorMessage.should(
      "have.text",
      "The email must be a valid email address."
    );
  });

  xit("pasword without numbers", () => {
    registerPage.register(
      userData.firstName,
      userData.lastName,
      userData.validEmail,
      userData.noNumPass
    );
    registerPage.errorMessage.should("be.visible");
    registerPage.errorMessage.should(
      "have.text",
      "The password format is invalid."
    );
  });

  it("valid register using POM", () => {
    cy.url().should("include", "/register");
    registerPage.register(
      userData.firstName,
      userData.lastName,
      userData.validEmail,
      userData.validPass
      //userData.passConfim
    );
    //cy.url().should("not.include", "/register");
  });
});
