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





const illArray = [{
      name: "KADIRGA",
      bigPhotoPath: "assets/content/ill/KADIRGA.jpg",
      placeHolderPath: "assets/content/illplaceholder/1.jpg",
      type: "photo",
      videoURL: "",
   },
   {
      name: "KAFA KAFA İÇİNDE",
      bigPhotoPath: "assets/content/ill/KAFA KAFA İÇİNDE.jpg",
      placeHolderPath: "assets/content/illplaceholder/2.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "TİMSAH KIZ",
      bigPhotoPath: "assets/content/ill/TİMSAH KIZ.jpg",
      placeHolderPath: "assets/content/illplaceholder/3.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "KAYALIK",
      bigPhotoPath: "assets/content/ill/KAYALIK.jpg",
      placeHolderPath: "assets/content/illplaceholder/4.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "BOKSÖR",
      bigPhotoPath: "assets/content/ill/BOKSÖR.jpg",
      placeHolderPath: "assets/content/illplaceholder/5.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "DİLLİ BEYİNLİ",
      bigPhotoPath: "assets/content/ill/DİLLİ BEYİNLİ.jpg",
      placeHolderPath: "assets/content/illplaceholder/6.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "KARANLIK SİSLİ BİR ORMAN GECESİ",
      bigPhotoPath: "assets/content/ill/KARANLIK SİSLİ BİR ORMAN GECESİ.jpg",
      placeHolderPath: "assets/content/illplaceholder/7.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "UZAY KARANLIĞI",
      bigPhotoPath: "assets/content/ill/UZAY KARANLIĞI.jpg",
      placeHolderPath: "assets/content/illplaceholder/8.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "VAHŞİ ÇİÇEK",
      bigPhotoPath: "assets/content/ill/VAHŞİ ÇİÇEK.jpg",
      placeHolderPath: "assets/content/illplaceholder/9.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "SU ALTI",
      bigPhotoPath: "assets/content/ill/SU ALTI.jpg",
      placeHolderPath: "assets/content/illplaceholder/10.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "BATAKLIK",
      bigPhotoPath: "assets/content/ill/BATAKLIK.jpg",
      placeHolderPath: "assets/content/illplaceholder/11.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "EJDERHA",
      bigPhotoPath: "assets/content/ill/EJDERHA.jpg",
      placeHolderPath: "assets/content/illplaceholder/12.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "KAYA ADAMLAR",
      bigPhotoPath: "assets/content/ill/KAYA ADAMLAR.jpg",
      placeHolderPath: "assets/content/illplaceholder/13.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "TAŞ TAŞIYAN",
      bigPhotoPath: "assets/content/ill/TAŞ TAŞIYAN.jpg",
      placeHolderPath: "assets/content/illplaceholder/14.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "TELEVİZYON",
      bigPhotoPath: "assets/content/ill/TELEVİZYON.jpg",
      placeHolderPath: "assets/content/illplaceholder/15.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "BEBEK",
      bigPhotoPath: "assets/content/ill/BEBEK.jpg",
      placeHolderPath: "assets/content/illplaceholder/16.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "KURBAĞA KRAL",
      bigPhotoPath: "assets/content/ill/KURBAĞA KRAL.jpg",
      placeHolderPath: "assets/content/illplaceholder/17.jpg",
      type: "photo",
      videoURL: "",
   }, {
      name: "DENİZ FENERİ",
      bigPhotoPath: "assets/content/ill/DENİZ FENERİ.jpg",
      placeHolderPath: "assets/content/illplaceholder/18.jpg",
      type: "photo",
      videoURL: "",
   },
];
const desArray = [{
      name: "OPENEYE",
      bigPhotoPath: "assets/content/des/OPENEYE.jpg",
      placeHolderPath: "assets/content/aniplaceholder/1.jpg",
      type: "photo",
      videoURL:"",

   },
   {
      name: "MODERN ANADOL",
      bigPhotoPath: "assets/content/des/MODERN ANADOL.jpg",
      placeHolderPath: "assets/content/desplaceholder/2.jpg",
      type: "photo",
      videoURL:""
   },
];
const aniArray = [{
      name: "OPENEYE TRAILER",
      bigPhotoPath: "",
      placeHolderPath: "assets/content/aniplaceholder/1.jpg",
      type: "video",
      videoURL: ["https://player.vimeo.com/video/490751806?h=4f0be92a52"],
   },
   {
      name: "OPENEYE MOTION POSTER",
      bigPhotoPath: "",
      placeHolderPath: "assets/content/aniplaceholder/1.jpg",
      type: "video",
      videoURL: ["https://player.vimeo.com/video/638860635?h=0cfb99b9fe"],
   },
   {
      name: "FISH",
      bigPhotoPath: "",
      placeHolderPath: "assets/content/aniplaceholder/3.jpg",
      type: "video",
      videoURL: ["https://player.vimeo.com/video/411335446?h=db099e0e93"],
   },
   {
      name: "SPORTS",
      bigPhotoPath: "",
      placeHolderPath: "assets/content/aniplaceholder/4.jpg",
      type: "video",
      videoURL: ["https://player.vimeo.com/video/422240350?h=fe81d31e41"],
   },
];