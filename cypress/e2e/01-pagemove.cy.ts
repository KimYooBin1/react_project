beforeEach(()=>{
  cy.visit("http://localhost:3000");
})

it("출석부 시나리오", ()=>{
  cy.get(".출석부").click()
  cy.contains("출책하기").click()
  cy.get(".writer").type("writer").should("have.value", "writer")
  cy.get(".title").type("title").should("have.value", "title")
  cy.get(".contents").type("contents").should("have.value", "contents")
  cy.contains("등록하기").click()
  cy.contains("OK").click()
})

it("라이브 게시판 시나리오", ()=>{
  cy.get(".라이브게시판").click()
  cy.contains("게시물 등록하기").click()
  cy.get(".writer").type("작성자")
  cy.get(".password").type("password")
  cy.get(".title").type("title")
  cy.get(".contents").type("contents")

  cy.get(".zipcode")
  .type('12345', { force: true })

  cy.get(".address")
  .type('address', { force: true })
  cy.get(".addressDetail").type("addressDetail")
  cy.get(".youtube").type("https://www.youtube.com/watch?v=RPaKp68owg0")
  cy.get(".submit").click()
  cy.contains("OK").click()
  cy.scrollTo('bottom')
})


it("라이브 상품 시나리오", ()=>{
  cy.get(".라이브게시판").click()
})


it("시바갤러리 시나리오", ()=>{
  cy.get(".시바갤러리").click()
  cy.get(".btn").click()
  cy.get(".logo").click()
})