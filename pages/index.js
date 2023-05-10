const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 50,
  initialSlide: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
let languageContent = {
  EN: {
    'nav-tutorial': 'Tutorial',
    'nav-about': 'About us',
    'nav-main': 'Main',
    'join-button': 'Join/Check',
    'join-button-2': 'Join/Check',
    'nav-support': 'Support',
    'header-login': 'Log in',
    'ownnit-ownnit': 'What is it Ownn.it ?',
    'ownnit-description':
      'OwnnIt brings trust, value, and transparency into authentic collections with irreversible ownership history exists on NFT + NFC + TON Blockchain',
    'ownnit-first':
      'Unique NFT Certificate. Each Ownnit TON Certificate is unique and traceable as the transaction history stays permanently on Blockchain along with the address of the creator, which cannot be counterfeited.',
    'ownnit-second':
      'Physical NFC Tag. NFC Owwnit is a physical NFC Tag that contains Owwnit TON Certificate. Each one comes with an encrypted serial number that is recorded on an internal server of|Ownnit.',
    'ownnit-third':
      'Decentralized Web App. Ownnit app is a decentralized web-based application that allows users to scan Ownnit NFC tags to inspect the contained TON Certificate. On the other hand, it lets collector create and insert NFT Certificate to a blank NFC Ownnit tag.',
    'advantages-title': 'Why Ownn.it?',
    'advantages-first': 'Protect Your Brand',
    'advantages-first-text':
      'The physical NFC Ownnit tag is impossible to replicate thanks to the protection of TON Blockcahain and highly encrypted serial number.',
    'advantages-second': 'Increase Product Value',
    'advantages-second-text':
      'Ownnit ensures each unit of your product is unique and authentic, as every single NFC Ownnit tag is unique and verified by TON Blockchain.',
    'advantages-third': 'Phydgital value',
    'advantages-third-text':
      'Ownnit is the key to the future thanks to its genuine and irreplicable essence. It brings great solutions to branding activities. It enables',
    'advantages-fourth': 'Proof Of Ownership',
    'advantages-fourth-text':
      'Owwnit is simply a Proof of Ownership that can be used to recognizes fake items. It is designed to encounter replication with a tight connection to NFT Certificate. Hence, legitimate collector and authentic manufacture can embed the throughout history of an item into Ownnit tag, especially the address of creator, which is the best clue for authenticity.',
    'how-it-works': 'How it works?',
    'our-partners': 'Our partners',
  },
  RU: {
    'nav-tutorial': 'Туториал',
    'nav-about': 'О нас',
    'nav-main': 'Главная',
    'join-button': 'Присоединиться/Проверить',
    'join-button-2': 'Присоединиться/Проверить',
    'nav-support': 'Поддержка',
    'header-login': 'Войти',
    'ownnit-ownnit': 'Что такое Ownn.it?',
    'ownnit-description':
      'Ownn.it привносит доверие, ценность и прозрачность в аутентичную коллекцию с необратимой историей владения, существующую на блокчейне NFT + NFC + TON',
    'ownnit-first':
      'Уникальный сертификат NFT. Каждый собственный сертификат на вязание уникален и его можно отследить, поскольку история транзакций постоянно хранится в блокчейне вместе с адресом создателя, который невозможно подделать.',
    'ownnit-second':
      'Физическая NFC-метка. NFC Ownnit - это физический NFC-тег, содержащий сертификат Ownnit TON. Каждый из них поставляется с зашифрованным серийным номером, который записан на внутреннем сервере |Ownnit.',
    'ownnit-third':
      'Децентрализованное веб-приложение. Приложение Onenote - это децентрализованное веб-приложение, которое позволяет пользователям сканировать собственные NFC-метки для проверки содержащегося в них сертификата TON. С другой стороны, это позволяет сборщику создавать и вставлять сертификат NFT в пустой тег NFC Ownnit.',
    'advantages-title': 'Почему Ownn.it?',
    'advantages-first': 'Защита вашего бренда',
    'advantages-first-text':
      'Физический тег NFC Ownit невозможно воспроизвести благодаря защите блокчейна TON и высокозашифрованному серийному номеру.',
    'advantages-second': 'Увеличьте ценность продукта',
    'advantages-second-text':
      'Ownnit гарантирует, что каждая единица вашего продукта уникальна и аутентична, поскольку каждая отдельная NFC-метка Ownit уникальна и проверена компанией TON Блокчейн.',
    'advantages-third': 'Физическая ценность',
    'advantages-third-text':
      'Владеть им - ключ к будущему благодаря его подлинной и незаменимой сути. Это дает отличные решения для брендинга деятельность. Это позволяет',
    'advantages-fourth': 'Подтверждение права собственности',
    'advantages-fourth-text':
      'Владеть - это просто подтверждение права собственности, которое может быть использовано для распознавания поддельные предметы. Он предназначен для того, чтобы сталкиваться с репликацией в условиях жесткой подключение к сертификату NFT. Следовательно, законный коллекционер и подлинное производство могут отразить всю историю предмета в тег Ownnit, особенно адрес создателя, который является лучшим ключом к аутентичности.',
    'how-it-works': 'Как это работает?',
    'our-partners': 'Наши партёры',
  },
  CH: {
    'nav-main': 'хз чет на китайском',
    'join-button-2': 'что-то на китайском',
  },
};
function swithcLang(lang) {
  for (let key in languageContent[lang]) {
    document.getElementById(key).innerHTML = languageContent[lang][key];
  }
  console.log(lang);
}
//было
// let buttonsLanguage = document.querySelectorAll('.footer__language');
// for (let buttonItem of buttonsLanguage) {
//   buttonItem.addEventListener('click', () => swithcLang(buttonItem.innerHTML));
// }
//стало
let containerButtons = document.querySelector('.footer__choose-language');
containerButtons.addEventListener('click', (event) => {
  swithcLang(event.target.innerHTML);
});
