
describe('Тестирование логин пароль tastycoffee', function () {
    
    it('Залогинится и найти мои заказы', function () {
        cy.visit('https://shop.tastycoffee.ru/coffee/');
        cy.get('.reg-wrap > :nth-child(1) > .greyLink').click()
        cy.get('#email').type('shurupavert@mail.ru');
        cy.get('#password').type('Parol0109');
        cy.get('#sign-in').click();
             
        })
})


