escribe("CRUD categoriaproducto", () => {//Titulo
    //Antes que nada, abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit("http://localhost:8100"); //Frontend de Produccion
    });

    //Servicio API - GetUsuarios()
    it("GetAll()", () => {
        cy.wait(1000);//Esperar 1 seg.
        cy.get("ion-tab-button").eq(1).click(); // click en el TAB de Usuarios
        cy.wait(1000);//Esperar 1 seg.

        cy.get("ion-item").should("be.visible")
        .should("not.have.length", "0"); //Verifica que exista al menos un (ion-item)
    });

    //Servicio API - AddUsuario(entidad)
    it("addCategoria(entidad)", () => {
        cy.get("ion-tab-button").eq(1).click(); // click en el TAB de Usuarios
        cy.wait(1000);//Esperar 1 seg.

        cy.get("#nombre")
            .type("insertar nombre de la Categoria cypress", { delay: 100 })
            .should("have.value", "insertar nombre de la Categoria cypress");

        cy.get("#addCategoria").not("[disabled]").click();
    });
});