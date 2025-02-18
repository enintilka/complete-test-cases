describe('Automating Web Testing for Hotovo.com ',()=>{
    beforeEach(()=>{
        cy.visit('https://www.hotovo.com/')
    })
    it('TC1Verify the HomePage URL is correct',()=>{
        cy.url().should('eql','https://www.hotovo.com/')
    })

    it('TC2 Verify HomePage is visible',()=>{
        cy.get('.landingUnderstrike')
        .should('be.visible')
        .invoke('text')
        .should('eq', 'means done')
    })

    it("TC3 Verify FIND YOUR SOLUTION button navigates to correct page",()=>{
        cy.contains('FIND YOUR SOLUTION')
        .should('be.visible')
        .click()
        cy.url().should('include', '/services')

    })

    it('TC4 Verify the language switcher exists',()=>{
        cy.get('.flex-1.truncate.text-lg.font-bold')
          .should('have.class', 'flex-1')
          .and('be.visible')
          .click()
        cy.get('[data-key="English"]').should('be.visible')
        cy.get('[data-key="French"]').should('be.visible') 
          
            
          


    })
    it('TC5 Verify page content has changed to English',()=>{
        cy.get('.flex-1.truncate.text-lg.font-bold')
          .should('have.class', 'flex-1')
          .and('be.visible')
          .click()
        cy.get('[data-key="English"]').click()
        cy.get('.text-\\[26px\\]')
          .should('have.text',"We're a software development team... that delivers.")
            

    })
    it('TC6 Verify page content has changed to French',()=>{
        cy.get('.flex-1.truncate.text-lg.font-bold')
          .should('have.class', 'flex-1')
          .and('be.visible')
          .click()
        cy.get('[data-key="French"]').click()
        cy.get('.text-\\[26px\\]')
          .should('have.text',"Nous sommes une équipe de développement à fort rendement.")
        cy.url().should('include','/fr') 

    })
    it('TC7 Verify Menu bar display properly',()=>{
        cy.get('#menu-open-button').click()
        const menuItems= [
            'Services',
            'Our work',
            'About us',
            'Careers',
            'Blog',

        ]
        menuItems.forEach(item =>{
            cy.contains(item).should('be.visible')
        })
    })
   it('TC8 verify service button navigate to the correct page',()=>{
    cy.get('#menu-open-button').click()
    cy.contains('Services')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true })
    cy.url().should('include','/services')  
    

   })
   it('TC9 verify Our work button navigate to the correct page',()=>{
    cy.get('#menu-open-button').click()
    cy.contains('Our work')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true })
    cy.url().should('include','/our-work')
    cy.contains('Agile Teams').scrollIntoView().click()
    cy.get('h2.understrikeHover')
      .should('have.length.greaterThan', 0)
      .each(($el) => {
        
        cy.wrap($el).should('be.visible');
      });
    

   })
   it('TC10 verify About us button navigate to the correct page',()=>{
    cy.get('#menu-open-button').click()
    cy.contains('About us')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true })
    cy.url().should('include','/about-us')
    cy.contains('Who are we').scrollIntoView()
    cy.get('p') 
    .should('have.length.greaterThan', 0) 
    .each(($el) => {
      
    cy.wrap($el).scrollIntoView().click({ force: true })
    });  
    

   })
   it('TC11 verify Careers button navigate to the correct page',()=>{
    cy.get('#menu-open-button').click()
    cy.contains('Careers')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true })
    cy.url().should('include','/career')
    cy.contains('Sr Full Stack Developer').scrollIntoView()

    const position= [
        'Sr Full Stack Developer',
        'Salesforce Developer',
        'Scala Developer',
        

    ]
    position.forEach(item =>{
        cy.contains(item).should('be.visible')
    })
    

   
    

   })
   it('TC12 verify Blog button navigate to the correct page',()=>{
    cy.get('#menu-open-button').click()
    cy.contains('Blog')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true })
    cy.url().should('include','/blog?page=1')
    cy.get('.blog_page_categories.text-center').should('be.visible')
    const blogCards = [265, 266, 267, 268, 269, 270]
    blogCards.forEach((id) => {
        cy.get(`#card-item-${id}`).scrollIntoView().should('be.visible');
      });
    cy.get('[id^="card-item-"]').should('have.length.greaterThan', 5)    
    

   })
   it('TC13 verify Contact button navigate to the correct page',()=>{
    cy.get('#menu-open-button').click()
    cy.contains('Contact')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true })
    cy.url().should('include','/contact')
    const contactLocation=['Hotovo SK (HQ)','Hotovo UK',
    'Hotovo AR',
    'Hotovo RS',
    'Hotovo TN']
    
    contactLocation.forEach((location)=>{
    cy.get('h2.false.understrike')
      .contains(location)
      .scrollIntoView()
      .should('be.visible');

    })
    
    
    

   })
  


})