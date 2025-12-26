const translations = {
  kz:{
    club:"Клуб философиясы",
    clubText:"Black Eagles FC — тәртіп, күш және жеңіске деген аштық.",
    squad:"Негізгі құрам",
    matches:"Алдағы матчтар",
    tickets:"Билет сату",
    shop:"Клуб магазині",
    buy:"Сатып алу",
    elite:"ELITE FOOTBALL CLUB"
  },
  en:{
    club:"Club Philosophy",
    clubText:"Black Eagles FC is discipline, power and hunger for victory.",
    squad:"Squad",
    matches:"Matches",
    tickets:"Ticket Sales",
    shop:"Club Store",
    buy:"Buy",
    elite:"ELITE FOOTBALL CLUB"
  },
  ru:{
    club:"Философия клуба",
    clubText:"Black Eagles FC — дисциплина, сила и жажда побед.",
    squad:"Состав",
    matches:"Матчи",
    tickets:"Продажа билетов",
    shop:"Магазин",
    buy:"Купить",
    elite:"ЭЛИТНЫЙ ФУТБОЛЬНЫЙ КЛУБ"
  }
};

function setLang(lang){
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.innerText = translations[lang][el.dataset.key];
  });
}

function order(item){
  window.open(`https://wa.me/77777777777?text=${encodeURIComponent(
    "Сәлеметсіз бе! "+item+" сатып алғым келеді."
  )}`);
}

function buyTicket(match,price){
  window.open(`https://wa.me/77777777777?text=${encodeURIComponent(
    "🎟 Билет алу\nМатч: "+match+"\nБағасы: "+price+" ₸"
  )}`);
}
