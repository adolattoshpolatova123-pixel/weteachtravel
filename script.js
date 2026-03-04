document.getElementById("lang-uz").onclick = function () {
  alert("UZ ishladi");
};

document.getElementById("lang-en").onclick = function () {
  alert("EN ishladi");
};
document.getElementById("lang-uz").addEventListener("click", () => applyLanguage("uz"));
document.getElementById("lang-en").addEventListener("click", () => applyLanguage("en"));

 price_domestic_title: "Ichki turizm",
price_samarkand: "Samarqand",
price_bukhara: "Buxoro",
price_khiva: "Xiva",
price_chimgan: "Chimgan / Amirsoy",
price_zaamin: "Zaamin",

price_incoming_title: "Kirish turizmi",
price_russia: "Rossiya — Moskva",
price_kazakhstan: "Qozog‘iston — Olmaota",
price_turkey: "Turkiya — Istanbul",
price_uae: "BAA — Dubay",
price_korea: "Janubiy Koreya — Seul",
 price_domestic_title: "Domestic tourism",
price_samarkand: "Samarkand",
price_bukhara: "Bukhara",
price_khiva: "Khiva",
price_chimgan: "Chimgan / Amirsoy",
price_zaamin: "Zaamin",

price_incoming_title: "Inbound tourism",
price_russia: "Russia — Moscow",
price_kazakhstan: "Kazakhstan — Almaty",
price_turkey: "Turkey — Istanbul",
price_uae: "UAE — Dubai",
price_korea: "South Korea — Seoul",
const translations = {
  uz: {
    address: "Manzil: Toshkent shahri, Olmazor tumani Shifokorlar MFY Farobiy ko'chasi-494 uy",
    request_title: "So‘rov qoldiring",
    request_text: "Bu forma demo. Xohlasa keyin Telegram/WhatsApp link qilib beramiz.",
    send_btn: "Yuborish",
    name: "Ism",
    phone: "Telefon",
    message: "Qaysi yo‘nalish? (Kirish turizmi / Yuborish / Ichki) va sanalar..."
  },

  en: {
    address: "Address: Tashkent city, Olmazor district, Farobiy street 494",
    request_title: "Leave a request",
    request_text: "This form is a demo. Later we can connect it to Telegram or WhatsApp.",
    send_btn: "Send",
    name: "Name",
    phone: "Phone",
    message: "Which direction? (Inbound / Outbound / Domestic) and dates..."
  }
};

function applyLanguage(lang) {
  // oddiy matnlar (data-i18n)
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = translations?.[lang]?.[key];
    if (value !== undefined) el.innerText = value;
  });

  // input/textarea placeholder (data-i18n-placeholder)
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = translations?.[lang]?.[key];
    if (value !== undefined) el.placeholder = value;
  });

  localStorage.setItem("lang", lang);
}

// Tugmalar
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "uz";
  applyLanguage(saved);

  const uzBtn = document.getElementById("lang-uz");
  const enBtn = document.getElementById("lang-en");

  if (uzBtn) uzBtn.addEventListener("click", () => applyLanguage("uz"));
  if (enBtn) enBtn.addEventListener("click", () => applyLanguage("en"));
});

