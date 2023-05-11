describe("Navigation", () => {
  it("should navigate to the detail page", () => {
    cy.visit("/")
    cy.get("#home-cards a:first").click()
    cy.url().should("include", "/pokemon")
  })
})

describe("Navigation", () => {
  it("should navigate to the home page", () => {
    const pokemonId = 1
    cy.visit(`/pokemon/${pokemonId}`)
    cy.get("#back-arrow").click()
    cy.url().should("include", "/")
    cy.get("div").contains("POKEMONS")
  })
})

describe("Navigation between pagination", () => {
  it("It should allow navigating to the next page of the list", () => {
    cy.visit("/")
    cy.get("button[title='Go to next page']").click()
    cy.get("#home-cards").find("a").should("have.length.gte", 10)
  })

  it("It should allow navigating to the previous page of the list", () => {
    cy.visit("/")
    cy.get("button[title='Go to previous page']").click()
    cy.get("#home-cards").find("a").should("have.length.gte", 10)
  })
})
