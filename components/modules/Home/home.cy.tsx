import { HomeContainer } from "./home.container"

describe("<HomeContainer />", () => {
  it("renders", () => {
    cy.mount(<HomeContainer />)
    cy.get("input").should("be.disabled")
  })
})
