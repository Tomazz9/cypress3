/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";

describe("register test", () => {
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let email = faker.internet.email();
  let password = faker.internet.password();

  beforeEach("visit register page", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register");
    cy.url().should("include", "/register");
  });

  it("password < 8 characters", () => {
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type(email);
    cy.get("#password").type(shortPassword);
    cy.get("#password-confirmation").type(shortPassword);
    cy.get(".form-check-input").check();
    cy.get('[type="submit"]').click();

    cy.url().should("include", "/register");
    cy.get('p[class="alert alert-danger"]')
      .eq(0)
      .should("have.text", "The email has already been taken.");
  });

  it("email without @", () => {
    cy.get("#first-name").type("sale");
    cy.get("#last-name").type("sale");
    cy.get("#email").type("sale1221gmail.com");
    cy.get("#password").type("sale123123");
    cy.get("#password-confirmation").type("sale123123");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();
    cy.url().should("include", "/register");
  });

  it("email without .com", () => {
    cy.get("#first-name").type("sale");
    cy.get("#last-name").type("sale");
    cy.get("#email").type("sale1221@gmail");
    cy.get("#password").type("sale123123");
    cy.get("#password-confirmation").type("sale123123");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();
    cy.url().should("include", "/register");
  });

  it("different password", () => {
    cy.get("#first-name").type("sale");
    cy.get("#last-name").type("sale");
    cy.get("#email").type("sale12221@gmail.com");
    cy.get("#password").type("sale12312223");
    cy.get("#password-confirmation").type("sale123123");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();
    cy.url().should("include", "/register");
  });

  it("empty first name", () => {
    cy.get("#first-name").type("  ");
    cy.get("#last-name").type("sale");
    cy.get("#email").type("sale141s@gmail.com");
    cy.get("#password").type("11111111");
    cy.get("#password-confirmation").type("11111111");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();
    cy.url().should("include", "/register");
  });

  it("empty last name", () => {
    cy.get("#first-name").type("sale");
    cy.get("#last-name").type("  ");
    cy.get("#email").type("sale141s@gmail.com");
    cy.get("#password").type("11111111");
    cy.get("#password-confirmation").type("11111111");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();
    cy.url().should("include", "/register");
  });

  it("password with 8 spaces", () => {
    cy.get("#first-name").type("sale");
    cy.get("#last-name").type("sale");
    cy.get("#email").type("sale1412s@gmail.com");
    cy.get("#password").type("        ");
    cy.get("#password-confirmation").type("        ");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();
    cy.url().should("include", "/register");
  });

  it("without check terms and condition", () => {
    cy.get("#first-name").type("sale");
    cy.get("#last-name").type("sale");
    cy.get("#email").type("sale1412fs@gmail.com");
    cy.get("#password").type("444446666");
    cy.get("#password-confirmation").type("444446666");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "/register");
  });

  it("succsessful register", () => {
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type("filip@gmail.com");
    cy.get("#password").type(password);
    cy.get("#password-confirmation").type(password);
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();
    cy.url().should("include", "/register");
  });
});
