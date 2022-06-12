/// <reference types='Cypress' />

import { createGallery } from "../page_objects/createGallery";
import { loginPage } from "../page_objects/loginPage";
const faker = require("@faker-js/faker");
describe("create gallery POM", () => {
  const userData = {
    email: "dragan@gmail.com",
    password: "Test1234",
    title: "galerija",
    description: "moja galerija",
    url: "https://a-z-animals.com/media/2021/12/Best-Horses-Quarter-Horse.jpg",
    fakerTitle: faker.animal.horse(),
    fakerDesc: faker.random.words(7),
    wrongFakerUrl: faker.internet.url(),
    shortTitleFaker: faker.random.alpha({ count: 1 }),
    addJpegFaker: faker.file_extension({ category: "image" }),
  };

  before("visit login page", () => {
    cy.visit("/");
    loginPage.loginBtn.click();
    loginPage.login(userData.email, userData.password);
    createGallery.createBtn.click();
  });

  xit("valid login and create gallery", () => {
    createGallery.create(userData.title, userData.description, userData.url);
  });

  xit("create gallery with title and desc using faker", () => {
    createGallery.create(userData.fakerTitle, userData.fakerDesc, userData.url);
  });

  xit("create gallery with wrong faker Url", () => {
    createGallery.create(
      userData.fakerTitle,
      userData.fakerDesc,
      userData.wrongFakerUrl
    );
    createGallery.errorMessage
      .should("be.visible")
      .and("have.text", "Wrong format of image")
      .and("have.css", "background-color", "rgb(248, 215, 218)");
  });
  it("create gallery with short title", () => {
    createGallery.create(
      userData.shortTitleFaker,
      userData.fakerDesc,
      userData.addJpegFaker
    );
    createGallery.errorMessage
      .should("be.visible")
      .and("have.text", "The title must be at least 2 characters.");
  });
});
