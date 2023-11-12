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
    type: 'photo',
    videoURL: '',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/ill/bezemeli copy-min.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/bezemeli2 copy-min.jpg',
      },
      {
        type: 'photo',
        url: 'assets/content/ill/bezemeli3 copy-min.jpg',
      },
    ],
  },
  {
    name: 'DTIYS',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/dtiys1-kucuk.jpg',
    type: 'photo',
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
    name: 'GORİL ÇİZGİ ROMAN',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/illplaceholder/goril-kucuk.jpg',
    type: 'photo',
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
    name: 'UMS METAL',
    placeHolderPath: 'assets/content/desplaceholder/ums-kucuk.jpg',
    type: 'both',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/des/ums-sm-min.jpg',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/799309159?h=c95641ee0a',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/799308563?h=6975a92d28',
      },
    ],
  },
  {
    name: 'AMATİS TOUR',
    placeHolderPath: 'assets/content/desplaceholder/amatis-kucuk.jpg',
    type: 'both',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/des/amatis-sm-min.jpg',
      },
    ],
  },
  {
    name: 'SOLAR START',
    placeHolderPath: 'assets/content/desplaceholder/solar-kucuk.jpg',
    type: 'both',
    urls: [
      {
        type: 'photo',
        url: 'assets/content/des/solar-sm-min.jpg',
      },
    ],
  },
  {
    name: 'AFTER EFFECTS DESIGN',
    bigPhotoPath: '',
    placeHolderPath: 'assets/content/desplaceholder/9.jpg',
    type: 'video',
    videoURL: [
      'https://player.vimeo.com/video/799308563?h=6975a92d28',
      'https://player.vimeo.com/video/799309159?h=c95641ee0a',
      'https://player.vimeo.com/video/799311190?h=22668ca46d',
      'https://player.vimeo.com/video/799310020?h=acf8969d6a',
      'https://player.vimeo.com/video/799310304?h=c58363f65f',
      'https://player.vimeo.com/video/656051609?h=7d57e2e5a8',
      'https://player.vimeo.com/video/656052505?h=e1ad6ec228',
      'https://player.vimeo.com/video/656053837?h=0676334806',
    ],
  },
  {
    name: 'OPENEYE',
    bigPhotoPath: 'assets/content/des/OPENEYE.jpg',
    placeHolderPath: 'assets/content/aniplaceholder/1.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'MODERN ANADOL',
    bigPhotoPath: 'assets/content/des/MODERN ANADOL.jpg',
    placeHolderPath: 'assets/content/desplaceholder/2.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'SU İÇMEYİ BULAN ADAM',
    bigPhotoPath: 'assets/content/des/SU İÇMEYİ BULAN ADAM.jpg',
    placeHolderPath: 'assets/content/desplaceholder/3.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'DERDİYOKLAR İKİLİSİ ALBUM COVER',
    bigPhotoPath: 'assets/content/des/DERDİYOKLAR İKİLİSİ.jpg',
    placeHolderPath: 'assets/content/desplaceholder/4.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'AŞIK EMRAH ALBUM COVER',
    bigPhotoPath: 'assets/content/des/AŞIK EMRAH.jpg',
    placeHolderPath: 'assets/content/desplaceholder/5.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'ERKİN KORAY ALBUM COVER',
    bigPhotoPath: 'assets/content/des/ERKİN KORAY.jpg',
    placeHolderPath: 'assets/content/desplaceholder/6.jpg',
    type: 'photo',
    videoURL: '',
  },
  {
    name: 'STEFAN ZWEIG BOOK COVER',
    bigPhotoPath: 'assets/content/des/STEFAN ZWEIG.jpg',
    placeHolderPath: 'assets/content/desplaceholder/7.jpg',
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
