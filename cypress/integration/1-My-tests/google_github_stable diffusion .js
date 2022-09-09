
describe('Тестирование поиск stable diffusion в гугле', function () {
   it('Проверка, что при поиске stable diffusion в выдаче есть ссылка на Github для скачивания', function () {
        cy.visit('https://google.com');
        cy.get("input[type='text']").type('stable diffusion').type('{enter}');
        cy.contains('CompVis/stable-diffusion - GitHub').click();                                                                                                                                                                                                                             
    })
})


///Тест пройден