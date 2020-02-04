describe('Test Scenario: Open MeetUp website and verify Sign Up validation', function()
{ beforeEach(function ()
    {cy.visit('https://www.meetup.com/')
       .get('#joinMeetupButton').click()
     cy.get('#register-trigger--withEmail').click()})

  it('TCID_01 : Provide incorrect e-mail', () => {
    cy.get('#register-field--name').type("Admin")
    cy.get('#register-field--email').type("Admin")
    cy.get('#register-field--password').type("admin123")
    cy.get('#register-error--email').should('contain', "Doesn't look like an email address")
    cy.get('button.button--primary.button--fullWidth.j-next-panel').click()
    cy.get('#register-error--email').should('contain', "Doesn't look like an email address")})

  it('TCID_02 : Leave empty name field', () => {
    cy.get('#register-field--email').type("admin@gmail.com")
    cy.get('#register-field--password').type("admin123")
    cy.get('button.button--primary.button--fullWidth.j-next-panel').click()
    cy.get('#register-error--name').should('contain', "Can't be empty")})

  it('TCID_03 : Leave empty password field', () => {
    cy.get('#register-field--name').type("Admin")
    cy.get('#register-field--email').type("admin@gmail.com")
    cy.get('button.button--primary.button--fullWidth.j-next-panel').click()
    cy.get('#register-error--password').should('contain', "Can't be empty")})

  it('TCID_04 : Leave empty e-mail field', () => {
    cy.get('#register-field--name').type("Admin")
    cy.get('#register-field--password').type("admin123")
    cy.get('button.button--primary.button--fullWidth.j-next-panel').click()
    cy.get('#register-error--email').should('contain', "Can't be empty")})
})