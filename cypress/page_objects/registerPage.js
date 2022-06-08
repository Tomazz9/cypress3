class RegisterPage {
  get firstNameInput() {
    return cy.get("#first-name");
  }
  get lastNameInput() {
    return cy.get("#last-name");
  }
  get emailInput() {
    return cy.get("#email");
  }
  get passwordInput() {
    return cy.get("#password");
  }
  get passwordConfirmationInput() {
    return cy.get("#password-confirmation");
  }
  get checkBoxInput() {
    //:checkbox moze i ovako
    return cy.get(".form-check-input");
  }
  get submitButton() {
    return cy.get("button");
  }
  register(firstName, lastName, email, password, passwordConfirmation) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.passwordConfirmationInput.type(passwordConfirmation);
    this.checkBoxInput.check();
    this.submitButton.click();
  }
}

export const registerPage = new RegisterPage();
