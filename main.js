// Genel değişkenler
let checklist = document.querySelector(".checklist");

class Adim {
    constructor(adim, detay) {
      this.adim = adim;
      this.detay = detay;
    }
  }
// Adimlar
let adimlar = [
    new Adim("Düzgün kullanıcı adı 🤪", 
    "Evet , kullanıcı adın isim soyisim içermesi seni daha profesyonel gösterecektir. Bu tercihine göre değişir markalaştırdığın bir takma adın var ise onu kullanabilirsin tabiki ama istisnalar kaideyi bozmaz.<br> <b>Örnek vermek gerekirse ;</b> <br> ✅ alicangunduz <br> ✅ ali_can_gunduz <br> ❌ crazyBoy_06  <details> <summary> Nasıl yaparım ? </summary> GitHub hesabınıza giriş yapın > Sağ üstte avatarınıza tıklayın. >Settings (Ayaları açın) > Sol menüde Account (Hesap) > Change username butonuna tıklayın > Değiştirmek istediğinizi kabul edin > Yeni kullanıcı adınızı girin. </details> "),
    new Adim("Profil fotoğrafı 😎", 
    "Yüzününüz net gözüktüğü bir fotoğraf olmasına dikkat etmelisiniz , logonuz yoksa logonuz yüzünüzdür. Net olması , belirli bir mesafeden çekilmiş olması önemlidir. <br> <b>Örnek vermek gerekirse ;</b> <br> ✅ <img src='https://avatars.githubusercontent.com/u/54004830?s=96&v=4' width='100px' height='100px'> <br> ❌ <img src='https://avatars.githubusercontent.com/u/76800000?v=4' width='100px' height='100px'> <details> <summary> Nasıl yaparım ? </summary> GitHub hesabınıza giriş yapın > Sağ üstte avatarınıza tıklayın. >Settings (Ayaları açın) > Profile (Profil) > Profile picture (Profil fotoğrafı) > Upload new picture (Yeni fotoğraf yükle) > Fotoğrafınızı seçin > Save changes (Değişiklikleri kaydet) </details>"),
    new Adim("Biografiniz 📝",
    "Profilinizde biografinize ilgilendiğin alanı veya bir işte çalışacak olsaydınız yapacağınız işin başlığını yazın. Bu sayede iş vermek isteyen biri sizi daha kolay bulabilir. <br> <b>Örnek vermek gerekirse ;</b> <br> ✅ Web Developer <br> ❌ [Boş] <details> <summary> Nasıl yaparım ? </summary> GitHub hesabınıza giriş yapın > Sağ üstte avatarınıza tıklayın. >Settings (Ayaları açın) > Profile (Profil) > Bio (Biografi) > Biografinizi yazın > Upload profile (Profili güncelle) </details>"),
    new Adim("Konumunuz 📍",
    "Profilinizde çalışmak istediğiniz konuma mutlaka yer verin. <br> <b>Örnek vermek gerekirse ;</b> <br> ✅ Ankara <br> ❌ [Boş] <br> Eğer il bağımsız iş tekliflerine açıkasınız Turkey yazabilirsiniz. Çalışmak istediğiniz Şehiri paylaşın. <details> <summary> Nasıl yaparım ? </summary> GitHub hesabınıza giriş yapın > Sağ üstte avatarınıza tıklayın. >Settings (Ayaları açın) > Profile (Profil) > Location (Konum) > Konumunuzu yazın > Upload profile (Profili güncelle) </details>"),
    new Adim("Eposta adresiniz 📧",
    "Eposta adresinizi eklemeniz size ulaşılması açısından çok kritik önem arz etmektedir. Freelance iş teklifleri feedback gibi konular için iş veren veya başka geliştiriciler size ulaşmak isteyebilir. <br> <b>Örnek vermek gerekirse ;</b> <br> ✅ hi@alicangunduz.dev <br> ❌ [Boş] <details> <summary> Nasıl yaparım ? </summary> GitHub hesabınıza giriş yapın > Sağ üstte avatarınıza tıklayın. >Settings (Ayaları açın) > Profile (Profil) > Public Email (Görünecek Eposta) > Eposta adresinizi seçin > Upload profile (Profili güncelle) <br><br> Bu alanla kayıt olduğunuz eposta adresi gözükür. Profesyonel bir eposta hesabınızı göstermek için onuda github hesabınıza ekleyip onaylamanız gerekmektedir. </details>"),
    new Adim("Diğer linkleriniz 🔗",
    "Diğer sosyal medya hesaplarınızı ekleyin. <br> <b>Örnek vermek gerekirse ;</b> <br> ✅ <a href='https://www.linkedin.com/in/alicangunduzdev/'>LinkedIn</a> <br> ❌ [Boş] <details> <summary> Nasıl yaparım ? </summary> GitHub hesabınıza giriş yapın > Sağ üstte avatarınıza tıklayın. >Settings (Ayaları açın) > Profile (Profil) > Website (Web Sitesi) & Social accounts (Sosyal medya hesapları) > Web sitesi alanına istediğiniz linki ekleyin > Upload profile (Profili güncelle)</details> <details style='margin-top: 5px'> <summary>Trick</summary> Bento.me gibi alternatfilere yönelirseniz tek link ile herşeyi çözersiniz. Bu linki her yerde kullanabilirsiniz.<br> İlgili site : <a href='https://bento.me'>Bento.me</a> <br> Örnek benim bento linkim <a href='https://bento.me/alicangunuddz'>bento.me/alicangunduz</a> </details>"),
    new Adim("Read.me dosyanız 📄",
    "Readme dosyanızı oluşturalım. Bu dosya sizin hakkınızda bilgi veren bir dosyadır. <br> <b>Örnek vermek gerekirse ;</b> <br> ✅ <img src='https://i.hizliresim.com/hk55msv.jpg' style='max-width: 100%; max-height: 100%;'> <br> ❌ [Boş] <details> <summary> Nasıl yaparım ? </summary> GitHub hesabınıza giriş yapın > Sağ üstte avatarınıza tıklayın. >Repositories (Depolar) > New (Yeni) > Repository name (Depo adı) > read-me-olustur  (Depo adınız kullanıcı adınızla aynı olmalıdır.)> Create repository (Depoyu oluştur) > Create new file (Yeni dosya oluştur) > File name (Dosya adı) > README.md > Commit new file (Dosyayı kaydet) </details> <details style='margin-top: 5px'> <summary>Trick</summary> Bu dosya markdown ile çalışmaktadır hızlıca düzenlemenin basit yolları vardır. <br> <a href='https://rahuldkjain.github.io/gh-profile-readme-generator/'>Hızlı oluşturucu</a> <br> Bu oluşturucu ile oluşturup size verdiği markdown kodunu reponuzu düzenlereyerek tamamını silip yapıştırabilirsiniz. </details>"),
];



// Adimlari listeleme
function adimlariListele() {
    checklist.insertAdjacentHTML(
        "beforeend",
        `${adimlar
            .map(
                (adim, index) =>
                    `<div class="item" id="item${index}">
            <label for="adim${index}">${adim.adim}</label>
            <button class="details-button" id="${index}">Detaylar</button>
            <div class="details" id="detay${index}">
              <p>${adim.detay}</p>
            </div>
          </div>`
            )
            .join("")}`
    );
}
// Adimlari listeleme çağırma
adimlariListele()

// Listenin son elemanının borderBottom kaldırma
let sonItem = document.querySelector(`#item${adimlar.length - 1}`)
sonItem.style.borderBottom = "0px solid #ccc"


// Detay butonuna tiklandiginda detaylari gosterme
let detayButonlari = document.querySelectorAll(".details-button");
detayButonlari.forEach((detayButonu) => {
    detayButonu.addEventListener("click", (e) => {
        let id = e.target.id
        let detay = document.querySelector(`#detay${id}`)
        if (detay.style.display === "block") { // detaylar aciksa kapat
            detay.style.display = "none";
            if (id == adimlar.length - 1) { // son eleman ise borderBottom kaldır
                let item = document.querySelector(`#item${id}`)
                item.style.marginBottom = "0px"
                item.style.borderBottom = "0px solid #ccc"
            }
            else { // son eleman degilse borderBottom ekle
                let item = document.querySelector(`#item${id}`)
                item.style.marginBottom = "0px"
                item.style.borderBottom = "1px solid #ccc"
            }
            let sonrakiItem = document.querySelector(`#item${parseInt(id) + 1}`)
            sonrakiItem.style.borderTop = "0px solid #ccc"
        }
        else { // detaylar kapaliysa ac
            detaylariGoster(id)
        }

    });
});


// Detaylari gösterme
function detaylariGoster(id) {
    let detay = document.querySelector(`#detay${id}`)
    detay.style.display = "block"
    let detayUzunluk = detay.offsetHeight // detayın uzunluğunu al
    let item = document.querySelector(`#item${id}`)
    item.style.marginBottom = `${detayUzunluk + 20}px` // itemın margin bottomunu detayın uzunluğu kadar arttır
    item.style.borderBottom = "0px solid #ccc"

}

// Detay alanındaki içerik değişir ve uzunluğu artarsa alt itemin margin bottomu artar
let detaylar = document.querySelectorAll(".details")
detaylar.forEach((detay) => {
    detay.addEventListener("DOMSubtreeModified", () => {
        let id = detay.id.slice(5)
        let detayUzunluk = detay.offsetHeight
        let item = document.querySelector(`#item${id}`)
        item.style.marginBottom = `${detayUzunluk + 20}px`
    });
})