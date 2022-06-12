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
  get galleryInputParent() {
    return cy.get(".form-group");
  }
  get trashGalleryBtn() {
    return this.galleryInputParent.find("button").first();
  }
  get arrowUpBtn() {
    return this.galleryInputParent.find("button").eq(1);
  }
  get arrowDownBtn() {
    return this.galleryInputParent.find("button").last();
  }
  get arrowBtnEq() {
    return cy.get("i").eq(0);
  }

  get errorMessage() {
    return cy.get('p[class="alert alert-danger"]');
  }

  create(title, description, url) {
    this.titleInput.type(title);
    this.descInput.type(description);
    this.urlInput.type(url);
    this.submitGalBtn.click();
  }
}

export const createGallery = new CreateGallery();
