describe('Pizza Sipariş Formu Testleri', () => {
  beforeEach(() => {
    // EĞER FORM ANA SAYFADAYSA: cy.visit('http://localhost:5174/')
    // EĞER FORM BAŞKA SAYFADAYSA (ÖRN: /order):
    cy.visit('http://localhost:5174/pizza'); 
  });

  it('inputa bir metin giren test', () => {
    // Verilen kodda name="isim" olduğu için bu şekilde yakalıyoruz
    cy.get('input[name="isim"]', { timeout: 10000 })
      .should('be.visible')
      .type('Firuze')
      .should('have.value', 'Firuze');
  });

  it('birden fazla malzeme seçilebilen bir test', () => {
    // Malzemeleri isimlerine göre seçiyoruz
    const secilecekler = ['Pepperoni', 'Sosis', 'Mısır', 'Sucuk'];
    
    secilecekler.forEach(malzeme => {
      // Label içindeki checkbox'ı bulup işaretle
      cy.contains(malzeme).click();
    });
    
    // Seçilenleri doğrula (Senin kodunda seçilince arka plan sarı oluyor)
    cy.get('input[type="checkbox"]:checked').should('have.length', 4);
  });

  it('formu gönderen bir test', () => {
    // 1. İsim
    cy.get('input[name="isim"]').type('Firuze');
    
    // 2. Boyut Seç (Örn: M) - Label'a tıklamak daha garantidir
    cy.contains('M').click();
    
    // 3. Hamur Seç
    cy.get('select[name="hamur"]').select('ince');

    // 4. En az 4 malzeme
    const malzemeler = ['Pepperoni', 'Sosis', 'Mısır', 'Sucuk'];
    malzemeler.forEach(m => cy.contains(m).click());

    // 5. Sipariş Ver butonu aktif olmalı ve tıklanmalı
    cy.get('button[type="submit"]')
      .should('not.be.disabled')
      .click();

    // 6. Başarı sayfası kontrolü
    cy.url().should('include', '/success');
  });
});


describe('Pizza Sipariş Süreci Kapsamlı Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174/pizza'); // App.jsx'te yolun /pizza
  });

  it('Form validasyonu: İsim 3 karakterden azsa buton disabled kalmalı', () => {
    cy.get('input[name="isim"]').type('Fi');
    cy.get('button[type="submit"]').should('be.disabled');
  });

  it('Malzeme sınırı: 4’ten az malzeme seçilirse buton disabled kalmalı', () => {
    cy.get('input[name="isim"]').type('Firuze');
    cy.contains('M').click();
    cy.get('select[name="hamur"]').select('ince');
    cy.contains('Mısır').click(); // Sadece 1 malzeme
    cy.get('button[type="submit"]').should('be.disabled');
  });

  it('Tam akış: Sipariş verip başarı sayfasına gitmeli ve verileri görmeli', () => {
    cy.get('input[name="isim"]').type('Firuze');
    cy.contains('L').click();
    cy.get('select[name="hamur"]').select('kalin');
    
    // 4 malzeme seç
    ['Mısır', 'Sosis', 'Domates', 'Sucuk'].forEach(m => cy.contains(m).click());
    
    cy.get('button[type="submit"]').click();
    
    // Success sayfası doğrulaması
    cy.url().should('include', '/success');
    cy.contains('L').should('be.visible');
    cy.contains('Sosis').should('be.visible');
  });
});