import { faker } from "@faker-js/faker";

describe.only("Register successful - Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Register successful", () => {
    cy.visit("/register");
    const Register = {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      company: faker.company.name(),
      email: faker.internet.email(),
    };
    cy.Register(Register);
    cy.url().should(
      "contains",
      "https://demo.nopcommerce.com/registerresult/1"
    );
    cy.get(".result").should("have.text", "Your registration completed");
  });
  it("Register unsuccessfully with wrong email", () => {
    cy.visit("/register");
    const Register = {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      company: faker.company.name(),
      email: faker.word.words(1),
    };
    cy.Register(Register);
    cy.get("#Email-error").should("have.text", "Wrong email");
  });
});
