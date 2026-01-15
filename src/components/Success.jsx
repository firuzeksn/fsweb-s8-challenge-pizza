import React from 'react';

const Success = ({ data }) => {
  if (!data) return <div style={{ backgroundColor: '#CE2829', minHeight: '100vh' }}></div>;

  // toplam ek malzeme fiyatı
  const secimlerFiyati = (data.malzemeler?.length || 0) * 5;

  return (
    <div style={{ 
      backgroundColor: '#CE2829', 
      minHeight: '100vh', 
      color: 'white', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      paddingTop: '80px',
      fontFamily: "'Barlow', sans-serif"
    }}>
      <header style={{ backgroundColor: '#CE2829', padding: '40px 0', textAlign: 'center' }}>
        <img src="images/iteration-1-images/logo.svg" alt="Logo" style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}/>
      </header>
      
      {/* onay */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p className='mobile-none' style={{ 
          fontFamily: "'Satisfy', cursive", 
          color: '#FDC913', 
          fontSize: '1.8rem', 
          margin: '0' 
        }}>
          lezzetin yolda
        </p>
         <h2 className="mobile-show" style={{ 
          fontSize: '3rem', 
          fontWeight: '100', 
          margin: '10px 0',
          letterSpacing: '1.5px',
          fontFamily: "'Barlow', sans-serif",
        }}>
          TEBRİKLER!
          SİPARİŞİNİZ ALINDI
        </h2>
        <h2 className="mobile-none" style={{ 
          fontSize: '4.5rem', 
          fontWeight: '300', 
          margin: '10px 0',
          letterSpacing: '1.5px'
        }}>
          SİPARİŞ ALINDI
        </h2>
      </div>

      {/* çizgi */}
      <hr className="mobile-none" style={{ 
        width: '400px', 
        border: '0', 
        borderTop: '1px solid #5F5F5F',
        marginBottom: '40px' 
      }} />
    
      
      {/* Pizza Bilgileri */}
      <div className='mobile-none' style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '30px' }}>
          Position Absolute Acı Pizza
        </h3>
        
        <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '2', marginBottom: '40px' }}>
          <p>Boyut: <strong>{data.boyut }</strong></p>
          <p>Hamur: <strong>{data.hamur }</strong></p>
          <p>Ek Malzemeler: <strong>{data.malzemeler?.join(", ")}</strong></p>
        </div>
{/* Sipariş Bilgileri kısmına ekle */}
<p>Adet: <strong>{data.count || 1}</strong></p>
        {/* Sipariş toplam kutusu */}
        <div style={{ 
          border: '1px solid rgba(255,255,255,0.5)', 
          borderRadius: '10px', 
          padding: '25px',
          textAlign: 'left',
          width: '300px',
          margin: '0 auto'
        }}>
          <h4 style={{ fontSize: '1.2rem', margin: '0 0 20px 0' }}>Sipariş Toplamı</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>Seçimler</span>
            <span>{secimlerFiyati.toFixed(2)}₺</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
            <span>Toplam</span>
            <span>{data.toplamFiyat || '110.50'}₺</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;