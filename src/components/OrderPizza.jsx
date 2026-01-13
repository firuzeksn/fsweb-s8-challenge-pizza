import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const malzemeListesi = [
  "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", 
  "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", 
  "Sarımsak", "Biber", "Ananas", "Kabak"
];

const OrderPizza = ({ setOrderResponse }) => {
  const history = useHistory();

  const [form, setForm] = useState({
    isim: "",
    boyut: "",
    hamur: "",
    malzemeler: [],
    not: ""
  });
  const [isValid, setIsValid] = useState(false);
  const [count, setCount] = useState(1);

  const pizzaTabanFiyat = 85.50;
  const malzemeBirimFiyat = 5.00;
  const secimlerToplami = form.malzemeler.length * malzemeBirimFiyat;
  const toplamFiyat = (pizzaTabanFiyat + secimlerToplami) * count;

  useEffect(() => {
    const isimGecerli = form.isim.trim().length >= 3;
    const malzemelerGecerli = form.malzemeler.length >= 4 && form.malzemeler.length <= 10;
    const boyutGecerli = form.boyut !== "";
    const hamurGecerli = form.hamur !== "";
    setIsValid(isimGecerli && malzemelerGecerli && boyutGecerli && hamurGecerli);
  }, [form]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const yeniMalzemeler = checked 
        ? [...form.malzemeler, value] 
        : form.malzemeler.filter(m => m !== value);
      setForm({ ...form, malzemeler: yeniMalzemeler });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    const payload = { ...form, toplamFiyat: toplamFiyat.toFixed(2) };

    axios.post("https://reqres.in/api/pizza", payload, {
      headers: { 'x-api-key': 'reqres-free-v1' } 
    })
    .then(res => {
      console.log("Sipariş Başarılı:", res.data);
      setOrderResponse(res.data); 
      history.push("/success"); 
    })
    .catch(err => {
      console.error("Sipariş Hatası:", err);
      alert("Sipariş verilirken bir hata oluştu. Lütfen tekrar deneyin.");
    })
  };
  return (
    <div className="order-pizza-page" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', fontFamily: "'Barlow', sans-serif" }}>
      
      <header style={{ backgroundColor: '#CE2829', padding: '40px 0', textAlign: 'center' }}>
        <img src="images/iteration-1-images/logo.svg" alt="Logo" />
      </header>

      <div style={{ backgroundColor: '#FAF7F2' }}>
        <img src="images/iteration-2-images/pictures/form-banner.png" style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }} />
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <p style={{ color: '#5f5f5f', fontSize: '14px' }}>
              Anasayfa - Seçenekler - <span style={{ color: '#CE2829', fontWeight: 'bold' }}>Sipariş Oluştur</span>
            </p>
                   <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontWeight: '600', fontSize: '22px', marginBottom: '15px' }}>Position Absolute Acı Pizza</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{pizzaTabanFiyat.toFixed(2)}₺</span>
            <div style={{ color: '#5f5f5f', display: 'flex', gap: '40px' }}>
              <span>4.9</span>
              <span>(200)</span>
            </div>
          </div>
          <p style={{ color: '#5f5f5f', lineHeight: '1.6', marginTop: '20px', fontSize: '15px' }}>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
            Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, 
            daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, 
            genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan 
            İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
          </p>
        </section>
        </div>
      </div>

      <main style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Boyut Seç <span style={{color:'#CE2829'}}>*</span></h3>
              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                {["S", "M", "L"].map(b => (
                  <label key={b} style={{
                    width: '45px', height: '45px', borderRadius: '50%', backgroundColor: form.boyut === b ? '#FDC913' : '#FAF7F2',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 'bold'
                  }}>
                    <input type="radio" name="boyut" value={b} onChange={handleChange} style={{ display: 'none' }} /> {b}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Hamur Seç <span style={{color:'#CE2829'}}>*</span></h3>
              <select name="hamur" value={form.hamur} onChange={handleChange} 
                style={{ width: '100%', padding: '12px', marginTop: '15px', border: '1px solid #E2E2E2', borderRadius: '5px', backgroundColor: '#FAF7F2' }}>
                <option value="" disabled>—Hamur Kalınlığı Seç—</option>
                <option value="ince">İnce</option>
                <option value="normal">Normal</option>
                <option value="kalin">Kalın</option>
              </select>
            </div>
          </div>

          <section style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Ek Malzemeler</h3>
            <p style={{ fontSize: '14px', color: '#5f5f5f', margin: '10px 0' }}>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
              {malzemeListesi.map(m => (
                <label key={m} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontWeight: '500' }}>
                  <div style={{
                    width: '45px', height: '45px', borderRadius: '6px', backgroundColor: form.malzemeler.includes(m) ? '#FDC913' : '#FAF7F2',
                    border: '1px solid #E2E2E2', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {form.malzemeler.includes(m) && "✓"}
                  </div>
                  <input type="checkbox" value={m} onChange={handleChange} style={{ display: 'none' }} 
                    disabled={form.malzemeler.length >= 10 && !form.malzemeler.includes(m)} />
                  {m}
                </label>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600' }}>İsim <span style={{color:'#CE2829'}}>*</span></h3>
            <input name="isim" value={form.isim} onChange={handleChange} placeholder="Adınızı giriniz" 
              style={{ width: '100%', padding: '15px', border: '1px solid #E2E2E2', borderRadius: '5px', backgroundColor: '#FAF7F2', marginTop: '10px' }} />
            
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '20px' }}>Sipariş Notu</h3>
            <textarea name="not" value={form.not} onChange={handleChange} placeholder="Siparişine eklemek istediğin bir not var mı?" 
              style={{ width: '100%', height: '80px', padding: '15px', border: '1px solid #E2E2E2', borderRadius: '5px', backgroundColor: '#FAF7F2', marginTop: '10px' }} />
          </section>

          <hr style={{ border: '0.5px solid #E2E2E2', marginBottom: '40px' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex' }}>
              <button type="button" onClick={() => setCount(Math.max(1, count - 1))} style={{ width: '45px', height: '45px', backgroundColor: '#FDC913', border: 'none', borderRadius: '5px 0 0 5px', cursor: 'pointer', fontWeight: 'bold' }}>-</button>
              <div style={{ width: '45px', height: '45px', border: '1px solid #E2E2E2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{count}</div>
              <button type="button" onClick={() => setCount(count + 1)} style={{ width: '45px', height: '45px', backgroundColor: '#FDC913', border: 'none', borderRadius: '0 5px 5px 0', cursor: 'pointer', fontWeight: 'bold' }}>+</button>
            </div>

            <div style={{ width: '300px', border: '1px solid #E2E2E2', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ padding: '20px' }}>
                <h4 style={{ margin: '0 0 15px 0' }}>Sipariş Toplamı</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#5f5f5f' }}>
                  <span>Seçimler</span>
                  <span>{secimlerToplami.toFixed(2)}₺</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#CE2829', fontWeight: 'bold', marginTop: '10px' }}>
                  <span>Toplam</span>
                  <span>{toplamFiyat.toFixed(2)}₺</span>
                </div>
              </div>
              <button type="submit" disabled={!isValid} style={{ 
                backgroundColor: isValid ? '#FDC913' : '#ccc', width: '100%', padding: '15px', border: 'none', fontWeight: 'bold', cursor: isValid ? 'pointer' : 'not-allowed'
              }}>
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </form>
      </main>

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
    </div>
  );
};

export default OrderPizza;

