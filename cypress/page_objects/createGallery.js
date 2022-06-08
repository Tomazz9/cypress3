class CreateGallery {
  get createBtn() {
    return cy.get('a[href="/create"]');
  }
  get titleInput() {
    return cy.get("#title");
  }
  get descInput() {
    return cy.get("#description");
  }
  get urlInput() {
    return cy.get(".form-control").eq(2);
  }
  get submitGalBtn() {
    return cy.get("button").eq(3);
  }

  create(title, description, url) {
    this.titleInput.type(title);
    this.descInput.type(description);
    this.urlInput.type(url);
    this.submitGalBtn.click();
  }
}

export const createGallery = new CreateGallery();
