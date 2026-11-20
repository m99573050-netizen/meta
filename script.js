/**
 * ==============================================================================
 * META IT SCHOOL — OFFICIAL JAVASCRIPT
 * Professional IT Education Platform Core Engine
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------------------------
   * 1. DATABASE / CONFIGURATION (COURSES, MENTORS, EVENTS, PORTFOLIO, NEWS)
   * All prices, durations, and syllabi can easily be updated here.
   * ---------------------------------------------------------------------------- */

  const coursesData = [
    {
      id: 'fron',
      category: 'dev',
      name: 'Frontend dasturlash',
      name_ru: 'Frontend разработка',
      name_en: 'Frontend Web Development',
      price: 480000,
      priceFormatted: '480 000 so‘m / oy',
      duration: '6 oy',
      duration_ru: '6 месяцев',
      duration_en: '6 months',
      hoursPerWeek: '12 soat (3 kun dars + 3 kun amaliyot)',
      image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&w=900&q=80',
      description: 'Zamonaviy veb-saytlar va interaktiv veb-ilovalarni noldan professional darajagacha yaratishni o‘rganing.',
      description_ru: 'Создание современных адаптивных веб-сайтов и веб-приложений с нуля до уровня Junior.',
      description_en: 'Build modern responsive websites and interactive web applications from scratch.',
      badge: 'Eng Ommabop',
      topics: [
        'HTML5 semantikasi',
        'CSS3 va Flexbox/Grid',
        'JavaScript (ES6+)',
        'Responsive Web Design',
        'Website yaratish',
        'Git & GitHub amaliyoti',
        'Real Portfolio Loyihalari'
      ]
    },
    {
      id: 'backend',
      category: 'dev',
      name: 'Backend dasturlash',
      name_ru: 'Backend разработка',
      name_en: 'Backend Web Development',
      price: 480000,
      priceFormatted: '480 000 so‘m / oy',
      duration: '6 oy',
      duration_ru: '6 месяцев',
      duration_en: '6 months',
      hoursPerWeek: '12 soat (3 kun dars + 3 kun amaliyot)',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
      description: 'Serverlar, mustahkam ma\'lumotlar bazasi arxitekturasi va xavfsiz RESTful APIlar ishlab chiqish.',
      description_ru: 'Разработка серверной части веб-приложений, баз данных и защищенных RESTful API.',
      description_en: 'Build secure servers, scalable database architectures, and production-ready APIs.',
      badge: 'Karyera Yulduzi',
      topics: [
        'Backend asoslari',
        'Server bilan ishlash',
        'Ma\'lumotlar bazasi (SQL / NoSQL)',
        'RESTful API yaratish',
        'Autentifikatsiya & Xavfsizlik',
        'Serverga yuklash (Deploy)',
        'Dasturlash amaliyoti'
      ]
    },
    {
      id: 'english',
      category: 'lang',
      name: 'Ingliz tili (IT uchun)',
      name_ru: 'Английский язык (для IT)',
      name_en: 'English for Tech & IT',
      price: 350000,
      priceFormatted: '350 000 so‘m / oy',
      duration: '6 oy',
      duration_ru: '6 месяцев',
      duration_en: '6 months',
      hoursPerWeek: '12 soat (3 kun dars + 3 kun amaliyot)',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
      description: 'Xalqaro IT bozoriga chiqish, intervyulardan muvaffaqiyatli o‘tish va texnik hujjatlarni erkin o‘qish.',
      description_ru: 'Уверенное владение английским языком для работы с зарубежными IT компаниями и документацией.',
      description_en: 'Master technical and conversational English for international IT career and documentation.',
      badge: 'Maxsus Narx',
      topics: [
        'Grammar (Grammatika)',
        'Speaking & Fluency',
        'Listening amaliyoti',
        'Reading & Tech Docs',
        'Technical Writing',
        'IT Vocabulary',
        'Mock Intervyular'
      ]
    },
    {
      id: 'robotics',
      category: 'tech',
      name: 'Robototexnika & Arduino',
      name_ru: 'Робототехника и Arduino',
      name_en: 'Robotics & Arduino Engineering',
      price: 480000,
      priceFormatted: '480 000 so‘m / oy',
      duration: '5 oy',
      duration_ru: '5 месяцев',
      duration_en: '5 months',
      hoursPerWeek: '12 soat (3 kun dars + 3 kun amaliyot)',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
      description: 'Elektronika, sensorlar, mikrokontrollerlar va aqlli robot qurilmalarini o‘z qo‘lingiz bilan yasang.',
      description_ru: 'Создание роботов, схемотехника, работа с датчиками и программирование микроконтроллеров Arduino.',
      description_en: 'Build and code autonomous robots, smart sensors, and microcontrollers hands-on.',
      badge: 'Innovatsion',
      topics: [
        'Robotlar bilan ishlash',
        'Elektronika asoslari',
        'Sensorlar va modullar',
        'Arduino platformasi',
        'Robot yig‘ish (hardware)',
        'C/C++ dasturlash asoslari',
        'Amaliy loyihalar'
      ]
    },
    {
      id: 'cybersecurity',
      category: 'tech',
      name: 'Kiberxavfsizlik',
      name_ru: 'Кибербезопасность',
      name_en: 'Cybersecurity & Ethical Hacking',
      price: 480000,
      priceFormatted: '480 000 so‘m / oy',
      duration: '5 oy',
      duration_ru: '5 месяцев',
      duration_en: '5 months',
      hoursPerWeek: '12 soat (3 kun dars + 3 kun amaliyot)',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
      description: 'Tizimlar, tarmoqlar va ma\'lumotlarni kiberhujumlardan himoya qilishning xalqaro usullari.',
      description_ru: 'Защита информационных систем, обнаружение уязвимостей и основы этичного хакинга.',
      description_en: 'Learn network protection, defense against cyber threats, cryptography, and ethical hacking.',
      badge: 'Talabgir Kasb',
      topics: [
        'Internet xavfsizligi',
        'Axborot xavfsizligi qoidalari',
        'Parollar va shifrlash himoyasi',
        'Tarmoq xavfsizligi (Firewall)',
        'Ethical Hacking asoslari',
        'Zaifliklarni tahlil qilish',
        'Lab amaliyotlari'
      ]
    },
    {
      id: 'informatics',
      category: 'office',
      name: 'Informatika (Kompyuter Savodxonligi)',
      name_ru: 'Информатика и основы ПК',
      name_en: 'Computer Literacy & Informatics',
      price: 480000,
      priceFormatted: '480 000 so‘m / oy',
      duration: '2 oy',
      duration_ru: '2 месяца',
      duration_en: '2 months',
      hoursPerWeek: '12 soat (3 kun dars + 3 kun amaliyot)',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80',
      description: 'Kompyuterdan foydalanishni noldan boshlab, professional darajaga chiqish uchun poydevor kurs.',
      description_ru: 'Базовый фундаментальный курс компьютерной грамотности для детей и взрослых.',
      description_en: 'Master computer fundamentals, operating systems, file systems, and safe internet usage.',
      badge: 'Boshlovchilar Uchun',
      topics: [
        'Kompyuter savodxonligi',
        'Kompyuter qurilmalari va texnikasi',
        'Operatsion tizimlar (Windows/Linux)',
        'Fayllar va papkalar bilan ishlash',
        'Tezkor yozish (klaviatura trenajori)',
        'Internetdan to‘g‘ri va xavfsiz foydalanish',
        'Boshlang‘ich amaliy vazifalar'
      ]
    },
    {
      id: 'word',
      category: 'office',
      name: 'Microsoft Word Professional',
      name_ru: 'Microsoft Word Профессионал',
      name_en: 'Microsoft Word Professional',
      price: 480000,
      priceFormatted: '480 000 so‘m / oy',
      duration: '2 oy',
      duration_ru: '2 месяца',
      duration_en: '2 months',
      hoursPerWeek: '12 soat (3 kun dars + 3 kun amaliyot)',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
      description: 'Har qanday murakkablikdagi rasmiy hujjatlar, hisobotlar va kitoblar tayyorlash mahorati.',
      description_ru: 'Профессиональное оформление деловой документации, стили, таблицы и автосодержание.',
      description_en: 'Master professional document formatting, styling, official letterheads, and typography.',
      badge: 'Muhim Ko‘nikma',
      topics: [
        'Hujjat tayyorlash va andozalar',
        'Matn formatlash va stillar',
        'Jadval yaratish va dizayn',
        'Grafik obyektlar va diagrammalar',
        'Mundarija va avtomatlashtirish',
        'Professional hujjatlar aylanishi',
        'Amaliy ofis loyihalari'
      ]
    },
    {
      id: 'excel',
      category: 'office',
      name: 'Microsoft Excel & Data Analysis',
      name_ru: 'Microsoft Excel и анализ данных',
      name_en: 'Microsoft Excel & Data Analysis',
      price: 480000,
      priceFormatted: '480 000 so‘m / oy',
      duration: '2 oy',
      duration_ru: '2 месяца',
      duration_en: '2 months',
      hoursPerWeek: '12 soat (3 kun dars + 3 kun amaliyot)',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
      description: 'Formulalar, funksiyalar, Pivot jadvallar va vizual diagrammalar bilan biznes ma\'lumotlarini tahlil qiling.',
      description_ru: 'Формулы, функции, сводные таблицы и диаграммы для эффективного анализа данных.',
      description_en: 'Advanced formulas, functions, pivot tables, and visualization for modern data analysis.',
      badge: 'Biznes Vosita',
      topics: [
        'Murakkab jadvallar yaratish',
        'Formulalar va hisob-kitoblar',
        'Mantiqiy va qidiruv funksiyalari (VLOOKUP, XLOOKUP)',
        'Dinamik diagrammalar yaratish',
        'Pivot Table (Svodnie tablitsy)',
        'Ma\'lumotlarni tahlil qilish',
        'Moliyaviy hisobot loyihalari'
      ]
    }
  ];

  /* ----------------------------------------------------------------------------
   * 2. COMPETITIONS DATA (8 CONTESTS REQUIRED BY PROMPT)
   * All events clearly indicated as demo/sample events.
   * ---------------------------------------------------------------------------- */
  const competitionsData = [
    {
      id: 'prog-comp',
      title: 'Programming Competition',
      date: '2025-04-15',
      dateFormatted: '15-aprel, 2025 (Namunaviy)',
      status: 'open',
      statusText: 'Ro\'yxatga olish ochiq',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=80',
      description: 'Algoritmik masalalar va dasturlash tezligi bo‘yicha maktab o‘quvchilari o‘rtasidagi yillik katta musobaqa.'
    },
    {
      id: 'front-chal',
      title: 'Frontend Challenge',
      date: '2025-05-10',
      dateFormatted: '10-may, 2025 (Namunaviy)',
      status: 'open',
      statusText: 'Ro\'yxatga olish ochiq',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=700&q=80',
      description: '24 soat ichida berilgan Figma dizayn asosida eng chiroyli, interaktiv va responsive vebsayt yaratish musobaqasi.'
    },
    {
      id: 'robot-comp',
      title: 'Robototexnika musobaqasi',
      date: '2025-05-25',
      dateFormatted: '25-may, 2025 (Namunaviy)',
      status: 'upcoming',
      statusText: 'Yaqinda boshlanadi',
      image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=700&q=80',
      description: 'O‘z qo‘llari bilan yasalgan robotlar poygasi va to‘siqlarni avtonom yengib o‘tish amaliy bellashuvi.'
    },
    {
      id: 'eng-speak',
      title: 'English Speaking Contest',
      date: '2025-06-05',
      dateFormatted: '5-iyun, 2025 (Namunaviy)',
      status: 'open',
      statusText: 'Ro\'yxatga olish ochiq',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=700&q=80',
      description: 'IT mavzularida ingliz tilida nutq so‘zlash va o‘z startap g‘oyalarini xorijiy tilda himoya qilish tanlovi.'
    },
    {
      id: 'cyber-chal',
      title: 'Cybersecurity Challenge (CTF)',
      date: '2025-06-20',
      dateFormatted: '20-iyun, 2025 (Namunaviy)',
      status: 'upcoming',
      statusText: 'Yaqinda boshlanadi',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80',
      description: 'Kriptografiya, tarmoq xavfsizligi va qidiruv topshiriqlarini o‘z ichiga olgan Capture The Flag (CTF) turniri.'
    },
    {
      id: 'info-olymp',
      title: 'Informatika olimpiadasi',
      date: '2025-07-02',
      dateFormatted: '2-iyul, 2025 (Namunaviy)',
      status: 'upcoming',
      statusText: 'Yaqinda boshlanadi',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80',
      description: 'Maktab o‘quvchilari o‘rtasida kompyuter savodxonligi, mantiqiy testlar va tezkor axborot izlash bellashuvi.'
    },
    {
      id: 'excel-mast',
      title: 'Excel Master Challenge',
      date: '2025-07-18',
      dateFormatted: '18-iyul, 2025 (Namunaviy)',
      status: 'open',
      statusText: 'Ro\'yxatga olish ochiq',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
      description: 'Real biznes ma\'lumotlarini Excelda eng tez va aniq tahlil qilib berish bo‘yicha chempionat.'
    },
    {
      id: 'team-proj',
      title: 'Team Project Competition',
      date: '2025-08-01',
      dateFormatted: '1-avgust, 2025 (Namunaviy)',
      status: 'upcoming',
      statusText: 'Yaqinda boshlanadi',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
      description: 'Dasturchilar, dizaynerlar va robototexniklar birgalikda to‘liq ishlaydigan yakuniy startap loyiha himoyasi.'
    }
  ];

  /* ----------------------------------------------------------------------------
   * 3. TEACHERS / MENTORS DATA (EDITABLE SAMPLE PROFILES)
   * ---------------------------------------------------------------------------- */
  const teachersData = [
    {
      id: 1,
      name: 'Boburiva Mohlaroy',
      subject: 'Frontend Dasturlash Mentori',
      experience: '5+ yil tajriba (namunaviy)',
      bio: 'JavaScript va zamonaviy veb texnologiyalari bo‘yicha mutaxassis. 30 dan ortiq yirik loyihalarni muvaffaqiyatli ishga tushirgan.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
      tags: ['HTML/CSS', 'JavaScript', 'React', 'UI/UX']
    },
    {
      id: 2,
      name: 'Jasur Rustamov',
      subject: 'Backend & Kiberxavfsizlik Mutaxassisi',
      experience: '6+ yil tajriba (namunaviy)',
      bio: 'Serverlar, ma\'lumotlar bazasi va tizimlar xavfsizligi bo‘yicha amaliyotchi muhandis. Murakkab loyihalar arxitektori.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
      tags: ['Node.js', 'PostgreSQL', 'API', 'Security']
    },
    {
      id: 3,
      name: 'Madina Karimova',
      subject: 'Ingliz Tili (IT English) O‘qituvchisi',
      experience: '4+ yil tajriba (namunaviy)',
      bio: 'IELTS 8.0 sohibi. O‘quvchilarni xalqaro IT kompaniyalar suhbatidan muvaffaqiyatli o‘tishga tayyorlash bo‘yicha mutaxassis.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
      tags: ['IELTS 8.0', 'Speaking', 'Tech Docs', 'Fluency']
    },
    {
      id: 4,
      name: 'Dilshodbek Olimov',
      subject: 'Robototexnika va Muhandislik Mentori',
      experience: '4+ yil tajriba (namunaviy)',
      bio: 'Arduino, mikrosxemalar va mexatronika bo‘yicha ko‘plab respublika texnika ko‘rik-tanlovlari g‘olibi va ustozi.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
      tags: ['Arduino', 'Robotics', 'C++', 'Electronics']
    },
    {
      id: 5,
      name: 'Gulnoza Saidova',
      subject: 'Microsoft Office va Ma\'lumotlar Tahlili',
      experience: '5+ yil tajriba (namunaviy)',
      bio: 'Excel formulalari, moliya jadvallari va rasmiy ish yuritish hujjatlarini professional tayyorlash bo‘yicha tajribali trener.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
      tags: ['MS Excel', 'MS Word', 'Pivot Table', 'Analytics']
    },
    {
      id: 6,
      name: 'Farhod Nazarov',
      subject: 'Informatika va Kompyuter Savodxonligi',
      experience: '3+ yil tajriba (namunaviy)',
      bio: 'Boshlovchi o‘quvchilar va bolalarga texnologiya olamini sodda, tushunarli va interaktiv o‘yinlar orqali yetkazib beruvchi ustoz.',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
      tags: ['Kompyuter', 'Windows', 'Internet', 'Boshlang\'ich']
    }
  ];

  /* ----------------------------------------------------------------------------
   * 4. STUDENT PROJECTS DATA
   * ---------------------------------------------------------------------------- */
  const projectsData = [
    {
      id: 1,
      category: 'web',
      title: 'Online Eco Market Vebsayti',
      author: 'Azizbek (Frontend o‘quvchisi)',
      description: 'HTML, CSS va JavaScript yordamida yaratilgan zamonaviy, to‘liq responsive internet do‘kon prototipi.',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=700&q=80',
      techs: ['HTML5', 'CSS3', 'JavaScript', 'Responsive']
    },
    {
      id: 2,
      category: 'robot',
      title: 'Avtonom Chiziq Bo‘ylab Yuruvchi Robot',
      author: 'Shahzodbek & Javohir (Robototexnika)',
      description: 'Arduino platasi va infraqizil sensorlar bilan maxsus belgilangan yo‘nalish bo‘ylab harakatlanuvchi robot.',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=700&q=80',
      techs: ['Arduino UNO', 'IR Sensor', 'C/C++', 'Servomotor']
    },
    {
      id: 3,
      category: 'backend',
      title: 'Kutubxona Boshqaruv RESTful APIsi',
      author: 'Kamronbek (Backend o‘quvchisi)',
      description: 'Kitoblar, o‘quvchilar va buyurtmalarni boshqaruvchi ma\'lumotlar bazasi va xavfsiz JSON API tizimi.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80',
      techs: ['Node.js', 'Express', 'SQL', 'Postman']
    },
    {
      id: 4,
      category: 'excel',
      title: 'Savdo Korxonasi Moliyaviy Tahlili',
      author: 'Nargizaxon (Excel kursi o‘quvchisi)',
      description: 'Dinamik diagrammalar, formulalar va Pivot jadvallar orqali oylik tushumlarni avtomatlashtirilgan hisoboti.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80',
      techs: ['Excel Dashboard', 'XLOOKUP', 'Pivot Tables']
    },
    {
      id: 5,
      category: 'team',
      title: 'META Smart Attendance System',
      author: 'META IT jamoaviy loyihasi',
      description: 'O‘quvchilarning markazga kelib-ketishini qayd etuvchi QR-kodli veb platforma va mini-app.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=700&q=80',
      techs: ['Frontend', 'Backend', 'Database', 'Git']
    },
    {
      id: 6,
      category: 'web',
      title: 'IT Portfolio & Resume Vebsayti',
      author: 'Diyorbek (Frontend o‘quvchisi)',
      description: 'Dark va Light rejimli, silliq animatsiyalar bilan boyitilgan interaktiv shaxsiy portfolio sayti.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80',
      techs: ['HTML', 'CSS Grid', 'JavaScript', 'Animation']
    }
  ];

  /* ----------------------------------------------------------------------------
   * 5. NEWS & ANNOUNCEMENTS DATA
   * ---------------------------------------------------------------------------- */
  const newsData = [
    {
      id: 1,
      date: '18-noyabr, 2025',
      title: 'Yangi guruhlarga qabul rasman ochildi!',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80',
      excerpt: 'Frontend, Robototexnika va Kiberxavfsizlik yo‘nalishlari bo‘yicha yangi guruhlarimiz uchun qabul davom etmoqda. Joylar soni cheklangan.',
      fullText: 'META IT SCHOOLda navbatdagi yangi o‘quv mavsumi start oldi. Barcha kurslarimiz haftada 6 kunlik innovatsion 3+3 tizimida olib boriladi.'
    },
    {
      id: 2,
      date: '10-noyabr, 2025',
      title: 'O‘quvchilarimiz o‘rtasida "Frontend Challenge" g‘oliblari aniqlandi',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80',
      excerpt: '24 soatlik marafon davomida talabalarimiz eng zamonaviy veb-saytlarni yaratib, esdalik sovg‘alari va sertifikatlar bilan taqdirlandilar.',
      fullText: 'Musobaqada 50 dan ortiq o‘quvchilar o‘z bilimlarini sinab ko‘rishdi. Birinchi o‘rin sohibi qimmatbaho texnik sovg‘a bilan mukofotlandi.'
    },
    {
      id: 3,
      date: '02-noyabr, 2025',
      title: 'Yangi zamonaviy kompyuter va robototexnika laboratoriyasi ishga tushdi',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80',
      excerpt: 'O‘quvchilarimizning amaliyotlarini yanada qulay va samarali qilish maqsadida eng so‘nggi rusumdagi uskunalar o‘rnatildi.',
      fullText: 'Robototexnika kursimiz talabalari endilikda kengaytirilgan sensorlar to‘plami va yangi Arduino modullari yordamida loyihalar yasashmoqda.'
    }
  ];

  /* ----------------------------------------------------------------------------
   * 6. MULTI-LANGUAGE TRANSLATION DICTIONARY (UZ, RU, EN)
   * ---------------------------------------------------------------------------- */
  const translations = {
    uz: {
      topBannerText: "Yangi guruhlarga qabul ochiq! Ro'yxatdan o'ting va IT sohasida ilk qadamingizni qo'ying.",
      navHome: "Bosh sahifa",
      navAbout: "Biz haqimizda",
      navCourses: "Kurslar",
      navTeachers: "O‘qituvchilar",
      navSchedule: "Dars jadvali",
      navCompetitions: "Musobaqalar",
      navProjects: "Loyihalar",
      navNews: "Yangiliklar",
      navContact: "Aloqa",
      navRegisterBtn: "Ro‘yxatdan o‘tish",
      heroBadge: "Zamonaviy IT Ta'lim Markazi",
      heroMotto: "Kelajagingni bugun dasturlashni boshlash orqali yarat!",
      heroDescription: "Zamonaviy kasblarni o‘rganing, o‘z bilimlaringizni rivojlantiring va IT olamida o‘z o‘rningizni toping. Haftada 3 kun asosiy dars va 3 kun to'liq amaliyot hamda takrorlash tizimi bilan sifatli ta'lim oling.",
      heroBtnCourses: "Kurslarni ko‘rish",
      heroBtnRegister: "Ro‘yxatdan o‘tish",
      heroBtnAbout: "Biz haqimizda",
      metricCourses: "IT Yo'nalishlar",
      metricSchedule: "Haftalik Tizim",
      metricMethod: "Dars & Amaliyot",
      metricProjects: "Amaliy Loyihalar",
      aboutTag: "Maktabimiz Haqida",
      aboutTitle: "META IT SCHOOL nima va biz qanday ishlaymiz?",
      aboutSubtitle: "Biz shunchaki nazariya o‘rgatmaymiz, balki o‘quvchilarni real bozor talablariga mos, kreativ fikrlaydigan IT mutaxassislar qilib tayyorlaymiz.",
      aboutMissionTitle: "Maktabning Asosiy Maqsadi",
      aboutMissionDesc: "META IT SCHOOLning oliy maqsadi — har bir o‘quvchiga axborot texnologiyalari sohasida mustahkam poydevor yaratish, yoshlarning mantiqiy fikrlashini oshirish va ularni raqobatbardosh mutaxassislar qilib yetishtirishdir.",
      aboutGoal1: "Yosh chegarasisiz o'rganish imkoniyati (boshlang'ichdan professionalgacha)",
      aboutGoal2: "Xalqaro metodikaga asoslangan o'quv dasturlari",
      aboutGoal3: "Har bir o'quvchiga individual mentorlik yondashuvi",
      aboutOppTitle: "O‘quvchilarga Beriladigan Imkoniyatlar",
      aboutOppDesc: "Har bir talabamiz zamonaviy kompyuterlar, robototexnika qismlari va cheksiz internetdan foydalanish huquqiga ega.",
      aboutMethodTitle: "Zamonaviy Ta'lim Metodikasi (3+3)",
      aboutMethodDesc: "Haftada 3 kun yangi mavzular o‘rganiladi. Qolgan 3 kun esa darsni takrorlash, mustahkamlash va testlarga bag‘ishlanadi.",
      aboutPracticeTitle: "Amaliy Mashg‘ulotlar va Jamoaviy Loyihalar",
      aboutPracticeDesc: "O‘quvchilar yakka emas, real IT kompaniyalardagidek jamoa bo‘lib ishlashni va kod ko‘rib chiqishni o‘rganishadi.",
      aboutGrowthTitle: "O‘quvchilarning Bosqichma-bosqich Rivojlanishi",
      aboutGrowthDesc: "Har oy yakunida imtihon topshirib, o‘z loyihalarini taqdimot qilishadi. Ota-onalar o‘sish ko‘rsatkichlarini kuzatishi mumkin.",
      demoStatsDisclaimer: "Quyidagi statistik ko‘rsatkichlar tahrirlanadigan namunaviy qiymatlardir:",
      statStudents: "Namunaviy o'quvchilar",
      statMentors: "Namunaviy mentorlar",
      statCoursesCount: "Professional kurslar",
      statSatisfaction: "Mamnunlik darajasi",
      coursesTag: "O'quv Dasturlari",
      coursesTitle: "Barcha Professional IT Kurslarimiz",
      coursesSubtitle: "Qiziqishingizga mos yo‘nalishni tanlang. Har bir kurs amaliy tajribaga asoslangan bo‘lib, oylik to‘lovlar qulay belgilangan.",
      filterAll: "Barchasi",
      filterDev: "Dasturlash",
      filterTech: "Texnologiya & Kiber",
      filterOffice: "Ofis & Savodxonlik",
      filterLang: "Tillari",
      noCourseTitle: "Hech qanday kurs topilmadi",
      noCourseDesc: "Boshqa so‘z bilan qidirib ko‘ring yoki barcha kurslar filtrini tanlang.",
      resetFilterBtn: "Filtrni tozalash",
      pricingTag: "Shaffof Narxlar",
      pricingTitle: "Kurslar Narxlari Jadvali",
      pricingSubtitle: "META IT SCHOOLda yashirin to‘lovlar yo‘q. Barcha narxlar o‘zbek so‘mida ko‘rsatilgan bo‘lib, oylik to‘lov shaklida qabul qilinadi.",
      thNumber: "#",
      thCourse: "Kurs Nomi",
      thDuration: "Davomiyligi",
      thSchedule: "Haftalik Tartib",
      thPrice: "Oylik Narxi",
      thAction: "Harakat",
      guaranteeTitle: "Birinchi Dars — Bepul Sinov Darsi!",
      guaranteeDesc: "O‘quvchilarimiz o‘zlariga mos kursni tanlashlarida adashmasliklari uchun birinchi sinov darsimizda bepul qatnashishlari mumkin.",
      guaranteeBtn: "Sinov darsiga yozilish",
      scheduleTag: "Dars Tartibi",
      scheduleTitle: "Haftalik Dars Jadvali",
      scheduleSubtitle: "META IT SCHOOL haftada 6 kun ishlaydi. 3 kun asosiy darslar va 3 kun amaliy takrorlash, yakshanba esa dam olish kuni hisoblanadi.",
      shiftDay: "Kunduzgi smena (09:00 - 12:00 / 14:00 - 17:00)",
      shiftEvening: "Kechki smena (18:00 - 21:00)",
      typeMainLesson: "Asosiy Dars",
      typePractice: "Amaliyot & Takrorlash",
      typeTest: "Takrorlash, Test & Quiz",
      typeRest: "DAM OLISH",
      dayMon: "Dushanba",
      dayTue: "Seshanba",
      dayWed: "Chorshanba",
      dayThu: "Payshanba",
      dayFri: "Juma",
      daySat: "Shanba",
      daySun: "Yakshanba",
      monDesc: "Yangi mavzu taqdimoti, asosiy nazariya, mentor bilan interaktiv tushuntirish va kod yozish.",
      tueDesc: "Dushanba darsini mustahkamlash, individual topshiriqlarni bajarish, kod xatolarini tahlil qilish.",
      wedDesc: "Ikkinchi asosiy modul darsi, algoritmlar, yangi texnik usullar va loyiha arxitekturasi.",
      thuDesc: "Chorshanba mavzusi bo‘yicha chuqur amaliy mashg‘ulot, o‘qituvchi bilan savol-javob sessiyasi.",
      friDesc: "Haftaning uchinchi asosiy nazariy darsi, haftalik mavzularni umumlashtirish va katta vazifa berish.",
      satDesc: "Haftalik o‘rganilgan barcha mavzular yuzasidan amaliy sinov, test sinovlari va mini hackathon.",
      sunDesc: "O‘quvchilar va o‘qituvchilar uchun hordiq chiqarish, yangi hafta uchun kuch yig‘ish kuni.",
      restTimeText: "Dam olish kuni",
      compTag: "Turnirlar & Bellashuvlar",
      compTitle: "Musobaqalar va Turnirlar",
      compSubtitle: "O‘quvchilar bilimlarini sinab ko‘rishlari va tajriba oshirishlari uchun muntazam musobaqalar o‘tkaziladi.",
      demoCompNotice: "Diqqat: Quyida keltirilgan barcha tadbirlar maktab dasturidagi namunaviy musobaqalardir.",
      teachersTag: "Bizning Jamoa",
      teachersTitle: "Tajribali O‘qituvchilar va Mentorlar",
      teachersSubtitle: "Bizning mentorlarimiz nafaqat nazariy bilim beradi, balki amaliy IT tajribalarini o‘rgatadilar.",
      demoTeacherNotice: "Eslatma: Quyidagi o‘qituvchi kartalari tahrirlanadigan namunaviy profillardir.",
      projectsTag: "Portfolio",
      projectsTitle: "O‘quvchilarimiz Yaratgan Loyihalar",
      projectsSubtitle: "Nazariya amaliyotsiz hech narsa emas. O‘quvchilarimiz mustaqil yaratgan loyihalar bilan tanishing.",
      pFilterWeb: "Website loyihalari",
      pFilterRobot: "Robototexnika",
      pFilterCode: "Dasturlash",
      pFilterExcel: "Excel & Ma'lumotlar",
      pFilterTeam: "Jamoaviy loyihalar",
      newsTag: "E'lonlar",
      newsTitle: "Yangiliklar va E'lonlar",
      newsSubtitle: "META IT SCHOOL hayotidagi so‘nggi yangiliklar va yangi guruhlarga qabullar haqida xabardor bo‘ling.",
      regTitle: "META IT SCHOOLga Hoziroq Ro‘yxatdan O‘ting!",
      regDesc: "O‘z ma'lumotlaringizni to‘ldiring, qiziqayotgan kursingizni tanlang. Biz siz bilan bog‘lanib, sinov darsiga taklif qilamiz.",
      perk1Title: "Bepul konsultatsiya va sinov darsi",
      perk1Desc: "Birinchi darsda mutlaqo bepul qatnashing va o‘z yo‘nalishingizni aniqlang.",
      perk2Title: "Zamonaviy kompyuterlar bilan ta'minlangan xonalar",
      perk2Desc: "Dars paytida shaxsiy noutbukingiz bo‘lishi shart emas, barcha texnika mavjud.",
      perk3Title: "Sertifikat va amaliy portfolio",
      perk3Desc: "Kursni tamomlaganingizda rasmiy sertifikat va mustaqil loyihalar portfoliosiga ega bo‘lasiz.",
      demoStorageTitle: "Demo Rejim (Frontend LocalStorage)",
      demoStorageDesc: "Backend server ulanmagani sababli barcha arizalar brauzeringizning localStorage xotirasida namunaviy saqlanadi.",
      viewSubmissionsBtn: "Saqlangan arizalarni ko'rish",
      formHeaderTitle: "Arizani to'ldirish",
      formHeaderDesc: "Barcha maydonlarni diqqat bilan to'ldiring",
      lblFullName: "Ism va familiya",
      lblPhone: "Telefon raqam",
      lblAge: "Yoshingiz",
      lblCourse: "Qiziqayotgan kursingiz",
      optSelectCourse: "-- Kursni tanlang --",
      lblSelectedPrice: "Oylik to‘lov:",
      lblShift: "O‘qish rejimi (smena)",
      shiftDayTitle: "Kunduzgi rejim",
      shiftNightTitle: "Kechki rejim",
      lblComment: "Qo‘shimcha izoh yoki savollar (ixtiyoriy)",
      btnSubmitForm: "Arizani yuborish",
      btnResetForm: "Tozalash",
      faqTag: "Savol-Javoblar",
      faqTitle: "Ko‘p So‘raladigan Savollar",
      faqSubtitle: "O‘quvchilar va ota-onalar tomonidan tez-tez beriladigan savollarga javoblar bilan tanishib chiqing.",
      contactTag: "Biz bilan Bog'laning",
      contactTitle: "Manzil va Aloqa Ma'lumotlari",
      contactSubtitle: "Bizga tashrif buyuring yoki ijtimoiy tarmoqlar orqali bog‘laning.",
      cAddressTitle: "Bizning Manzil",
      cAddressNote: "Mo'ljal: Yangi bozor savdo majmuasi yaqinida",
      cPhoneTitle: "Telefon Raqamlar",
      cPhoneNote: "Har kuni soat 08:30 dan 20:30 gacha qo‘ng‘iroqlarni qabul qilamiz",
      cHoursTitle: "Ish Vaqti",
      cHoursNote: "Haftada 6 ish kuni faoliyat ko'rsatiladi",
      cSocialTitle: "Ijtimoiy Tarmoqlarimiz",
      cSocialDesc: "Eng so'nggi xabarlar va e'lonlar uchun sahifalarimizga obuna bo'ling:",
      footerAbout: "META IT SCHOOL — Andijon shahridagi zamonaviy IT ta'lim markazi. Bizning maqsadimiz — sifatli amaliy ta'lim orqali yoshlarga dunyo darajasidagi kasblarni o‘rgatish.",
      fQuickLinks: "Tezkor Havolalar",
      fCourses: "Bizning Kurslar",
      fContact: "Aloqa va Ish Tartibi"
    },
    ru: {
      topBannerText: "Открыт набор в новые группы! Запишитесь и начните свой путь в IT сфере прямо сейчас.",
      navHome: "Главная",
      navAbout: "О нас",
      navCourses: "Курсы",
      navTeachers: "Преподаватели",
      navSchedule: "Расписание",
      navCompetitions: "Конкурсы",
      navProjects: "Проекты",
      navNews: "Новости",
      navContact: "Контакты",
      navRegisterBtn: "Регистрация",
      heroBadge: "Современный IT Образовательный Центр",
      heroMotto: "Создай свое будущее уже сегодня, начав программировать!",
      heroDescription: "Освойте востребованные профессии, развивайте практические навыки и найдите свое место в мире IT. Качественное образование по системе: 3 дня основных уроков + 3 дня практики.",
      heroBtnCourses: "Смотреть курсы",
      heroBtnRegister: "Записаться",
      heroBtnAbout: "О нас",
      metricCourses: "IT направлений",
      metricSchedule: "6-дневная система",
      metricMethod: "Уроки и Практика",
      metricProjects: "Реальные проекты",
      aboutTag: "О нашей школе",
      aboutTitle: "Что такое META IT SCHOOL и как мы обучаем?",
      aboutSubtitle: "Мы готовим IT специалистов, готовых к реальным требованиям рынка, через интенсивную практику и поддержку менторов.",
      aboutMissionTitle: "Главная цель школы",
      aboutMissionDesc: "Предоставить каждому ученику прочный фундамент в сфере современных технологий и развить способность создавать самостоятельные проекты.",
      aboutGoal1: "Обучение с любого уровня без возрастных барьеров",
      aboutGoal2: "Учебные программы по международным стандартам",
      aboutGoal3: "Индивидуальный менторский подход к каждому ученику",
      aboutOppTitle: "Возможности для студентов",
      aboutOppDesc: "Современные ПК, лаборатория робототехники и высокоскоростной интернет доступны каждому студенту.",
      aboutMethodTitle: "Методика обучения (3+3)",
      aboutMethodDesc: "3 дня в неделю углубленная теория, следующие 3 дня — закрепление, практические задачи и тесты.",
      aboutPracticeTitle: "Практические занятия и командные проекты",
      aboutPracticeDesc: "Студенты учатся командной разработке по методологии реальных IT компаний.",
      aboutGrowthTitle: "Поэтапное развитие учеников",
      aboutGrowthDesc: "Ежемесячные экзамены и презентации собственных проектов позволяют отслеживать прогресс.",
      demoStatsDisclaimer: "Следующие статистические показатели являются демонстрационными:",
      statStudents: "Студентов (пример)",
      statMentors: "Менторов (пример)",
      statCoursesCount: "Проф. курсов",
      statSatisfaction: "Уровень довольства",
      coursesTag: "Учебные программы",
      coursesTitle: "Все профессиональные IT курсы",
      coursesSubtitle: "Выберите подходящее направление. Прозрачные и доступные ежемесячные цены.",
      filterAll: "Все",
      filterDev: "Разработка",
      filterTech: "Технологии и Кибер",
      filterOffice: "Офис и грамотность",
      filterLang: "Языки",
      noCourseTitle: "Курсы не найдены",
      noCourseDesc: "Попробуйте изменить поисковый запрос или выберите фильтр 'Все'.",
      resetFilterBtn: "Сбросить фильтр",
      pricingTag: "Прозрачные цены",
      pricingTitle: "Таблица стоимости курсов",
      pricingSubtitle: "Никаких скрытых платежей. Все цены указаны в узбекских сумах за 1 месяц обучения.",
      thNumber: "#",
      thCourse: "Название курса",
      thDuration: "Длительность",
      thSchedule: "График в неделю",
      thPrice: "Цена в месяц",
      thAction: "Действие",
      guaranteeTitle: "Первый урок — Бесплатный пробный!",
      guaranteeDesc: "Приходите на бесплатный пробный урок, чтобы уверенно выбрать свое направление.",
      guaranteeBtn: "Записаться на пробный урок",
      scheduleTag: "График занятий",
      scheduleTitle: "Еженедельное расписание",
      scheduleSubtitle: "META IT SCHOOL работает 6 дней в неделю: 3 дня уроков + 3 дня практики, воскресенье — выходной.",
      shiftDay: "Дневная смена (09:00 - 12:00 / 14:00 - 17:00)",
      shiftEvening: "Вечерняя смена (18:00 - 21:00)",
      typeMainLesson: "Основной урок",
      typePractice: "Практика и повторение",
      typeTest: "Повторение и Тест",
      typeRest: "ВЫХОДНОЙ",
      dayMon: "Понедельник",
      dayTue: "Вторник",
      dayWed: "Среда",
      dayThu: "Четверг",
      dayFri: "Пятница",
      daySat: "Суббота",
      daySun: "Воскресенье",
      monDesc: "Презентация новой темы, фундаментальная теория и разбор кода с ментором.",
      tueDesc: "Закрепление материала понедельника, решение индивидуальных задач и разбор ошибок.",
      wedDesc: "Второй основной модуль, алгоритмы, структура и архитектура проектов.",
      thuDesc: "Глубокая практическая сессия по материалу среды, вопрос-ответ с ментором.",
      friDesc: "Третий теоретический урок недели, обобщение тем и выдача проектного задания.",
      satDesc: "Итоговый практический тест недели, квизы и мини-хакатон.",
      sunDesc: "Официальный день отдыха для студентов и преподавателей.",
      restTimeText: "День отдыха",
      compTag: "Турниры",
      compTitle: "Конкурсы и Чемпионаты",
      compSubtitle: "Регулярные соревнования для закрепления знаний и проверки практических навыков.",
      demoCompNotice: "Внимание: Все указанные события являются примерными мероприятиями учебного плана.",
      teachersTag: "Наша команда",
      teachersTitle: "Опытные преподаватели и менторы",
      teachersSubtitle: "Наши менторы передают студентам реальный практический коммерческий опыт.",
      demoTeacherNotice: "Примечание: Профили учителей являются редактируемыми демонстрационными образцами.",
      projectsTag: "Портфолио",
      projectsTitle: "Проекты наших студентов",
      projectsSubtitle: "Ознакомьтесь с реальными практическими проектами, созданными нашими учениками.",
      pFilterWeb: "Веб-сайты",
      pFilterRobot: "Робототехника",
      pFilterCode: "Программирование",
      pFilterExcel: "Excel и Данные",
      pFilterTeam: "Командные проекты",
      newsTag: "Объявления",
      newsTitle: "Новости и события",
      newsSubtitle: "Будьте в курсе последних событий и наборов в группы META IT SCHOOL.",
      regTitle: "Запишитесь в META IT SCHOOL прямо сейчас!",
      regDesc: "Заполните форму и выберите курс. Мы свяжемся с вами для подтверждения пробного урока.",
      perk1Title: "Бесплатная консультация и пробный урок",
      perk1Desc: "Попробуйте бесплатно и выберите подходящее IT направление.",
      perk2Title: "Аудитории с современными компьютерами",
      perk2Desc: "Вся необходимая техника уже есть в нашей академии.",
      perk3Title: "Сертификат и портфолио проектов",
      perk3Desc: "По окончании курса вы получите официальный сертификат и готовые проекты.",
      demoStorageTitle: "Демонстрационный режим (LocalStorage)",
      demoStorageDesc: "Все заявки сохраняются в памяти вашего браузера (localStorage) в тестовом режиме.",
      viewSubmissionsBtn: "Просмотреть сохраненные заявки",
      formHeaderTitle: "Заполнение заявки",
      formHeaderDesc: "Пожалуйста, заполните все обязательные поля",
      lblFullName: "Имя и фамилия",
      lblPhone: "Номер телефона",
      lblAge: "Ваш возраст",
      lblCourse: "Интересующий вас курс",
      optSelectCourse: "-- Выберите курс --",
      lblSelectedPrice: "Стоимость в месяц:",
      lblShift: "Режим обучения (смена)",
      shiftDayTitle: "Дневная смена",
      shiftNightTitle: "Вечерняя смена",
      lblComment: "Дополнительные вопросы или комментарий",
      btnSubmitForm: "Отправить заявку",
      btnResetForm: "Очистить",
      faqTag: "Вопросы и ответы",
      faqTitle: "Часто задаваемые вопросы",
      faqSubtitle: "Ответы на самые частые вопросы родителей и будущих студентов.",
      contactTag: "Контакты",
      contactTitle: "Адрес и контактная информация",
      contactSubtitle: "Приходите к нам или свяжитесь через социальные сети.",
      cAddressTitle: "Наш адрес",
      cAddressNote: "Ориентир: рядом с торговым комплексом Yangi bozor",
      cPhoneTitle: "Телефоны",
      cPhoneNote: "Прием звонков ежедневно с 08:30 до 20:30",
      cHoursTitle: "Время работы",
      cHoursNote: "6 рабочих дней в неделю",
      cSocialTitle: "Наши социальные сети",
      cSocialDesc: "Подписывайтесь на наши каналы для получения свежих новостей:",
      footerAbout: "META IT SCHOOL — современный IT образовательный центр в городе Андижан. Наша цель — качественное практическое образование.",
      fQuickLinks: "Быстрые ссылки",
      fCourses: "Наши курсы",
      fContact: "Контакты и график"
    },
    en: {
      topBannerText: "Admissions open for new cohorts! Register now and begin your career in IT.",
      navHome: "Home",
      navAbout: "About Us",
      navCourses: "Courses",
      navTeachers: "Teachers",
      navSchedule: "Schedule",
      navCompetitions: "Competitions",
      navProjects: "Projects",
      navNews: "News",
      navContact: "Contact",
      navRegisterBtn: "Enroll Now",
      heroBadge: "Modern IT Education Academy",
      heroMotto: "Build your future today by learning to code!",
      heroDescription: "Master high-demand tech skills, accelerate practical knowledge, and achieve your goals in the IT world. 3 days core lessons + 3 days practice & review system.",
      heroBtnCourses: "Explore Courses",
      heroBtnRegister: "Enroll Now",
      heroBtnAbout: "About Academy",
      metricCourses: "Tech Tracks",
      metricSchedule: "6-Day System",
      metricMethod: "Classes & Lab",
      metricProjects: "Hands-on Projects",
      aboutTag: "About Our Academy",
      aboutTitle: "What is META IT SCHOOL and how do we teach?",
      aboutSubtitle: "We prepare competitive IT professionals through intensive hands-on practice, teamwork, and dedicated mentorship.",
      aboutMissionTitle: "Core Mission of the Academy",
      aboutMissionDesc: "Our primary mission is to establish a rock-solid foundation in digital technologies for every student and train creators of independent solutions.",
      aboutGoal1: "Learning opportunities with no age boundaries",
      aboutGoal2: "Curricula aligned with global industry standards",
      aboutGoal3: "Personalized mentor assistance for each student",
      aboutOppTitle: "Student Facilities & Opportunities",
      aboutOppDesc: "Every student gets full access to modern workstations, robotics kits, and gigabit internet.",
      aboutMethodTitle: "Modern 3+3 Methodology",
      aboutMethodDesc: "3 days of deep concept lectures + 3 days of code review, practical labs, and weekly testing.",
      aboutPracticeTitle: "Hands-on Practice & Team Projects",
      aboutPracticeDesc: "Students collaborate in agile teams using Git and industry-standard workflows.",
      aboutGrowthTitle: "Measurable Student Growth",
      aboutGrowthDesc: "Monthly examinations and project demo days allow parents and mentors to track real progress.",
      demoStatsDisclaimer: "The following stats are customizable demonstrative metrics:",
      statStudents: "Sample Students",
      statMentors: "Sample Mentors",
      statCoursesCount: "Professional Tracks",
      statSatisfaction: "Satisfaction Rate",
      coursesTag: "Curriculum",
      coursesTitle: "All Professional IT Courses",
      coursesSubtitle: "Choose your path. Each course delivers hands-on experience with transparent monthly tuition.",
      filterAll: "All",
      filterDev: "Coding",
      filterTech: "Hardware & Cyber",
      filterOffice: "Office & Literacy",
      filterLang: "Languages",
      noCourseTitle: "No courses found",
      noCourseDesc: "Try searching with different keywords or reset the category filter.",
      resetFilterBtn: "Reset Filter",
      pricingTag: "Transparent Tuition",
      pricingTitle: "Course Pricing Table",
      pricingSubtitle: "No hidden charges. All tuition fees are listed in Uzbek Soum (UZS) per month.",
      thNumber: "#",
      thCourse: "Course Name",
      thDuration: "Duration",
      thSchedule: "Weekly Routine",
      thPrice: "Monthly Tuition",
      thAction: "Action",
      guaranteeTitle: "First Lesson is 100% Free Trial!",
      guaranteeDesc: "Join our free introductory class to explore the environment and choose the best track for you.",
      guaranteeBtn: "Book Free Trial",
      scheduleTag: "Weekly Schedule",
      scheduleTitle: "Comprehensive Timetable",
      scheduleSubtitle: "META IT SCHOOL operates 6 days a week: 3 lecture days + 3 practical lab days, Sunday is off.",
      shiftDay: "Day Shift (09:00 - 12:00 / 14:00 - 17:00)",
      shiftEvening: "Evening Shift (18:00 - 21:00)",
      typeMainLesson: "Main Class",
      typePractice: "Lab & Review",
      typeTest: "Weekly Review & Quiz",
      typeRest: "DAY OFF",
      dayMon: "Monday",
      dayTue: "Tuesday",
      dayWed: "Wednesday",
      dayThu: "Thursday",
      dayFri: "Friday",
      daySat: "Saturday",
      daySun: "Sunday",
      monDesc: "New topic introduction, foundational theory, live coding with the mentor.",
      tueDesc: "Reinforcing Monday's lesson, individual assignments, and code error analysis.",
      wedDesc: "Second core module, data structures, algorithms, and project architecture.",
      thuDesc: "Deep practice on Wednesday's topics, Q&A session with instructors.",
      friDesc: "Third theoretical lesson, weekly summary, and major milestone assignments.",
      satDesc: "Hands-on challenge, weekly quizzes, hackathons, and outcome evaluations.",
      sunDesc: "Official rest and recharge day for students and faculty.",
      restTimeText: "Official day off",
      compTag: "Tournaments",
      compTitle: "Competitions & Contests",
      compSubtitle: "Regular tournaments designed to challenge skills and award top achievements.",
      demoCompNotice: "Notice: All listed events are demonstrative curriculum fixtures.",
      teachersTag: "Our Faculty",
      teachersTitle: "Experienced Instructors & Mentors",
      teachersSubtitle: "Our mentors bring real commercial IT production experience into the classroom.",
      demoTeacherNotice: "Note: The following teacher cards are editable demo profiles.",
      projectsTag: "Portfolio",
      projectsTitle: "Projects Built by Our Students",
      projectsSubtitle: "Theory means nothing without practice. Explore real projects crafted by our students.",
      pFilterWeb: "Websites",
      pFilterRobot: "Robotics",
      pFilterCode: "Coding",
      pFilterExcel: "Excel & Data",
      pFilterTeam: "Team Projects",
      newsTag: "Announcements",
      newsTitle: "News & Academy Updates",
      newsSubtitle: "Stay updated with cohort openings, tournament results, and academy news.",
      regTitle: "Enroll at META IT SCHOOL Today!",
      regDesc: "Submit your details and choose your desired track. We will schedule your free trial session.",
      perk1Title: "Free consultation and trial lesson",
      perk1Desc: "Attend your first lesson free of charge to confirm your track.",
      perk2Title: "Modern lab workstations provided",
      perk2Desc: "All hardware is supplied at our academy, no personal laptop required.",
      perk3Title: "Official certificate & project portfolio",
      perk3Desc: "Graduate with verified skills, an official certificate, and independent projects.",
      demoStorageTitle: "Demo Storage Mode (Browser LocalStorage)",
      demoStorageDesc: "Submissions are stored securely in your browser's localStorage for demonstration purposes.",
      viewSubmissionsBtn: "View Stored Applications",
      formHeaderTitle: "Application Form",
      formHeaderDesc: "Please fill in all required fields carefully",
      lblFullName: "Full Name",
      lblPhone: "Phone Number",
      lblAge: "Your Age",
      lblCourse: "Desired Course",
      optSelectCourse: "-- Select a Course --",
      lblSelectedPrice: "Monthly Tuition:",
      lblShift: "Preferred Study Shift",
      shiftDayTitle: "Day Shift",
      shiftNightTitle: "Evening Shift",
      lblComment: "Additional comments or questions (Optional)",
      btnSubmitForm: "Submit Application",
      btnResetForm: "Reset",
      faqTag: "FAQ",
      faqTitle: "Frequently Asked Questions",
      faqSubtitle: "Find answers to commonly asked questions from prospective students and parents.",
      contactTag: "Contact Us",
      contactTitle: "Location & Contact Information",
      contactSubtitle: "Visit our campus in Andijan or connect with us on social media.",
      cAddressTitle: "Our Location",
      cAddressNote: "Landmark: Near the Yangi Bozor commercial complex",
      cPhoneTitle: "Phone Lines",
      cPhoneNote: "Available daily from 08:30 to 20:30",
      cHoursTitle: "Working Hours",
      cHoursNote: "Operating 6 days a week",
      cSocialTitle: "Social Media",
      cSocialDesc: "Follow our social channels for regular updates and announcements:",
      footerAbout: "META IT SCHOOL is a premier IT education academy in Andijan, Uzbekistan, empowering youth through modern hands-on tech skills.",
      fQuickLinks: "Quick Links",
      fCourses: "Our Tracks",
      fContact: "Contact & Hours"
    }
  };

  /* ----------------------------------------------------------------------------
   * 7. STATE MANAGEMENT
   * ---------------------------------------------------------------------------- */
  let currentLanguage = localStorage.getItem('meta_it_lang') || 'uz';
  let currentTheme = localStorage.getItem('meta_it_theme') || 'dark';
  let currentShift = 'day';
  let activeCourseCategory = 'all';
  let activeProjectCategory = 'all';

  /* ----------------------------------------------------------------------------
   * 8. THEME TOGGLER (DARK / LIGHT MODE)
   * ---------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('meta_it_theme', theme);
  }

  // Initialize Theme
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(
        newTheme === 'dark' ? 'Tungi rejim faollashtirildi' : 'Kunduzgi rejim faollashtirildi',
        newTheme === 'dark' ? 'Qorong‘i ranglar ko‘zni asraydi.' : 'Yorug‘ ranglar kunduzgi o‘qishga qulay.',
        'info'
      );
    });
  }

  /* ----------------------------------------------------------------------------
   * 9. MULTI-LANGUAGE SYSTEM
   * ---------------------------------------------------------------------------- */
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.querySelector('.lang-dropdown');
  const currentLangLabel = document.getElementById('currentLang');
  const langOptions = document.querySelectorAll('.lang-option');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('active');
    });
  }

  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const selectedLang = opt.getAttribute('data-lang');
      setLanguage(selectedLang);
      langDropdown.classList.remove('active');
    });
  });

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;
    localStorage.setItem('meta_it_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    if (currentLangLabel) {
      currentLangLabel.textContent = lang.toUpperCase();
    }

    langOptions.forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Re-render dynamic elements with current language strings
    renderCourses(activeCourseCategory, document.getElementById('courseSearchInput')?.value || '');
    renderPricingTable();
    populateCourseDropdown();
  }

  /* ----------------------------------------------------------------------------
   * 10. COURSES RENDERING & FILTERING & SEARCH
   * ---------------------------------------------------------------------------- */
  const coursesGrid = document.getElementById('coursesGrid');
  const courseSearchInput = document.getElementById('courseSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const noCoursesFound = document.getElementById('noCoursesFound');
  const resetSearchFilterBtn = document.getElementById('resetSearchFilterBtn');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderCourses(category = 'all', searchQuery = '') {
    if (!coursesGrid) return;

    const query = searchQuery.trim().toLowerCase();
    const filtered = coursesData.filter(c => {
      const matchesCategory = category === 'all' || c.category === category;
      const matchesSearch = !query || 
        c.name.toLowerCase().includes(query) ||
        (c.name_ru && c.name_ru.toLowerCase().includes(query)) ||
        (c.name_en && c.name_en.toLowerCase().includes(query)) ||
        c.topics.some(t => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });

    coursesGrid.innerHTML = '';

    if (filtered.length === 0) {
      if (noCoursesFound) noCoursesFound.classList.remove('hidden');
      return;
    }

    if (noCoursesFound) noCoursesFound.classList.add('hidden');

    filtered.forEach(course => {
      const card = document.createElement('div');
      card.className = 'course-card';
      
      const displayName = currentLanguage === 'ru' && course.name_ru ? course.name_ru :
                          currentLanguage === 'en' && course.name_en ? course.name_en : course.name;

      const displayDesc = currentLanguage === 'ru' && course.description_ru ? course.description_ru :
                          currentLanguage === 'en' && course.description_en ? course.description_en : course.description;

      const displayDuration = currentLanguage === 'ru' && course.duration_ru ? course.duration_ru :
                              currentLanguage === 'en' && course.duration_en ? course.duration_en : course.duration;

      card.innerHTML = `
        <div class="course-img-wrapper">
          <img src="${course.image}" alt="${displayName}" loading="lazy">
          <span class="course-category-tag">${course.badge}</span>
          <span class="course-duration-badge"><i class="fa-regular fa-clock"></i> ${displayDuration}</span>
        </div>
        <div class="course-body">
          <h3 class="course-title">${displayName}</h3>
          <p class="course-desc">${displayDesc}</p>
          <div class="course-topics-list">
            ${course.topics.slice(0, 5).map(t => `<span class="topic-tag">${t}</span>`).join('')}
            ${course.topics.length > 5 ? `<span class="topic-tag">+${course.topics.length - 5} mavzular</span>` : ''}
          </div>
          <div class="course-footer">
            <div class="price-row">
              <span class="price-label">Oylik to‘lov</span>
              <span class="price-value">${course.priceFormatted}</span>
            </div>
            <div class="course-action-buttons">
              <button class="btn btn-outline btn-details" data-course-id="${course.id}">
                <i class="fa-solid fa-circle-info"></i> Batafsil
              </button>
              <button class="btn btn-primary btn-enroll" data-course-id="${course.id}">
                <i class="fa-solid fa-user-plus"></i> Ro'yxatdan o'tish
              </button>
            </div>
          </div>
        </div>
      `;

      // Event listeners for card buttons
      const detailsBtn = card.querySelector('.btn-details');
      const enrollBtn = card.querySelector('.btn-enroll');

      detailsBtn.addEventListener('click', () => openCourseModal(course.id));
      enrollBtn.addEventListener('click', () => selectCourseAndScrollToForm(course.id));

      coursesGrid.appendChild(card);
    });
  }

  // Filter Buttons Handler
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCourseCategory = btn.getAttribute('data-filter');
      renderCourses(activeCourseCategory, courseSearchInput?.value || '');
    });
  });

  // Search Input Handler
  if (courseSearchInput) {
    courseSearchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.classList.toggle('active', val.length > 0);
      }
      renderCourses(activeCourseCategory, val);
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (courseSearchInput) {
        courseSearchInput.value = '';
        searchClearBtn.classList.remove('active');
        renderCourses(activeCourseCategory, '');
        courseSearchInput.focus();
      }
    });
  }

  if (resetSearchFilterBtn) {
    resetSearchFilterBtn.addEventListener('click', () => {
      activeCourseCategory = 'all';
      filterBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === 'all'));
      if (courseSearchInput) courseSearchInput.value = '';
      if (searchClearBtn) searchClearBtn.classList.remove('active');
      renderCourses('all', '');
    });
  }

  /* ----------------------------------------------------------------------------
   * 11. PRICING TABLE RENDERING
   * ---------------------------------------------------------------------------- */
  const pricingTableBody = document.getElementById('pricingTableBody');

  function renderPricingTable() {
    if (!pricingTableBody) return;
    pricingTableBody.innerHTML = '';

    coursesData.forEach((course, index) => {
      const tr = document.createElement('tr');
      const displayName = currentLanguage === 'ru' && course.name_ru ? course.name_ru :
                          currentLanguage === 'en' && course.name_en ? course.name_en : course.name;

      const displayDuration = currentLanguage === 'ru' && course.duration_ru ? course.duration_ru :
                              currentLanguage === 'en' && course.duration_en ? course.duration_en : course.duration;

      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>
          <div class="course-td-name">
            <div class="course-td-icon">
              <i class="fa-solid fa-code"></i>
            </div>
            <span>${displayName}</span>
          </div>
        </td>
        <td>${displayDuration}</td>
        <td>Haftada 6 kun (3 kun dars + 3 kun amaliyot)</td>
        <td><span class="price-tag-td">${course.priceFormatted}</span></td>
        <td>
          <button class="btn btn-primary btn-sm-table" data-course-id="${course.id}">
            Tanlash
          </button>
        </td>
      `;

      tr.querySelector('button').addEventListener('click', () => {
        selectCourseAndScrollToForm(course.id);
      });

      pricingTableBody.appendChild(tr);
    });
  }

  /* ----------------------------------------------------------------------------
   * 12. COMPETITIONS SECTION RENDERING
   * ---------------------------------------------------------------------------- */
  const competitionsGrid = document.getElementById('competitionsGrid');

  function renderCompetitions() {
    if (!competitionsGrid) return;
    competitionsGrid.innerHTML = '';

    competitionsData.forEach(comp => {
      const card = document.createElement('div');
      card.className = 'competition-card';
      card.innerHTML = `
        <div class="comp-img-wrapper">
          <img src="${comp.image}" alt="${comp.title}" loading="lazy">
          <span class="comp-status-badge ${comp.status}">${comp.statusText}</span>
        </div>
        <div class="comp-body">
          <div class="comp-date"><i class="fa-regular fa-calendar-check"></i> ${comp.dateFormatted}</div>
          <h3 class="comp-title">${comp.title}</h3>
          <p class="comp-desc">${comp.description}</p>
          <div class="comp-actions">
            <button class="btn btn-primary btn-comp-join" data-id="${comp.id}">
              <i class="fa-solid fa-flag-checkered"></i> Ishtirok etish
            </button>
            <button class="btn btn-outline btn-comp-details" data-id="${comp.id}">
              <i class="fa-solid fa-circle-info"></i> Batafsil
            </button>
          </div>
        </div>
      `;

      card.querySelector('.btn-comp-join').addEventListener('click', () => {
        showToast(
          `Musobaqaga yozilish (${comp.title})`,
          `Siz ushbu musobaqa uchun demo ro‘yxatdan o‘tdingiz! Boshlanish sanasi: ${comp.dateFormatted}`,
          'success'
        );
      });

      card.querySelector('.btn-comp-details').addEventListener('click', () => {
        showToast(
          comp.title,
          `${comp.description} Ushbu tadbir maktab ichki turniri bo'lib, o'quvchilar bepul qatnashadilar.`,
          'info'
        );
      });

      competitionsGrid.appendChild(card);
    });
  }

  /* ----------------------------------------------------------------------------
   * 13. TEACHERS SECTION RENDERING
   * ---------------------------------------------------------------------------- */
  const teachersGrid = document.getElementById('teachersGrid');

  function renderTeachers() {
    if (!teachersGrid) return;
    teachersGrid.innerHTML = '';

    teachersData.forEach(teacher => {
      const card = document.createElement('div');
      card.className = 'teacher-card';
      card.innerHTML = `
        <div class="teacher-avatar-wrapper">
          <img src="${teacher.avatar}" alt="${teacher.name}" loading="lazy">
          <span class="teacher-exp-badge">${teacher.experience}</span>
        </div>
        <h3 class="teacher-name">${teacher.name}</h3>
        <span class="teacher-subject">${teacher.subject}</span>
        <p class="teacher-bio">${teacher.bio}</p>
        <div class="teacher-tags">
          ${teacher.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
        <div class="teacher-socials">
          <a href="https://t.me/meta_it_school_placeholder" target="_blank" rel="noopener noreferrer" title="Telegram"><i class="fa-brands fa-telegram"></i></a>
          <a href="https://instagram.com/meta_it_school_placeholder" target="_blank" rel="noopener noreferrer" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      `;
      teachersGrid.appendChild(card);
    });
  }

  /* ----------------------------------------------------------------------------
   * 14. STUDENT PROJECTS PORTFOLIO RENDERING & FILTERING
   * ---------------------------------------------------------------------------- */
  const projectsGrid = document.getElementById('projectsGrid');
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');

  function renderProjects(category = 'all') {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const filtered = projectsData.filter(p => category === 'all' || p.category === category);

    filtered.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-img-wrapper">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy">
          <span class="project-category-badge">${proj.category.toUpperCase()}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
          <div class="project-techs">
            ${proj.techs.map(t => `<span>${t}</span>`).join('')}
          </div>
          <div class="project-author-row">
            <span><i class="fa-solid fa-user-astronaut"></i> ${proj.author}</span>
            <span class="text-success"><i class="fa-solid fa-circle-check"></i> Tayyor loyiha</span>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });
  }

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeProjectCategory = btn.getAttribute('data-filter');
      renderProjects(activeProjectCategory);
    });
  });

  /* ----------------------------------------------------------------------------
   * 15. NEWS SECTION RENDERING
   * ---------------------------------------------------------------------------- */
  const newsGrid = document.getElementById('newsGrid');

  function renderNews() {
    if (!newsGrid) return;
    newsGrid.innerHTML = '';

    newsData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'news-card';
      card.innerHTML = `
        <div class="news-img-wrapper">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="news-body">
          <div class="news-date"><i class="fa-regular fa-calendar"></i> ${item.date}</div>
          <h3 class="news-title">${item.title}</h3>
          <p class="news-excerpt">${item.excerpt}</p>
          <button class="news-link-btn" data-id="${item.id}">
            Batafsil o‘qish <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      `;

      card.querySelector('.news-link-btn').addEventListener('click', () => {
        showToast(
          item.title,
          item.fullText,
          'info'
        );
      });

      newsGrid.appendChild(card);
    });
  }

  /* ----------------------------------------------------------------------------
   * 16. COURSE SELECTION & POPULATING DROPDOWN IN REGISTRATION FORM
   * ---------------------------------------------------------------------------- */
  const courseSelect = document.getElementById('courseSelect');
  const coursePriceDisplay = document.getElementById('coursePriceDisplay');

  function populateCourseDropdown() {
    if (!courseSelect) return;
    const currentVal = courseSelect.value;
    courseSelect.innerHTML = `<option value="" disabled ${!currentVal ? 'selected' : ''}>-- Kursni tanlang --</option>`;

    coursesData.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `${c.name} — ${c.priceFormatted}`;
      if (currentVal === c.id) opt.selected = true;
      courseSelect.appendChild(opt);
    });

    updateSelectedCoursePrice();
  }

  function updateSelectedCoursePrice() {
    if (!courseSelect || !coursePriceDisplay) return;
    const selectedId = courseSelect.value;
    const found = coursesData.find(c => c.id === selectedId);

    if (found) {
      coursePriceDisplay.innerHTML = `<span class="price-amount">${found.priceFormatted}</span>`;
    } else {
      coursePriceDisplay.innerHTML = `<span class="price-amount">—</span>`;
    }
  }

  if (courseSelect) {
    courseSelect.addEventListener('change', updateSelectedCoursePrice);
  }

  function selectCourseAndScrollToForm(courseId) {
    const registerSection = document.getElementById('register');
    if (courseSelect) {
      courseSelect.value = courseId;
      updateSelectedCoursePrice();
    }
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Also close modal if open
    closeCourseModal();
  }

  // Make helper available globally for footer clicks
  window.filterAndScroll = function(courseKeyword) {
    const found = coursesData.find(c => c.name.toLowerCase().includes(courseKeyword.toLowerCase()));
    if (found) {
      selectCourseAndScrollToForm(found.id);
    } else {
      const coursesSection = document.getElementById('courses');
      if (coursesSection) coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ----------------------------------------------------------------------------
   * 17. COURSE DETAILS MODAL (POPUP)
   * ---------------------------------------------------------------------------- */
  const courseModalOverlay = document.getElementById('courseModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');

  function openCourseModal(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course || !modalBody || !courseModalOverlay) return;

    modalBody.innerHTML = `
      <img src="${course.image}" alt="${course.name}" class="course-modal-img">
      <h2 class="modal-course-title">${course.name}</h2>
      
      <div class="modal-course-meta">
        <span><i class="fa-regular fa-clock"></i> Davomiyligi: <strong>${course.duration}</strong></span>
        <span><i class="fa-solid fa-calendar-check"></i> Tartib: <strong>Haftada 6 kun</strong></span>
        <span><i class="fa-solid fa-certificate"></i> <strong>Rasmiy Sertifikat</strong></span>
      </div>

      <p class="course-desc" style="font-size: 1rem; margin-bottom: 1.5rem;">${course.description}</p>

      <h4 class="modal-section-title"><i class="fa-solid fa-list-check"></i> Kursda o'rganiladigan asosiy modullar:</h4>
      <div class="modal-syllabus-grid">
        ${course.topics.map(t => `
          <div class="syllabus-item">
            <i class="fa-solid fa-circle-check"></i>
            <span>${t}</span>
          </div>
        `).join('')}
      </div>

      <div class="modal-price-box">
        <div>
          <span style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase;">Belgilangan oylik to'lov</span>
          <div class="modal-price-val">${course.priceFormatted}</div>
        </div>
        <button class="btn btn-primary" id="modalEnrollBtn">
          <i class="fa-solid fa-user-plus"></i> Ushbu kursga yozilish
        </button>
      </div>
    `;

    const modalEnrollBtn = modalBody.querySelector('#modalEnrollBtn');
    if (modalEnrollBtn) {
      modalEnrollBtn.addEventListener('click', () => {
        selectCourseAndScrollToForm(course.id);
      });
    }

    courseModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCourseModal() {
    if (courseModalOverlay) {
      courseModalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCourseModal);
  if (courseModalOverlay) {
    courseModalOverlay.addEventListener('click', (e) => {
      if (e.target === courseModalOverlay) closeCourseModal();
    });
  }

  /* ----------------------------------------------------------------------------
   * 18. SHIFT TOGGLE (KUNDUZGI / KECHKI SMENA)
   * ---------------------------------------------------------------------------- */
  const shiftDayBtn = document.getElementById('shiftDayBtn');
  const shiftEveningBtn = document.getElementById('shiftEveningBtn');
  const timeSlotTexts = document.querySelectorAll('.time-slot-text');

  function updateShift(shift) {
    currentShift = shift;
    if (shift === 'day') {
      if (shiftDayBtn) shiftDayBtn.classList.add('active');
      if (shiftEveningBtn) shiftEveningBtn.classList.remove('active');
      timeSlotTexts.forEach(el => el.textContent = '09:00 - 12:00 / 14:00 - 17:00');
    } else {
      if (shiftDayBtn) shiftDayBtn.classList.remove('active');
      if (shiftEveningBtn) shiftEveningBtn.classList.add('active');
      timeSlotTexts.forEach(el => el.textContent = '18:00 - 21:00 (Kechki smena)');
    }
  }

  if (shiftDayBtn) shiftDayBtn.addEventListener('click', () => updateShift('day'));
  if (shiftEveningBtn) shiftEveningBtn.addEventListener('click', () => updateShift('evening'));

  /* ----------------------------------------------------------------------------
   * 19. FAQ ACCORDION HANDLER
   * ---------------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other accordion items
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });

        item.classList.toggle('active', !isActive);
      });
    }
  });

  /* ----------------------------------------------------------------------------
   * 20. REGISTRATION FORM VALIDATION & LOCALSTORAGE SUBMISSION ENGINE
   * ---------------------------------------------------------------------------- */
  const registrationForm = document.getElementById('registrationForm');
  const formAlert = document.getElementById('formAlert');
  const resetFormBtn = document.getElementById('resetFormBtn');

  // Input elements
  const inputFullName = document.getElementById('fullName');
  const inputPhoneNumber = document.getElementById('phoneNumber');
  const inputUserAge = document.getElementById('userAge');
  const inputUserComment = document.getElementById('userComment');

  // Error spans
  const errorFullName = document.getElementById('errorFullName');
  const errorPhoneNumber = document.getElementById('errorPhoneNumber');
  const errorUserAge = document.getElementById('errorUserAge');
  const errorCourseSelect = document.getElementById('errorCourseSelect');

  // Phone input mask / auto formatting
  if (inputPhoneNumber) {
    inputPhoneNumber.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (!val.startsWith('998')) {
        val = '998' + val;
      }
      val = val.substring(0, 12); // 998 + 9 digits

      let formatted = '+';
      if (val.length > 0) formatted += val.substring(0, 3);
      if (val.length >= 4) formatted += ' (' + val.substring(3, 5) + ')';
      if (val.length >= 6) formatted += ' ' + val.substring(5, 8);
      if (val.length >= 9) formatted += ' ' + val.substring(8, 10);
      if (val.length >= 11) formatted += ' ' + val.substring(10, 12);

      e.target.value = formatted;
    });
  }

  function clearFormErrors() {
    if (errorFullName) errorFullName.textContent = '';
    if (errorPhoneNumber) errorPhoneNumber.textContent = '';
    if (errorUserAge) errorUserAge.textContent = '';
    if (errorCourseSelect) errorCourseSelect.textContent = '';
    if (formAlert) {
      formAlert.className = 'form-alert hidden';
      formAlert.textContent = '';
    }
  }

  function validateForm() {
    clearFormErrors();
    let isValid = true;

    // Full name
    const nameVal = inputFullName ? inputFullName.value.trim() : '';
    if (!nameVal || nameVal.length < 3) {
      if (errorFullName) errorFullName.textContent = 'Iltimos, haqiqiy ism va familiyangizni kiriting (kamida 3 belgi).';
      isValid = false;
    }

    // Phone number
    const phoneVal = inputPhoneNumber ? inputPhoneNumber.value.trim() : '';
    const digitsOnly = phoneVal.replace(/\D/g, '');
    if (digitsOnly.length < 12) {
      if (errorPhoneNumber) errorPhoneNumber.textContent = 'Iltimos, to‘liq telefon raqamingizni kiriting (+998 xx xxx xx xx).';
      isValid = false;
    }

    // Age
    const ageVal = inputUserAge ? parseInt(inputUserAge.value, 10) : 0;
    if (isNaN(ageVal) || ageVal < 7 || ageVal > 65) {
      if (errorUserAge) errorUserAge.textContent = 'Yosh 7 dan 65 gacha bo‘lishi kerak.';
      isValid = false;
    }

    // Course
    const selectedCourse = courseSelect ? courseSelect.value : '';
    if (!selectedCourse) {
      if (errorCourseSelect) errorCourseSelect.textContent = 'Iltimos, o‘rganmoqchi bo‘lgan kursingizni tanlang.';
      isValid = false;
    }

    return isValid;
  }

  if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm()) {
        if (formAlert) {
          formAlert.className = 'form-alert error';
          formAlert.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Maydonlarda xatoliklar mavjud. Qizil bilan belgilangan qismlarni to‘g‘rilang.';
        }
        return;
      }

      // Read Shift
      const shiftRadio = document.querySelector('input[name="studyShift"]:checked');
      const studyShift = shiftRadio ? shiftRadio.value : 'Kunduzgi';

      const selectedCourseObj = coursesData.find(c => c.id === courseSelect.value);

      const submissionData = {
        id: 'APP-' + Date.now().toString().slice(-6),
        fullName: inputFullName.value.trim(),
        phoneNumber: inputPhoneNumber.value.trim(),
        age: inputUserAge.value.trim(),
        courseId: selectedCourseObj ? selectedCourseObj.id : '',
        courseName: selectedCourseObj ? selectedCourseObj.name : '',
        monthlyFee: selectedCourseObj ? selectedCourseObj.priceFormatted : '',
        studyShift: studyShift,
        comment: inputUserComment ? inputUserComment.value.trim() : '',
        submittedAt: new Date().toLocaleString('uz-UZ')
      };

      // Save to localStorage
      try {
        const stored = JSON.parse(localStorage.getItem('meta_it_submissions') || '[]');
        stored.unshift(submissionData);
        localStorage.setItem('meta_it_submissions', JSON.stringify(stored));
      } catch (err) {
        console.error('LocalStorage write error', err);
      }

      // Update Submissions Count
      updateSubmissionsCount();

      // Show Success Message
      if (formAlert) {
        formAlert.className = 'form-alert success';
        formAlert.innerHTML = `
          <strong><i class="fa-solid fa-circle-check"></i> Ariza muvaffaqiyatli saqlandi!</strong><br>
          Hurmatli ${submissionData.fullName}, siz <em>${submissionData.courseName}</em> kursi uchun muvaffaqiyatli ro'yxatdan o'tdingiz. 
          <br><small>Eslatma: Sayt demo rejimda ishlayotgani sababli, arizangiz brauzeringizning <code>localStorage</code> xotirasiga yozildi.</small>
        `;
      }

      showToast(
        'Ariza qabul qilindi!',
        `${submissionData.fullName}, sizning arizangiz demo rejimda saqlandi.`,
        'success'
      );

      // Reset fields
      registrationForm.reset();
      updateSelectedCoursePrice();
    });
  }

  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
      clearFormErrors();
      setTimeout(updateSelectedCoursePrice, 50);
    });
  }

  /* ----------------------------------------------------------------------------
   * 21. LOCALSTORAGE SUBMISSIONS VIEWER (DEMO MODAL)
   * ---------------------------------------------------------------------------- */
  const viewSubmissionsBtn = document.getElementById('viewSubmissionsBtn');
  const submissionsModalOverlay = document.getElementById('submissionsModalOverlay');
  const subModalCloseBtn = document.getElementById('subModalCloseBtn');
  const submissionsListContainer = document.getElementById('submissionsListContainer');
  const clearAllSubmissionsBtn = document.getElementById('clearAllSubmissionsBtn');
  const submissionsCountEl = document.getElementById('submissionsCount');

  function updateSubmissionsCount() {
    if (!submissionsCountEl) return;
    try {
      const stored = JSON.parse(localStorage.getItem('meta_it_submissions') || '[]');
      submissionsCountEl.textContent = stored.length;
    } catch {
      submissionsCountEl.textContent = '0';
    }
  }

  function renderSubmissionsViewer() {
    if (!submissionsListContainer) return;
    let stored = [];
    try {
      stored = JSON.parse(localStorage.getItem('meta_it_submissions') || '[]');
    } catch (e) {
      stored = [];
    }

    if (stored.length === 0) {
      submissionsListContainer.innerHTML = `
        <div class="empty-submissions">
          <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 0.75rem; color: var(--text-light);"></i>
          <p>Hozircha hech qanday ariza yuborilmagan.</p>
        </div>
      `;
      return;
    }

    let html = `
      <div style="overflow-x: auto;">
        <table class="submissions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ism va Familiya</th>
              <th>Telefon</th>
              <th>Yosh</th>
              <th>Tanlangan Kurs</th>
              <th>Smena</th>
              <th>Sana</th>
            </tr>
          </thead>
          <tbody>
    `;

    stored.forEach(item => {
      html += `
        <tr>
          <td><strong>${item.id}</strong></td>
          <td>${item.fullName}</td>
          <td>${item.phoneNumber}</td>
          <td>${item.age}</td>
          <td><span class="day-badge main" style="font-size: 0.75rem;">${item.courseName}</span></td>
          <td>${item.studyShift}</td>
          <td><small>${item.submittedAt}</small></td>
        </tr>
      `;
    });

    html += `</tbody></table></div>`;
    submissionsListContainer.innerHTML = html;
  }

  if (viewSubmissionsBtn) {
    viewSubmissionsBtn.addEventListener('click', () => {
      renderSubmissionsViewer();
      if (submissionsModalOverlay) {
        submissionsModalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  if (subModalCloseBtn) {
    subModalCloseBtn.addEventListener('click', () => {
      if (submissionsModalOverlay) {
        submissionsModalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (submissionsModalOverlay) {
    submissionsModalOverlay.addEventListener('click', (e) => {
      if (e.target === submissionsModalOverlay) {
        submissionsModalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (clearAllSubmissionsBtn) {
    clearAllSubmissionsBtn.addEventListener('click', () => {
      if (confirm('Barcha saqlangan demo arizalarni o‘chirmoqchimisiz?')) {
        localStorage.removeItem('meta_it_submissions');
        updateSubmissionsCount();
        renderSubmissionsViewer();
        showToast('Tozalandi', 'Barcha demo arizalar xotiradan muvaffaqiyatli o‘chirildi.', 'info');
      }
    });
  }

  updateSubmissionsCount();

  /* ----------------------------------------------------------------------------
   * 22. MOBILE HAMBURGER MENU NAVIGATION
   * ---------------------------------------------------------------------------- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMobileMenu() {
    const isActive = navMenu.classList.contains('active');
    navMenu.classList.toggle('active', !isActive);
    hamburgerBtn.classList.toggle('active', !isActive);
    if (menuBackdrop) menuBackdrop.classList.toggle('active', !isActive);
    document.body.style.overflow = !isActive ? 'hidden' : '';
  }

  function closeMobileMenu() {
    if (navMenu) navMenu.classList.remove('active');
    if (hamburgerBtn) hamburgerBtn.classList.remove('active');
    if (menuBackdrop) menuBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMobileMenu);
  if (menuBackdrop) menuBackdrop.addEventListener('click', closeMobileMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ----------------------------------------------------------------------------
   * 23. ACTIVE NAVBAR LINK ON SCROLL & STICKY NAVBAR SHADOW
   * ---------------------------------------------------------------------------- */
  const navbarHeader = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Sticky shadow
    if (navbarHeader) {
      navbarHeader.classList.toggle('scrolled', scrollY > 40);
    }

    // Back to top visible
    if (backToTopBtn) {
      backToTopBtn.classList.toggle('visible', scrollY > 400);
    }

    // Active Section highlight
    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 120;
      const secId = sec.getAttribute('id');

      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ----------------------------------------------------------------------------
   * 24. TOAST NOTIFICATION SYSTEM
   * ---------------------------------------------------------------------------- */
  function showToast(title, message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'fa-solid fa-circle-info';
    if (type === 'success') iconClass = 'fa-solid fa-circle-check';
    if (type === 'error') iconClass = 'fa-solid fa-circle-exclamation';

    toast.innerHTML = `
      <i class="${iconClass} toast-icon"></i>
      <div class="toast-content">
        <h4 class="toast-title">${title}</h4>
        <p class="toast-msg">${message}</p>
      </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }

  // Update current year dynamically in footer
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  /* ----------------------------------------------------------------------------
   * 25. INITIALIZE ALL COMPONENTS
   * ---------------------------------------------------------------------------- */
  setLanguage(currentLanguage);
  renderCompetitions();
  renderTeachers();
  renderProjects('all');
  renderNews();

  console.log('META IT SCHOOL Portal fully loaded & initialized successfully.');
});
