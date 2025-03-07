// illArray illustration
// desArray design
// aniArray animation
//bir önceki itemı kopyala virgül koymayı unutma köşeli parantezin kapanışından sonra

// name kısmına isim
// bigphotopath kısmına büyük fotoğrafı site dosyalarının içinde attığın yerin yolu
// placeholderpath kısmına placeholderı site dosyalarının içinde attığın yerin yolu
// type kısmına "photo" ve "video" yazacaksın
// video url kısmını köşeli parantez [] içinde yazacaksın linkleri tırnak içinde yazacaksın birden fazla link eklemek için her bir linki tırnak içinde aralarında virgülle köşeli parantezlerin içine yazacaksın örn: ["url1","url2","url3"]

// fotoğraflar için bigphotopathe videolar için videourlye linkler

// IKILI EKLEME
// {
//    name: "SPORTS_", ISIM
//    bigPhotoPath: "", BOŞ
//    placeHolderPath: "assets/content/aniplaceholder/4.jpg", PLACEHOLDER YOLU
//    type: "both", TİP both olcak küçük harf hepsi
//    videoURL: "",
//    urls: [{
//          type: "video",
//          url: "https://player.vimeo.com/video/422240350?h=fe81d31e41"
//       },
//       {
//          type: "photo",
//          url: "assets/content/ill/KURBAĞA KRAL.jpg"
//       }
//    ]  urlerler için şema [ {type:tipi,url: urlsi} , {type ve url } ]
// },

// bu gada

const illArray = [
  {
    name: 'BEZEMELİ',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/bezeme-kucuk.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/bezemeli copy.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/bezemeli2 copy.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/bezemeli3 copy.jpg',
      },
    ],
  },
  {
    name: 'FLOWUTY FLOWERS',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/flowuty-kucuk.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty1-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty2-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty3-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty4-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty5-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty6-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty7-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty8-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty9-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty10-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty11-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty12-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty13-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty14-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty15-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flowuty16-min.JPG',
      },
    ],
  },
  {
    name: 'GORİL ÇİZGİ ROMAN',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/goril-kucuk.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/obe3-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/obe2-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/obe-min.JPG',
      },
    ],
  },
  {
    name: 'KARGIŞ',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/kargis-kucuk.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/kargis1.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/kargis2.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/kargis3.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/kargis4.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/kargis5.JPG',
      },
    ],
  },
  {
    name: 'DTIYS',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/dtiys1-kucuk.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/dtiys1-min.JPG',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/dtiys2-min.JPG',
      },
    ],
  },
  {
    name: 'HELLBOY',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/hellboy-kucuk.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/hellboy.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/hellboy2.JPG',
      },
    ],
  },
  {
    name: 'FRAME',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/frame-kucuk.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/frame1-min.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/frame2-min.JPG',
      },
    ],
  },
  {
    name: 'FLOWER GIRLS',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/flower-girl-kucuk.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/kadınlar-min.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/flower-girl-min.JPG',
      },
    ],
  },
  {
    name: 'GÜZEL KIZLAR',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/guzel-kiz-kucuk.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/güzelKız-min.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/bir-başka-güzel-kadın-min.jpg',
      },
    ],
  },
  {
    name: 'VAHŞİ ÇİÇEK REMAKE',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/vahsi-cicek2-kucuk.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/vahşiÇiçekRemake -min.jpg',
      },
    ],
  },
  {
    name: 'RED UMBRELLA',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/red-umbrella-kucuk.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/redUmbrella-min.jpg',
      },
    ],
  },
  {
    name: 'DREAM',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/dream-kucuk.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/dream-min.jpg',
      },
    ],
  },
  {
    name: 'SOLUCANIN GÜNÜ',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/solucan-kucuk.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/solucan-min.JPG',
      },
    ],
  },
  {
    name: 'LAST SUMMER WHISPER',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/21.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/669156238?h=18a8c36c61',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/669156619?h=f233614931',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/LAST SUMMER WHISPER.jpg',
      },
    ],
  },
  {
    name: 'VAHŞİ KADIN',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/19.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/658941137?h=9a825b198c',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/VAHŞİ KADIN.jpg',
      },
    ],
  },
  {
    name: 'KAPLAN',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/20.jpg',
    type: 'both',
    videoURL: '',
    urls: [
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/658941596?h=e09992c4dc',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/KAPLAN.jpg',
      },
    ],
  },
  {
    name: 'KADIRGA',
    bigPhotoPath: 'assets/content/ill/KADIRGA.jpg',
    placeHolderPath: 'assets/content/illplaceholder/1.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'KAFA KAFA İÇİNDE',
    bigPhotoPath: 'assets/content/ill/KAFA KAFA İÇİNDE.jpg',
    placeHolderPath: 'assets/content/illplaceholder/2.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'TİMSAH KIZ',
    bigPhotoPath: 'assets/content/ill/TİMSAH KIZ.jpg',
    placeHolderPath: 'assets/content/illplaceholder/3.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'KAYALIK',
    bigPhotoPath: 'assets/content/ill/KAYALIK.jpg',
    placeHolderPath: 'assets/content/illplaceholder/4.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'BOKSÖR',
    bigPhotoPath: 'assets/content/ill/BOKSÖR.jpg',
    placeHolderPath: 'assets/content/illplaceholder/5.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'DİLLİ BEYİNLİ',
    bigPhotoPath: 'assets/content/ill/DİLLİ BEYİNLİ.jpg',
    placeHolderPath: 'assets/content/illplaceholder/6.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'KARANLIK SİSLİ BİR ORMAN GECESİ',
    bigPhotoPath: 'assets/content/ill/KARANLIK SİSLİ BİR ORMAN GECESİ.jpg',
    placeHolderPath: 'assets/content/illplaceholder/7.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'UZAY KARANLIĞI',
    bigPhotoPath: 'assets/content/ill/UZAY KARANLIĞI.jpg',
    placeHolderPath: 'assets/content/illplaceholder/8.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'VAHŞİ ÇİÇEK',
    bigPhotoPath: 'assets/content/ill/VAHŞİ ÇİÇEK.jpg',
    placeHolderPath: 'assets/content/illplaceholder/9.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'SU ALTI',
    bigPhotoPath: 'assets/content/ill/SU ALTI.jpg',
    placeHolderPath: 'assets/content/illplaceholder/10.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'BATAKLIK',
    bigPhotoPath: 'assets/content/ill/BATAKLIK.jpg',
    placeHolderPath: 'assets/content/illplaceholder/11.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'EJDERHA',
    bigPhotoPath: 'assets/content/ill/EJDERHA.jpg',
    placeHolderPath: 'assets/content/illplaceholder/12.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'KAYA ADAMLAR',
    bigPhotoPath: 'assets/content/ill/KAYA ADAMLAR.jpg',
    placeHolderPath: 'assets/content/illplaceholder/13.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'TAŞ TAŞIYAN',
    bigPhotoPath: 'assets/content/ill/TAŞ TAŞIYAN.jpg',
    placeHolderPath: 'assets/content/illplaceholder/14.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'TELEVİZYON',
    bigPhotoPath: 'assets/content/ill/TELEVİZYON.jpg',
    placeHolderPath: 'assets/content/illplaceholder/15.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'BEBEK',
    bigPhotoPath: 'assets/content/ill/BEBEK.jpg',
    placeHolderPath: 'assets/content/illplaceholder/16.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'KURBAĞA KRAL',
    bigPhotoPath: 'assets/content/ill/KURBAĞA KRAL.jpg',
    placeHolderPath: 'assets/content/illplaceholder/17.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'DENİZ FENERİ',
    bigPhotoPath: 'assets/content/ill/DENİZ FENERİ.jpg',
    placeHolderPath: 'assets/content/illplaceholder/18.jpg',
    type: 'photo',
    videoURL: '',
  },
]
const desArray = [
  {
    name: 'CAN KOÇ - CANAVAR / MÜZİK KLİBİ',
    placeHolderPath: 'assets/content/desplaceholder/can-koc-kucuk.jpg',
    type: 'both',
    urls: [
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/1060970625?h=54ad8b6840',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/1060959724?h=d32108f9a5',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/1060959741?h=14325ad7c6',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/1060959764?h=08628ae4b3',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/1060959791?h=193c9ef5dd',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/1060959811?h=6a0ebb3bdb',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/1060959831?h=4fee153c5f',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/1060959859?h=655eee4c9c',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/1060959892?h=c3d48161c3',
      },
    ],
  },
  {
    name: 'ARKADAŞIM ÇELİK / ÇOCUK KİTABI',
    placeHolderPath: 'assets/content/desplaceholder/arkadasim-celik-kucuk.jpg',
    type: 'both',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/des/vinyet.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/ac1.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/ac2.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/ac3.jpg',
      },
    ],
  },
  {
    name: 'FENERBAHÇE MEDICANA',
    placeHolderPath: 'assets/content/desplaceholder/fmb-kucuk.jpg',
    type: 'both',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/des/fbm-behance-02.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/fbm-behance-01.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/arina-fedorovtseva.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/matchday.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/gizem-orge.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/match-post.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/mac-sonu.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/ilk6.jpg',
      },
    ],
  },
  {
    name: 'ANATOLIAN SPACESHIP / ALBUM COVER',
    placeHolderPath: 'assets/content/desplaceholder/asp-kucuk.jpg',
    type: 'both',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/des/asp.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/asp1.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/asp2.jpg',
      },
    ],
  },
  {
    name: 'UMS METAL / SOSYAL MEDYA',
    placeHolderPath: 'assets/content/desplaceholder/ums-kucuk.jpg',
    type: 'both',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/des/ums-sm.jpg',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/799309159?h=c95641ee0a',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/799308563?h=6975a92d28',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/883805641?h=d6db2f195e',
      },
      {
        type: 'photo',
        url: 'assets/content/des/imza-03-03.jpg',
      },
    ],
  },
  {
    name: 'AMATİS TOUR / KURUMSAL KİMLİK',
    placeHolderPath: 'assets/content/desplaceholder/amatis-kucuk.jpg',
    type: 'both',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/des/amatis-sm.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/amatis-kurumsal-01.jpg',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/883808030?h=3112201cd4',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/883808220?h=dd8d45778a',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/883808305?h=a6aa482a17',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/883808370?h=01d72ca23a',
      },
      {
        type: 'photo',
        url: 'assets/content/des/imza-03-03.jpg',
      },
    ],
  },
  {
    name: 'STEFAN ZWEIG / BOOK COVER',
    bigPhotoPath: 'assets/content/des/STEFAN ZWEIG.jpg',
    placeHolderPath: 'assets/content/desplaceholder/7.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'SOLAR START / SOSYAL MEDYA',
    placeHolderPath: 'assets/content/desplaceholder/solar-kucuk.jpg',
    type: 'both',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/des/solar-sm.jpg',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/883806546?h=f48bd2191f',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/883806991?h=1b4200e83d',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/883807118?h=019631b177',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/883807470?h=38bc0e333b',
      },
      {
        type: 'photo',
        url: 'assets/content/des/imza-03-03.jpg',
      },
    ],
  },
  {
    name: 'OPENEYE / KURUMSAL KİMLİK',
    bigPhotoPath: 'assets/content/des/OPENEYE.jpg',
    placeHolderPath: 'assets/content/aniplaceholder/1.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'BEST ALÜMİNYUM / KATALOG',
    placeHolderPath: 'assets/content/desplaceholder/best-kucuk.jpg',
    type: 'both',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/des/best-katalog-01.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/imza-03-03.jpg',
      },
    ],
  },
  {
    name: 'CREADERM / KONSEPT - AMBALAJ',
    placeHolderPath: 'assets/content/desplaceholder/creaderm-kucuk.jpg',
    type: 'both',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/des/creaderm-foto-01.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/creaderm-ambalaj-02.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/des/imza-03-03.jpg',
      },
    ],
  },
  {
    name: 'LOGO ANİMASYON',
    placeHolderPath: 'assets/content/desplaceholder/logo-ani-kucuk.jpg',
    type: 'both',
    urls: [
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/883808675?h=f44087f338',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/883809189?h=43a7f60865',
      },
      {
        type: 'photo',
        url: 'assets/content/des/imza-03-03.jpg',
      },
    ],
  },
 // {
   // name: 'AFTER EFFECTS DESIGN',
   // bigPhotoPath: '',
   // placeHolderPath: 'assets/content/desplaceholder/9.jpg',
   // type: 'video',
   // videoURL: [
   //   'https://player.vimeo.com/video/799308563?h=6975a92d28',
   //   'https://player.vimeo.com/video/799309159?h=c95641ee0a',
   //   'https://player.vimeo.com/video/799311190?h=22668ca46d',
   //   'https://player.vimeo.com/video/799310020?h=acf8969d6a',
   //   'https://player.vimeo.com/video/799310304?h=c58363f65f',
   //   'https://player.vimeo.com/video/656051609?h=7d57e2e5a8',
   //   'https://player.vimeo.com/video/656052505?h=e1ad6ec228',
   //   'https://player.vimeo.com/video/656053837?h=0676334806',
   // ],
  //},
  {
    name: 'MODERN ANADOL / KURUMSAL KİMLİK',
    bigPhotoPath: 'assets/content/des/MODERN ANADOL.jpg',
    placeHolderPath: 'assets/content/desplaceholder/2.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'SU İÇMEYİ BULAN ADAM / ÇİZGİ ROMAN',
    bigPhotoPath: 'assets/content/des/SU İÇMEYİ BULAN ADAM.jpg',
    placeHolderPath: 'assets/content/desplaceholder/3.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'DERDİYOKLAR İKİLİSİ / ALBUM COVER',
    bigPhotoPath: 'assets/content/des/DERDİYOKLAR İKİLİSİ.jpg',
    placeHolderPath: 'assets/content/desplaceholder/4.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'AŞIK EMRAH / ALBUM COVER',
    bigPhotoPath: 'assets/content/des/AŞIK EMRAH.jpg',
    placeHolderPath: 'assets/content/desplaceholder/5.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'ERKİN KORAY / ALBUM COVER',
    bigPhotoPath: 'assets/content/des/ERKİN KORAY.jpg',
    placeHolderPath: 'assets/content/desplaceholder/6.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'POSTER DESIGN',
    bigPhotoPath: 'assets/content/des/POSTER DESIGN.jpg',
    placeHolderPath: 'assets/content/desplaceholder/8.jpg',
    type: 'photo',
    videoURL: '',
  },
]
const aniArray = [
  {
    name: 'CAN KOÇ - CANAVAR / MÜZİK KLİBİ',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/aniplaceholder/can-koc-kucuk.jpg',
    type: 'video',
    videoURL: ['https://player.vimeo.com/video/1060970625?h=54ad8b6840'],
  },
  {
    name: 'OPENEYE TRAILER',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/aniplaceholder/1.jpg',
    type: 'video',
    videoURL: ['https://player.vimeo.com/video/490751806?h=4f0be92a52'],
  },
  {
    name: 'OPENEYE MOTION POSTER',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/aniplaceholder/1.jpg',
    type: 'video',
    videoURL: ['https://player.vimeo.com/video/638860635?h=0cfb99b9fe'],
  },
  {
    name: 'FISH',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/aniplaceholder/3.jpg',
    type: 'video',
    videoURL: ['https://player.vimeo.com/video/411335446?h=db099e0e93'],
  },
  {
    name: 'SPORTS',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/aniplaceholder/4.jpg',
    type: 'video',
    videoURL: ['https://player.vimeo.com/video/422240350?h=fe81d31e41'],
  },
]
