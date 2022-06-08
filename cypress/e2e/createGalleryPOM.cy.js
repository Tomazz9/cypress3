/// <reference types='Cypress' />

import { createGallery } from "../page_objects/createGallery";
import { loginPage } from "../page_objects/loginPage";
describe("create gallery POM", () => {
  let email = "dragan@gmail.com";
  let password = "Test1234";
  let title = "galerija";
  let description = "moja galerija";
  let url =
    "https://a-z-animals.com/media/2021/12/Best-Horses-Quarter-Horse.jpg";

  before("visit login page", () => {
    cy.visit("/");
    loginPage.loginBtn.click();
    loginPage.login(email, password);
    createGallery.createBtn.click();
  });

  it("valid login and create gallery", () => {
    createGallery.create(title, description, url);
  });
});
