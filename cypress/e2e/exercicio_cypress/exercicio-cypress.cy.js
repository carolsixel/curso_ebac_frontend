describe("Testes para a Agenda de Contatos", () => {
    beforeEach(() => {
        cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
    });

    it("Deve incluir um novo contato na agenda", () => {
        cy.get('input[type="text"]').type("Fernando Cunha"); 
        cy.get('input[type="email"]').type("fernando.cunha@gmail.com"); 
        cy.get('input[type="tel"]').type("22992345688"); 
        cy.contains("Adicionar").click();
        cy.screenshot("teste-incluir");
    });

    it("Deve editar um contato da agenda", () => {
        cy.get(":nth-child(5) > .sc-gueYoa > .edit").click(); 
        cy.get('input[type="text"]').clear().type("Luca Sixel"); 
        cy.get('input[type="email"]').clear().type("luca.sixel@gmail.com"); 
        cy.get('input[type="tel"]').clear().type("21912345678"); 
        cy.get(".alterar").click(); 
        cy.screenshot("teste-editar");
    });

    it("Deve remover um contato da agenda", () => {
        cy.get(":nth-child(5) > .sc-gueYoa > .delete").click(); 
        cy.screenshot("teste-remover");
    });
});