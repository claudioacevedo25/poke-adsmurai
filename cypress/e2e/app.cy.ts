describe("Navigation", () => {
  it("should navigate to the detail page", () => {
    cy.visit("http://localhost:3000/")
    cy.get("#home-cards a:first").click()
    cy.url().should("include", "/pokemon")
  })
})

describe("Navigation", () => {
  it("should navigate to the home page", () => {
    cy.visit("http://localhost:3000/pokemon/1")
    cy.get("#back-arrow").click()
    cy.url().should("include", "/")
    cy.get("div").contains("POKEMONS")
  })
})
