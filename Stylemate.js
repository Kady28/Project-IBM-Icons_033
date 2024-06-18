describe('StyleMate web Application', () => {
    it('Search Functionality', () => {
        //visit Stylemate web application
        cy.visit('https://luni-interface-029.vercel.app/')
        //checking search box accept any words or not
        cy.get('.search__form__input').type('tshirts')
        cy.xpath("//button[@class='search__form__button']").click()
        cy.reload()
        //checking search box showing auto suggestion or not
        cy.get('.search__form__input').type('men fas')
        cy.xpath("//button[@class='search__form__button']").click()
        cy.reload()
        //checking search box auto correct misspelled word or not
        cy.get('.search__form__input').type('wamen fashion')
        cy.xpath("//button[@class='search__form__button']").click()
        cy.reload()
        //checking search box support advance search features or not
        cy.get('.search__form__input').type('shirts under 1000')
        cy.xpath("//button[@class='search__form__button']").click()
        cy.reload()
        //checking search box accepting combination of alphabets ,numbers and special characters
        cy.get('.search__form__input').type('casual shirts @t under 1000')
        cy.xpath("//button[@class='search__form__button']").click()
        cy.reload()
        //search field able to accept special character -$ ,#,! or not.
        cy.get('.search__form__input').type('kurtas und#er 1!00')
        cy.xpath("//button[@class='search__form__button']").click()
        cy.reload()

    });
});
it('Register', () => {
    //visit Stylemate Login Page
    cy.visit('https://luni-interface-029.vercel.app/account/login')
    //Click on Create account
    cy.contains('Create account').click()
    //Type first name of user
    cy.xpath("//input[@class='fname__input register__input']").type("kiran")
    //type last name of user
    cy.xpath("//input[@class='lname__input register__input']").type("shinde")
    //Type  email of user
    cy.xpath("//input[@class='email__input register__input']").type('kiranbit028@gmail.com')
    //Type password of user
    cy.xpath("//input[@class='password__input register__input']").type("shinde@123")
    //Click on register button
    cy.xpath("//button[@class='register__button']").click()
    
});
it('Login', () => {
    //visit Stylemate Login Page
    cy.visit('https://luni-interface-029.vercel.app/account/login')
    //Type username of user
    cy.xpath("//input[@class='email__input login__input']").type('kiranbit028@gmail.com')
    //Type password of user
    cy.xpath("//input[@class='password__input login__input']").type("shinde@123")
    //Click on login button
    cy.contains('LOGIN').click()
    
});
it('Add to cart', () => {
    //visit Stylemate web application
    cy.visit('https://luni-interface-029.vercel.app/')
    // click on shop now button
    cy.xpath("//button[@class='MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root  css-rg8r61']").click()
    //select product versace
    cy.contains('Versace').click()
    //click on add to bag button
    cy.xpath("//button[@class='MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButtonBase-root  css-nwuxuv']").click()
    //click on add to cart icon
    cy.xpath("//div[@class='control'][3]").click()
    //remove item from cart
    cy.xpath("//div[@class='remove__item__icon']").click()
    //reload the page
    cy.reload()
    // click on shop button
    cy.contains('Shop').click()
    //select product versace
    cy.contains('Versace').click()
    //click on add to bag button
    cy.xpath("//button[@class='MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButtonBase-root  css-nwuxuv']").click()
    // click on shop button
    cy.contains('Shop').click()
    //select product valentino
    cy.contains('Valentino').click()
    //click on add to bag button
    cy.xpath("//button[@class='MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButtonBase-root  css-nwuxuv']").click() 
    //click on add to cart icon
    cy.xpath("//div[@class='control'][3]").click()
    //click on checkout
    cy.xpath("//button[@class='MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root  css-79xub']").click()
    

});
 it('Wishlisht', () => {
    //visit Stylemate web application
    cy.visit('https://luni-interface-029.vercel.app/')
    // click on shop button
    cy.xpath("//button[@class='MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root  css-rg8r61']").click()
    //select product zegna
    cy.contains('Zegna').click()
    //click on add to wishlist icon
    cy.xpath("//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeLarge css-az7twc']").click() 
    //click on wishlist icon
    cy.xpath("//div[@class='control'][2]").click()
    //click on add to cart
    cy.xpath("//div[@class='add__to__cart']").click()
 });

 it('Gui Functionality', () => {
     //visit Stylemate web application
    cy.visit('https://luni-interface-029.vercel.app/')
    //click on stylemate logo
    cy.xpath('//img[@style="width: 80%;"]').click()
    //click on homepage
    cy.contains('Home').click()
     //click on Shoppage
     cy.contains('Shop').click()
    //click on Menpage
    cy.contains('Men').click()
     //click on Womenpage
     cy.contains('Women').click()
      //click on kidspage
    cy.contains('Kids').click()
      
 });