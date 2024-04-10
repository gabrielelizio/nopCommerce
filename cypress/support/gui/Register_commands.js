Cypress.Commands.add("Register", (data) => {
  cy.get("#gender-male").click();
  cy.get("#FirstName");
  cy.visit("https://demo.nopcommerce.com/register?returnUrl=%2F");
  cy.get("#gender-male").click();
  cy.get("#FirstName").click();
  cy.get("#FirstName").type(data.firstname);
  cy.get("#FirstName").each(($el) => {
    cy.get($el)
      .invoke("val")
      .then((text) => {
        expect(text).to.eq(data.firstname);
      });
  });
  cy.get("#LastName").click();
  cy.get("#LastName").type(data.lastname);
  cy.get("#LastName").each(($el) => {
    cy.get($el)
      .invoke("val")
      .then((text) => {
        expect(text).to.eq(data.lastname);
      });
  });
  cy.get("#Email").click();
  cy.get("#Email").type(data.email);
  cy.get("#Email").each(($el) => {
    cy.get($el)
      .invoke("val")
      .then((text) => {
        expect(text).to.eq(data.email);
      });
  });
  cy.get("#Company").type(data.company);
  cy.get("#Company").each(($el) => {
    cy.get($el)
      .invoke("val")
      .then((text) => {
        expect(text).to.eq(data.company);
      });
  });
  cy.get("#Password").type("123456");
  cy.get("#ConfirmPassword").type("123456");
  cy.get("#register-button").click();
});
