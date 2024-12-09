describe('Test Cases to Practice Automation',()=>{
    beforeEach(()=>{
        cy.visit('https://automationexercise.com/')
        cy.get('a > img').should('be.visible')
        
        

    })
    it('User credential',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        //cy.get('[data-qa="signup-name"]').type('onename')
        cy.get('[data-qa="login-email"]').type('onename@example.com')
        cy.get('[data-qa="login-password"]').type('1234567')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        //cy.get(':nth-child(3) > .top').click()
        //cy.get('[data-qa="password"]').type('1234567')
        //cy.get('[data-qa="days"]').select('27').should('have.value','27')
        //cy.get('[data-qa="months"]').select('July').should('have.value','7')
        //cy.get('[data-qa="years"]').select('1995').should('have.value','1995')
        //cy.get(':nth-child(7) > label').click()
        //cy.get(':nth-child(8) > label').click()
        //cy.get('[data-qa="first_name"]').type('examples')
        //cy.get('[data-qa="last_name"]').type('examplesi')
        //cy.get('[data-qa="company"]').type('cardano')
        //cy.get('[data-qa="address"]').type('cardano 24')
        //cy.get('[data-qa="country"]').select('United States').should('have.value','United States')
        //cy.get('[data-qa="state"]').type('california')
        //cy.get('[data-qa="city"]').type('caraninio')
        //cy.get('[data-qa="zipcode"]').type('1234')
        //cy.get('[data-qa="mobile_number"]').type('1234567890')
        //cy.get('[data-qa="create-account"]').click()
        //cy.get('b').should('be.visible')
        //cy.get('[data-qa="continue-button"]').click()
        //cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    })
    

    
    it('TC1 Register',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.get('[data-qa="signup-name"]').type('examplediis')
        cy.get('[data-qa="signup-email"]').type('exampless@exampleki.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.get(':nth-child(1) > b').should('be.visible')
        cy.get(':nth-child(3) > .top').click()
        cy.get('[data-qa="password"]').type('123456')
        cy.get('[data-qa="days"]').select('27').should('have.value','27')
        cy.get('[data-qa="months"]').select('July').should('have.value','7')
        cy.get('[data-qa="years"]').select('1995').should('have.value','1995')
        cy.get(':nth-child(7) > label').click()
        cy.get(':nth-child(8) > label').click()
        cy.get('[data-qa="first_name"]').type('examples')
        cy.get('[data-qa="last_name"]').type('examplesi')
        cy.get('[data-qa="company"]').type('cardano')
        cy.get('[data-qa="address"]').type('cardano 24')
        cy.get('[data-qa="country"]').select('United States').should('have.value','United States')
        cy.get('[data-qa="state"]').type('california')
        cy.get('[data-qa="city"]').type('caraninio')
        cy.get('[data-qa="zipcode"]').type('1234')
        cy.get('[data-qa="mobile_number"]').type('1234567890')
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        
        
    })
    it('TC2 Login with correct email and password',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.get('[data-qa="login-email"]').type('onename@example.com')
        cy.get('[data-qa="login-password"]').type('1234567')
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
        
    })
    it('TC3 Login with incorrect email and password',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.get('[data-qa="login-email"]').type('examppless@exmpalidiss.com')
        cy.get('[data-qa="login-password"]').type('12345767')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should('be.visible')
        cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
    })
    it('TC4 Logout User',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.get('[data-qa="login-email"]').type('onename@example.com')
        cy.get('[data-qa="login-password"]').type('1234567')
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')

    })
    it('TC5 Register User with existing email',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.signup-form > h2').should('be.visible')
        cy.get('[data-qa="signup-name"]').type('onename')
        cy.get('[data-qa="signup-email"]').type('onename@example.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p').should('be.visible')
        cy.get('.signup-form > form > p').should('have.text','Email Address already exist!')


    })
    it('TC6 Contact us form',()=>{
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
        cy.get('div.contact-form > .title').should('be.visible')
        cy.get('[data-qa="name"]').type('doeski')
        cy.get('[data-qa="email"]').type('doeskis@example.com')
        cy.get('[data-qa="subject"]').type('hire')
        cy.get('[data-qa="message"]').type('hello i want to give a feedback')
        cy.get(':nth-child(6) > .form-control').selectFile("C:\\Users\\enias\\OneDrive\\Υπολογιστής\\my pic.jpg")
        cy.get('[data-qa="submit-button"]').click()
        cy.get('.status').should('be.visible')
        cy.get('span').click()
        cy.get('a > img').should('be.visible')

    })
    it('TC7 Verify test case page is visible',()=>{
        cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get('span').should('be.visible')
        cy.get('span').should('have.text','Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:')
    })
    it('TC8 Verify product page',()=>{
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('.title').should('be.visible')
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.url().should('include', '/product_details')
        const selectors =['.product-information > h2',
            '.product-information > :nth-child(3)',
            ':nth-child(5) > span',
            ':nth-child(6) > b',
            ':nth-child(7) > b',
            ':nth-child(8) > b' ]
        selectors.forEach(selector=>{
            cy.get(selector).should('be.visible')
        })
       


    })
    it('CT9 Verify search product',()=>{
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.url().should('include', '/products')
        cy.get('#search_product').type('Men Tshirt').get('#submit_search').click()
        cy.get('.productinfo').should('contain', 'Men Tshirt')
        cy.get('.productinfo').should('be.visible')


    })
    it('TC10 Verify subricption in home page',()=>{
        cy.clock()
        cy.get('#footer').scrollIntoView()
        cy.get('.single-widget > h2').should('have.text', 'Subscription')
        cy.get('#susbscribe_email').type('exampless@example.com').get('#subscribe > .fa').click()
        cy.get('.alert-success').should('be.visible')
        cy.tick(2000)
    })
    it('TC11 Verify subscription in cart page',()=>{
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.clock()
        cy.get(':nth-child(3) > a').click()
        cy.get('#footer').scrollIntoView()
        cy.get('.single-widget > h2').should('have.text', 'Subscription')
        cy.get('#susbscribe_email').type('exampless@example.com').get('#subscribe > .fa').click()
        cy.get('.alert-success').should('be.visible')
        cy.tick(2000)
    })
    it('TC12 Add products in cart',()=>{
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        const Products = ['#product-1 > .cart_description > h4 > a',
            '#product-2 > .cart_description > h4 > a',
            '#product-1 > .cart_price > p',
            '#product-1 > .cart_quantity > .disabled',
            '#product-1 > .cart_total > .cart_total_price',
            '#product-2 > .cart_price > p',
            '#product-2 > .cart_quantity > .disabled',
            '#product-2 > .cart_total > .cart_total_price'

        ]
        Products.forEach(product=>{
            cy.get(product).should('be.visible')
        })
        
    })
    it('TC13 Verify product quantity in cart',()=>{
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('[data-product-id="18"]').first().scrollIntoView()
        cy.get(':nth-child(20) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('#quantity').clear().type('4')
        cy.get(':nth-child(5) > .btn').click()
        cy.get('u').click()
        cy.get('.cart_quantity > .disabled').should('exist').should('have.text', '4')

    })
    it('TC14 Place order: Register while checking out',()=>{
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        
        
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('[data-product-id="4"]').first().scrollIntoView()
        cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('[data-product-id="5"]').first().scrollIntoView()
        cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('[data-product-id="6"]').first().scrollIntoView()
        cy.get(':nth-child(8) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.url().should('include', '/view_cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.modal-body > :nth-child(2) > a > u').click()
        cy.get('[data-qa="signup-name"]').type('matufeno')
        cy.get('[data-qa="signup-email"]').type('matuf@matufeno.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#id_gender1').click()
        cy.get('[data-qa="password"]').type('12345')
        cy.get('[data-qa="days"]').select('27').should('have.value','27')
        cy.get('[data-qa="months"]').select('July').should('have.value','7')
        cy.get('[data-qa="years"]').select('1995').should('have.value','1995')
        cy.get(':nth-child(7) > label').click()
        cy.get(':nth-child(8) > label').click()
        cy.get('[data-qa="first_name"]').type('matuf')
        cy.get('[data-qa="last_name"]').type('matufi')
        cy.get('[data-qa="company"]').type('cardano')
        cy.get('[data-qa="address"]').type('cardano 24')
        cy.get('[data-qa="country"]').select('United States').should('have.value','United States')
        cy.get('[data-qa="state"]').type('california')
        cy.get('[data-qa="city"]').type('caraninio')
        cy.get('[data-qa="zipcode"]').type('1234')
        cy.get('[data-qa="mobile_number"]').type('1234567890')
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery > .address_title > .page-subheading')
        .should('contain', 'Your delivery address')
        cy.get('#address_delivery > .address_firstname')
        .should('contain','Mr. matuf matufi')
        cy.get('#product-1 > .cart_description > h4 > a').should('be.visible')
        cy.get('#product-2 > .cart_description > h4 > a').should('be.visible')
        cy.get('.form-control').scrollIntoView()
        cy.get('.form-control').type('ahojteee matufinio')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type('matuf nixnix')
        cy.get('[data-qa="card-number"]').type('1234567890123')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('07')
        cy.get('[data-qa="expiry-year"]').type('2045')
        cy.get('[data-qa="pay-button"]').click()
        cy.get('.col-sm-9 > p').should('be.visible')
        cy.get(':nth-child(5) > a').click()
        cy.get(':nth-child(5) > a').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.clock()
        cy.tick(2000)
                

    })
    it('TC15 Place Order: Register before Checkout',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="signup-name"]').type('examplediis')
        cy.get('[data-qa="signup-email"]').type('exampless@exampleki.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.get(':nth-child(1) > b').should('be.visible')
        cy.get(':nth-child(3) > .top').click()
        cy.get('[data-qa="password"]').type('123456')
        cy.get('[data-qa="days"]').select('27').should('have.value','27')
        cy.get('[data-qa="months"]').select('July').should('have.value','7')
        cy.get('[data-qa="years"]').select('1995').should('have.value','1995')
        cy.get(':nth-child(7) > label').click()
        cy.get(':nth-child(8) > label').click()
        cy.get('[data-qa="first_name"]').type('examples')
        cy.get('[data-qa="last_name"]').type('examplesi')
        cy.get('[data-qa="company"]').type('cardano')
        cy.get('[data-qa="address"]').type('cardano 24')
        cy.get('[data-qa="country"]').select('United States').should('have.value','United States')
        cy.get('[data-qa="state"]').type('california')
        cy.get('[data-qa="city"]').type('caraninio')
        cy.get('[data-qa="zipcode"]').type('1234')
        cy.get('[data-qa="mobile_number"]').type('1234567890')
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
        cy.get(':nth-child(10) > a').click()
        cy.get('.modal-footer > .btn')
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('[data-product-id="11"]').first().scrollIntoView()
        cy.get(':nth-child(11) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').scrollIntoView()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery > .address_title > .page-subheading')
        .should('contain', 'Your delivery address')
        cy.get('#address_delivery > .address_firstname')
        .should('contain','Mr. examples examplesi')
        cy.get('#product-11 > .cart_description > h4 > a').should('be.visible')
        cy.get('.form-control').scrollIntoView()
        cy.get('.form-control').type('ahojteee examples examplesi here')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type('matuf nixnix')
        cy.get('[data-qa="card-number"]').type('1234567890123')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('07')
        cy.get('[data-qa="expiry-year"]').type('2045')
        cy.get('[data-qa="pay-button"]').click()
        cy.get('.col-sm-9 > p').should('have.text','Congratulations! Your order has been confirmed!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()

        
        
        



    })
    it('TC16 Place Order: Login before Checkout',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.get('[data-qa="login-email"]').type('onename@example.com')
        cy.get('[data-qa="login-password"]').type('1234567')
        cy.get('[data-qa="login-button"]').click()
        cy.get('b').should('have.text','onename')
        cy.get(':nth-child(10) > a').click()
        cy.get('.modal-footer > .btn')
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('[data-product-id="11"]').first().scrollIntoView()
        cy.get(':nth-child(11) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').scrollIntoView()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.url().should('include', '/view_cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery > .address_title > .page-subheading')
        .should('contain', 'Your delivery address')
        cy.get('#address_delivery > .address_firstname')
        .should('contain','Mr. examples examplesi')
        cy.get('#product-11 > .cart_description > h4 > a').should('be.visible')
        cy.get('.form-control').scrollIntoView()
        cy.get('.form-control').type('ahojteee examples examplesi here')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type('matuf nixnix')
        cy.get('[data-qa="card-number"]').type('1234567890123')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('07')
        cy.get('[data-qa="expiry-year"]').type('2045')
        cy.get('[data-qa="pay-button"]').click()
        cy.get('.col-sm-9 > p').should('have.text','Congratulations! Your order has been confirmed!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    })
    it('TC17 Remove Products From Cart',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.get('[data-qa="login-email"]').type('onename@example.com')
        cy.get('[data-qa="login-password"]').type('1234567')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').scrollIntoView()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.url().should('include', '/view_cart')
        cy.get('#product-2 > .cart_description > h4 > a').should('be.visible')
        cy.get('#product-2 > .cart_delete > .cart_quantity_delete > .fa').click()
        cy.get('#product-2 > .cart_description > h4 > a').should('not.exist')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').scrollIntoView().click()

    })
    it('TC18 View Category Products',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.get('[data-qa="login-email"]').type('onename@example.com')
        cy.get('[data-qa="login-password"]').type('1234567')
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').scrollIntoView()
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').should('be.visible')
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click()
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
        cy.get('.title').should('have.text','Women - Dress Products')
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click()
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click()
        cy.get('.title').should('have.text','Men - Tshirts Products')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()


    })
    it('TC19 View & Cart Brand Products',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.get('[data-qa="login-email"]').type('onename@example.com')
        cy.get('[data-qa="login-password"]').type('1234567')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('.brands_products > h2').scrollIntoView()
        const Brands = ['.brands-name > .nav > :nth-child(1) > a',
            '.brands-name > .nav > :nth-child(2) > a',
            '.brands-name > .nav > :nth-child(3) > a',
            '.brands-name > .nav > :nth-child(4) > a',
            '.brands-name > .nav > :nth-child(5) > a',
            '.brands-name > .nav > :nth-child(6) > a',
            '.brands-name > .nav > :nth-child(7) > a',
            '.brands-name > .nav > :nth-child(8) > a'
        ]
        Brands.forEach(brand=>{
            cy.get(brand).should('be.visible')
        })
        cy.get('.brands-name > .nav > :nth-child(2) > a').click()
        cy.url().should('include', 'brand_products/H&M')
        const Brand_Products =  [':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p',
            ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p',
            ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > p',
            ':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > p',
            ':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > p'
        ]
        Brand_Products.forEach(product=>{
            cy.get(product).should('be.visible')
        })
        cy.get('.brands-name > .nav > :nth-child(5) > a').scrollIntoView()
        cy.get('.brands-name > .nav > :nth-child(5) > a').click()
        cy.url().should('include', 'brand_products/Babyhug')
        const Baby_Hug =[':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p',
            ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p',
            ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > p',
            ':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > p'

        ]
        Baby_Hug.forEach(baby=>{
            cy.get(baby).should('be.visible')
        })
        cy.get('.shop-menu > .nav > :nth-child(4)').click()


    })
    it('TC20 Search Products and Verify Cart After Login',()=>{
        
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.url('include', 'products')
        cy.get('.title').should('have.text', 'All Products')
        cy.get('#search_product').type('Premium Polo T-Shirts')
        cy.get('#submit_search').click()
        cy.get('.productinfo > p').should('have.text', 'Premium Polo T-Shirts')
        cy.get('.productinfo > p').should('be.visible')
        cy.get('.productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').scrollIntoView().click()
        cy.url('include', 'view_cart')
        cy.get('h4 > a').should('be.visible')
        cy.get(':nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type('onename@example.com')
        cy.get('[data-qa="login-password"]').type('1234567')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.url('include', 'view_cart')
        cy.get('h4 > a').should('be.visible')
        cy.get(':nth-child(4) > a').scrollIntoView().click()
        

    })
    it('TC21 Add review on product',()=>{
        cy.clock()
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.url('include', 'products')
        cy.get('.title').should('have.text','All Products')
        cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.active > a').should('have.text','Write Your Review').should('be.visible')
        cy.get('#name').scrollIntoView().type('desi')
        cy.get('#email').type('example@examplis.com')
        cy.get('#review').type('good product')
        cy.get('#button-review').click()
        cy.get('.alert-success > span').should('have.text','Thank you for your review.')
        cy.tick(2000)



    })
    it('TC22 Add to cart from Recommended items',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        cy.get('.login-form > h2').should('be.visible')
        cy.get('[data-qa="login-email"]').type('onename@example.com')
        cy.get('[data-qa="login-password"]').type('1234567')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.recommended_items > .title').scrollIntoView()
        cy.get('.active .productinfo > p').each(($item) => {
            cy.wrap($item).should('be.visible');
        });
        

        cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.url().should('include','view_cart')
        cy.get('h4 > a').should('be.visible')
        cy.get(':nth-child(4) > a').scrollIntoView().click()
    
    })
    it('TC23 Verify address details in checkout page',()=>{

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="signup-name"]').type('newnamess')
        cy.get('[data-qa="signup-email"]').type('newname@exampless.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#id_gender1').click()
        cy.get('[data-qa="password"]').type('12345678')
        cy.get('[data-qa="days"]').select('28').should('have.value','28')
        cy.get('[data-qa="months"]').select('July').should('have.value','7')
        cy.get('[data-qa="years"]').select('1996').should('have.value','1996')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('[data-qa="first_name"]').type('new')
        cy.get('[data-qa="last_name"]').type('name')
        cy.get('[data-qa="company"]').type('gerdino')
        cy.get('[data-qa="address"]').type('address123')
        cy.get('[data-qa="country"]').select('United States').should('have.value','United States')
        cy.get('[data-qa="state"]').type('california')
        cy.get('[data-qa="city"]').type('cali')
        cy.get('[data-qa="zipcode"]').type('1243')
        cy.get('[data-qa="mobile_number"]').type('1234567890')
        cy.get('[data-qa="create-account"]').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('have.text','Congratulations! Your new account has been successfully created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('b').should('have.text','newnamess')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').scrollIntoView().click()
        cy.url().should('include','view_cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery').within(() => {
            cy.contains('new name').should('be.visible')
            cy.contains('gerdino').should('be.visible')
            cy.contains('address123').should('be.visible')
            cy.contains('cali california 1243').should('be.visible')
            cy.contains('United States').should('be.visible')
            cy.contains('1234567890').should('be.visible')
        })
        cy.get('#address_invoice').within(()=>{
            cy.contains('new name').should('be.visible')
            cy.contains('gerdino').should('be.visible')
            cy.contains('address123').should('be.visible')
            cy.contains('cali california 1243').should('be.visible')
            cy.contains('United States').should('be.visible')
            cy.contains('1234567890').should('be.visible')

        })
        cy.get(':nth-child(5) > a').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('have.text','Your account has been permanently deleted!')
        cy.get('[data-qa="continue-button"]').click()
        




    })
    it('TC24 Download Invoice after purchase order',()=>{
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > .btn').scrollIntoView().click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(8) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.url().should('include','view_cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.modal-body > :nth-child(2) > a > u').click()
        cy.get('[data-qa="login-email"]').type('onename@example.com')
        cy.get('[data-qa="login-password"]').type('1234567')
        cy.get('[data-qa="login-button"]').click()
        cy.get('b').should('have.text','onename')
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery').within(() => {
            cy.contains('Mr. examples examplesi').should('be.visible')
            cy.contains('cardano').should('be.visible')
            cy.contains('cardano 24').should('be.visible')
            cy.contains('caraninio california 1234').should('be.visible')
            cy.contains('United States').should('be.visible')
            cy.contains('1234567890').should('be.visible')
        })
        cy.get('.table').scrollIntoView().within(()=>{
            
            
            
            cy.contains('Stylish Dress').should('be.visible')
            cy.contains('Winter Top').should('be.visible')
            cy.contains('Summer White Top').should('be.visible')
        })
        cy.get('.form-control').scrollIntoView().type('description')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type('onename')
        cy.get('[data-qa="card-number"]').type('121345')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('06')
        cy.get('[data-qa="expiry-year"]').type('2034')
        cy.get('[data-qa="pay-button"]').click()
        cy.get('.col-sm-9 > p').should('have.text','Congratulations! Your order has been confirmed!')
        cy.get('.col-sm-9 > .btn-default').click()
        cy.wait(5000)
        const fileName = 'invoice.txt'
        cy.readFile(`cypress/downloads/${fileName}`).should('exist')
        



        
    })
    it("TC25 Verify Scroll Up using 'Arrow' button and Scroll Down functionality",()=>{
        cy.scrollTo('bottom')
        cy.contains('Subscription').should('be.visible')
        cy.get('#scrollUp > .fa').click()
        cy.get('.single-widget > h2').scrollIntoView()
        cy.get('a > img').scrollIntoView()

    })
    it("TC26 Verify Scroll Up without 'Arrow' button and Scroll Down functionality",()=>{
        cy.scrollTo('bottom')
        cy.contains('Subscription').should('be.visible')
        cy.wait(5000)
        cy.scrollTo('top')
    })




})