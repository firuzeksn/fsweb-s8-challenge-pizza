import { useHistory } from 'react-router-dom';

const Home = () => {  
  const history = useHistory();

  return (
    <>
    <div className="home-wrapper">
      {/* banner */}
      <div className="home-container" style={{
        backgroundColor: '#CE2829', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        color: 'white',
        fontFamily: "'Barlow', sans-serif", 
        height: "1080 px", 
        width: "100%"
      }}> 
        <h1 className='teknoYemek'>
          <img src="images/iteration-1-images/logo.svg" alt="Logo" />
        </h1>
        <p style={{ 
          fontFamily: "'Satisfy', cursive", 
          color: "#FDC913", 
          fontSize: "24px", 
          marginBottom: "10px" 
        }}>fırsatı kaçırma</p>

        <p style={{ 
          fontFamily: "Barlow, sans-serif",
          color: "white",
          fontWeight: "300",           
          fontSize: "80px",               
          margin: "0",
          textAlign: "center",
          lineHeight: "1"
        }}>
          KOD ACIKTIRIR <br /> PIZZA, DOYURUR
        </p>

        <button 
          onClick={() => history.push('/pizza')}
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            backgroundColor: "#FDC913",               
            padding: "12px 28px",
            borderRadius: "999px",                       
            border: "none",
            color: "black",
            cursor: "pointer",
            fontWeight: "bold",                         
            width: "194px",
            height: "56px",
            fontSize: "20px",
            marginTop: "30px"                          
          }}
        >
          ACIKTIM
        </button>
      </div>

      {/* ürünler*/}
      <nav className="kategori-menu" style={{ display: 'flex', justifyContent: 'center', gap: '30px', padding: '20px', backgroundColor: 'white' }}>
        {[
          { id: 1, name: 'Yeni!Kore' },
          { id: 2, name: 'Pizza' },
          { id: 3, name: 'Burger' },
          { id: 4, name: 'Kızartmalar' },
          { id: 5, name: 'Fast Food' },
          { id: 6, name: 'Gazlı İçecekler' }
        ].map(item => (
          <div key={item.id} style={{ textAlign: 'center', color: '#292929', fontSize: '14px', fontWeight: '500' }}>
            <img src={`images/iteration-2-images/icons/${item.id}.svg`} alt={item.name} style={{ display: 'block', margin: '0 auto 5px' }} />
            <span>{item.name}</span>
          </div>
        ))}
      </nav>

      {/* kartlar */}
      <section style={{ maxWidth: '1000px', margin: '40px auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div className="pizza-kart" style={{ backgroundImage: 'url(images/iteration-2-images/cta/kart-1.png)', borderRadius: '15px', padding: '40px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',     }}>
          <h2 style={{ fontSize: '40px', margin: '0' }}>Özel<br />Lezzetus</h2>
          <p>Position: Absolute Acı Burger</p>
          <button onClick={() => history.push('/pizza')} style={{ backgroundColor: 'white', color: '#D80027', border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>SİPARİŞ VER</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="burger-kart" style={{ backgroundImage: 'url(images/iteration-2-images/cta/kart-2.png)',backgroundColor: '#292929', borderRadius: '15px', padding: '30px', color: 'white' }}>
            <h3 style={{ margin: '0' }}>Hackathlon<br />Burger Menü</h3>
            <button onClick={() => history.push('/pizza')} style={{ backgroundColor: 'white', color: '#D80027', border: 'none', padding: '8px 15px', borderRadius: '20px', marginTop: '10px', cursor: 'pointer' }}>SİPARİŞ VER</button>
          </div>
          <div className="kurye-kart" style={{ backgroundImage: 'url(images/iteration-2-images/cta/kart-3.png)',backgroundColor: '#FDC913', borderRadius: '15px', padding: '30px', color: '#292929' }}>
            <h3 style={{ margin: '0' }}><span style={{ color: '#D80027' }}>Çooook</span> hızlı<br />npm gibi kurye</h3>
            <button onClick={() => history.push('/pizza')} style={{ backgroundColor: 'white', color: '#D80027', border: 'none', padding: '8px 15px', borderRadius: '20px', marginTop: '10px', cursor: 'pointer' }}>SİPARİŞ VER</button>
          </div>
        </div>
      </section>

      {/* ürünler */}
      <main style={{ textAlign: 'center', padding: '40px 0', backgroundColor: '#faf7f2' }}>
        <p style={{ color: '#ce2829', fontFamily: "'Satisfy', cursive", fontSize: '20px' }}>en çok paketlenen menüler</p>
        <h2 style={{ fontSize: '30px', marginBottom: '40px' }}>Acıktıran Kodlara Doyuran Lezzetler</h2>
    <nav className="kategori-menu" style={{ display: 'flex', justifyContent: 'center', gap: '15px', padding: '40px 20px', backgroundColor: '#FAF7F2' }}>
  {[
    { id: 1, name: 'Ramen', icon: '1.svg' },
    { id: 2, name: 'Pizza', icon: '2.svg', active: true }, 
    { id: 3, name: 'Burger', icon: '3.svg' },
    { id: 4, name: 'French fries', icon: '4.svg' },
    { id: 5, name: 'Fast food', icon: '5.svg' },
    { id: 6, name: 'Soft drinks', icon: '6.svg' }
  ].map(item => (
    <div 
      key={item.id} 
      style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 20px',
        borderRadius: '999px',
        backgroundColor: item.active ? '#292929' : 'white',
        color: item.active ? 'white' : '#292929', 
        fontSize: '16px', 
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <img 
        src={`images/iteration-2-images/icons/${item.icon}`} 
        alt={item.name} 
        style={{ width: '24px', height: '24px' }} 
      />
      <span>{item.name}</span>
    </div>
  ))}
</nav>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <div className="urun-kart" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', width: '250px' }}>
              <img src="images/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza" style={{ width: '100%' }} />
            <h3 style={{ fontSize: '18px', textAlign: 'left' }}>Terminal Pizza</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontWeight: 'bold' }}>
              <span>4.9</span>
              <span style={{ color: '#ce2829' }}>60₺</span>
            </div>
          </div>
          <div className="urun-kart" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', width: '250px' }}>
              <img src="images/iteration-2-images/pictures/food-2.png" alt="Position Absolute Acı Pizza" style={{ width: '100%' }} />
            <h3 style={{ fontSize: '18px', textAlign: 'left' }}>Position Absolute Acı Pizza</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontWeight: 'bold' }}>
              <span>4.9</span>
              <span style={{ color: '#ce2829' }}>60₺</span>
            </div>
          </div>
          <div className="urun-kart" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', width: '250px' }}>
              <img src="images/iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger" style={{ width: '100%' }} />
            <h3 style={{ fontSize: '18px', textAlign: 'left' }}>useEffect Tavuklu Burger</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontWeight: 'bold' }}>
              <span>4.9</span>
              <span style={{ color: '#ce2829' }}>60₺</span>
            </div>   
          </div>
        </div>
      </main>
    </div>
      {/* footer */}
    <footer style={{ 
      backgroundColor: '#1A1A1A', 
      color: 'white', 
      padding: '60px 20px',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: "'Barlow', sans-serif"
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        display: 'flex', 
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        
        {/* iletişim */}
        <div className="iletisim-content" style={{ flex: '1', minWidth: '250px' }}>
              <img src="images/iteration-2-images/footer/logo-footer.svg" alt="Logo" 
              style={{ marginBottom: '30px', display: 'block' }}
            />
          <ul className="liste" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
               <img 
              src="images/iteration-2-images/footer/icons/icon-1.png" 
              style={{ marginBottom: '30px', display: 'block' }}
            />
              <span className="adres-text">
                341 Londonderry Road,<br />
                İstanbul / Türkiye
              </span>
            </li>
            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
               <img 
              src="images/iteration-2-images/footer/icons/icon-2.png" 
              style={{ marginBottom: '30px', display: 'block' }}
            />
              <span className="adres-text">aciktim@teknolojikyemekler.com</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                 <img 
              src="images/iteration-2-images/footer/icons/icon-3.png" 
              style={{ marginBottom: '30px', display: 'block' }}
            />
              <span className="adres-text">+90 216 123 45 67</span>
            </li>
          </ul>
        </div>

        {/* hot menü */}
        <div className="hot-menu" style={{ flex: '1', minWidth: '200px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '25px', fontWeight: '600' }}>Hot Menu</h3>
          <ul style={{ listStyle: 'none', padding: '0', lineHeight: '2', color: '#FAF7F2' }}>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        {/* insta */}
        <div className="instagram-content" style={{ flex: '1', minWidth: '250px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '25px', fontWeight: '600' }}>Instagram</h3>
          <div className="instaFoto" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '10px',
            maxWidth: '300px'
          }}>
            {[0, 1, 2, 3, 4, 5].map((num) => (
              <img 
                key={num}
                src={`images/iteration-2-images/footer/insta/li-${num}.png`} 
                alt={`Instagram ${num}`}
                style={{ width: '100%', borderRadius: '5px' }}
              />
            ))}
          </div>
        </div>

      </div>
    </footer>
    <div className="alt-footer-wrapper" style={{ 
  backgroundColor: '#1A1A1A', 
  paddingBottom: '20px' 
}}>
  {/* çizgi */}
  <div className="cizgi" style={{ 
    borderTop: '1px solid #333', 
    width: '100%', 
    marginBottom: '20px' 
  }}></div>

  <div className="alt-footer-content" style={{ 
    maxWidth: '1200px', 
    margin: '0 auto', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: '0 20px'
  }}>
    <span style={{ 
      color: 'white', 
      fontSize: '14px', 
      opacity: '0.8',
      fontFamily: "'Barlow', sans-serif"
    }}>
      © 2023 Teknolojik Yemekler.
    </span>
    
    <img 
      src="images/iteration-2-images/twitterkusu.png" 
      alt="Twitter" 
      style={{ 
        width: '20px', 
        height: '20px', 
        objectFit: 'contain',
        cursor: 'pointer'
      }} 
    />
  </div>
</div>
  </>
  );
}  
export default Home;