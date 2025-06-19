document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        section.classList.add("visible");
      }
    });
  };

  // Додатковий виклик при завантаженні
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});

function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key] || el.textContent;
  });
  
  // інші елементи
  document.getElementById("aboutTitle").textContent = translations[lang].about_title;
  document.getElementById("aboutDesc").textContent = translations[lang].about_desc;
  document.getElementById("contactTitle").textContent = translations[lang].contact_title;
  document.querySelector("input[name='name']").placeholder = translations[lang].name_placeholder;
  document.querySelector("input[name='email']").placeholder = translations[lang].email_placeholder;
  document.querySelector("textarea[name='message']").placeholder = translations[lang].message_placeholder;
  document.querySelector("button[type='submit']").textContent = translations[lang].submit_button;
  const notes = document.querySelectorAll(".form-note");
  notes[0].textContent = translations[lang].form_note1;
  notes[1].innerHTML = translations[lang].form_note2;
  document.querySelector(".footer p").textContent = translations[lang].footer_text;
}

document.getElementById("langSelect").addEventListener("change", e => {
  translatePage(e.target.value);
});

// Включаємо анімацію та переклад після DOM ready
document.addEventListener("DOMContentLoaded", () => {
  translatePage("en");  // англійська за замовчуванням

  // скрол-анімація
  const sections = document.querySelectorAll("section");
  const revealOnScroll = () => {
    const h = window.innerHeight;
    sections.forEach(s => {
      if (s.getBoundingClientRect().top < h - 100) s.classList.add("visible");
    });
  };
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});

const translations = {
  en: {
    logo: "ALTSETING Partner",
    about_title: "About ALTSETING Token",
    about_desc: "ALTSETING is an innovative platform enabling businesses to create their own digital currency based on ALTSETING Token technology.",
    mission_title: "Our mission",
    mission_desc: "Empower businesses and startups to reach new levels by introducing token economy, new payment models, and digital customer interaction.",
    // ... інші ключі
    contact_title: "Submit Your Business Project",
    name_placeholder: "Your name",
    email_placeholder: "Email",
    message_placeholder: "Briefly describe your business or idea",
    submit_button: "Send Application",
    form_note1: "After review we will send confirmation to your email.",
    form_note2: "After confirmation we will publish your project on our site, integrate ALTST token payments into your business or service and create a personal cryptocurrency for your clients to use for payments. All details will be sent to your email. In case of additional questions or unclear situations, please contact the administrator via Telegram.",
    footer_text: "© 2025 PartnerHub. All rights reserved."
  },
  uk: {
    logo: "ALTSETING Partner",
    about_title: "Про проєкт ALTSETING Token",
    about_desc: "ALTSETING — це інноваційна платформа, яка надає бізнесам та проєктам можливість створювати власну цифрову валюту на базі технології ALTSETING Token.",
    mission_title: "Місія проєкту",
    mission_desc: "Допомогти бізнесам та стартапам виходити на новий рівень через впровадження токен-економіки, нових моделей оплати та цифрової взаємодії з клієнтами.",
    contact_title: "Надішліть свій бізнес-проєкт",
    name_placeholder: "Ваше ім’я",
    email_placeholder: "Email",
    message_placeholder: "Опишіть коротко ваш бізнес або ідею",
    submit_button: "Надіслати заявку",
    form_note1: "Після розгляду ми надішлемо підтвердження на вашу пошту.",
    form_note2: "Після підтвердження ми опублікуємо ваш проєкт на нашому сайті, інтегруємо оплату в токенах ALTST у ваш бізнес або сервіс і створимо для вас особисту криптовалюту, яку зможуть використовувати ваші клієнти для оплати. Всі деталі буде надіслано на вашу електронну адресу. Якщо у вас є питання або щось незрозуміло, будь ласка, звертайтесь до адміністратора в Telegram.",
    footer_text: "© 2025 PartnerHub. Всі права захищені."
  },
  pl: {
    logo: "ALTSETING Partner",
    about_title: "O projekcie ALTSETING Token",
    about_desc: "ALTSETING to innowacyjna platforma umożliwiająca firmom tworzenie własnej waluty cyfrowej w oparciu o technologię ALTSETING Token.",
    mission_title: "Misja projektu",
    mission_desc: "Pomagamy firmom i startupom osiągać wyższy poziom dzięki wdrożeniu ekonomii tokenów, nowych modeli płatności i cyfrowej interakcji z klientami.",
    contact_title: "Prześlij swój projekt biznesowy",
    name_placeholder: "Twoje imię",
    email_placeholder: "Email",
    message_placeholder: "Opisz krótko swój biznes lub pomysł",
    submit_button: "Wyślij zgłoszenie",
    form_note1: "Po przejrzeniu wyślemy potwierdzenie na Twój email.",
    form_note2: "Po potwierdzeniu opublikujemy Twój projekt na naszej stronie, zintegrujemy płatności w tokenach ALTST z Twoją firmą lub usługą i stworzymy dla Ciebie osobistą kryptowalutę, z której Twoi klienci będą mogli korzystać. Wszystkie szczegóły zostaną przesłane na Twój adres email. W razie dodatkowych pytań lub niejasnych sytuacji, skontaktuj się z administratorem przez Telegram.",
    footer_text: "© 2025 PartnerHub. Wszelkie prawa zastrzeżone."
  },
  es: {
  logo: "Socio de ALTSETING",
  about_title: "Sobre el proyecto ALTSETING Token",
  about_desc: "ALTSETING es una plataforma innovadora que permite a las empresas crear su propia moneda digital basada en la tecnología ALTSETING Token.",
  mission_title: "Nuestra misión",
  mission_desc: "Ayudamos a las empresas y startups a crecer mediante la implementación de la economía de tokens, nuevos modelos de pago y una interacción digital con los clientes.",
  contact_title: "Envía tu proyecto empresarial",
  name_placeholder: "Tu nombre",
  email_placeholder: "Correo electrónico",
  message_placeholder: "Describe brevemente tu empresa o idea",
  submit_button: "Enviar solicitud",
  form_note1: "Tras revisar tu solicitud, te enviaremos una confirmación por correo electrónico.",
  form_note2: "Una vez confirmado, publicaremos tu proyecto en nuestro sitio, integraremos pagos en tokens ALTST y crearemos tu criptomoneda personalizada. Todos los detalles se enviarán por correo. Para dudas, contacta al administrador por Telegram.",
  footer_text: "© 2025 PartnerHub. Todos los derechos reservados."
},
  ru: {
  logo: "Партнёр ALTSETING",
  about_title: "О проекте ALTSETING Token",
  about_desc: "ALTSETING — это инновационная платформа, позволяющая компаниям создавать собственную цифровую валюту на базе технологии ALTSETING Token.",
  mission_title: "Миссия проекта",
  mission_desc: "Помогаем бизнесу и стартапам достигать нового уровня через токен-экономику, новые модели оплаты и цифровое взаимодействие с клиентами.",
  contact_title: "Отправьте ваш бизнес-проект",
  name_placeholder: "Ваше имя",
  email_placeholder: "Электронная почта",
  message_placeholder: "Кратко опишите бизнес или идею",
  submit_button: "Отправить заявку",
  form_note1: "После рассмотрения мы отправим подтверждение на ваш email.",
  form_note2: "После подтверждения мы опубликуем ваш проект, интегрируем оплату в токенах ALTST и создадим персональную криптовалюту. Все детали будут высланы на почту. В случае вопросов — пишите администратору в Telegram.",
  footer_text: "© 2025 PartnerHub. Все права защищены."
}


};

