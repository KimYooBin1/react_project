
beforeEach(()=>{
    cy.visit("http://localhost:3000");
  })
  
  it("로그인 로그아웃 시나리오", ()=>{
    cy.wait(500)
    cy.get(".login").click()
    cy.get("div").contains("Sign in")
    cy.get(".email").type("1@123123").should("have.value","1@123123")
    cy.get(".password").type("123123").should("have.value", "123123")
    cy.get(".submit").click()
    cy.contains("OK").click()

    cy.get(".userlogo").trigger('mouseover') 
    cy.get('.logout').click()
    cy.contains("OK").click()
  })

//   it("라이브 상품 등록 시나리오", ()=>{
//     cy.wait(500)
//     cy.get(".login").click()
//     cy.get(".email").type("1@123123").should("have.value","1@123123")
//     cy.get(".password").type("123123").should("have.value", "123123")
//     cy.get(".submit").click()
//     cy.contains("OK").click()

//     cy.get(".라이브상품").click()
//     cy.wait(500)
//     cy.contains("게시물 등록하기").click()

//     cy.get(".name").type("name")
//     cy.get(".remarks").type("remarks")
//     cy.get(".contents").type("contents")
//     cy.get(".pirce").type("100000", {delay:50})

//     cy.get(".searchAddress").click().wait(500);
//     cy.get("iframe").should("be.visible")        modal 접근 오류 발생
//     cy.contains("OK").click()


//     cy.get(".addressDetail").type("addressDetail")
//     cy.get(".submit").click()
//     cy.contains("OK").click()

//   })