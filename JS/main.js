function wait(ms) {
   return new Promise(resolve => setTimeout(resolve, ms))
}

var isAnimating = false
var isBigPhotoOpened = false
async function categoryOpen(e) {
   if (isAnimating == false) {
      isAnimating = true
      let array = $(".item").toArray()
      let id = $(e).attr("id")
      let category = $(e).attr("data-category")
      $($(e).children(".item-cover")).css("background-color", "#ffffffcc")
      array.forEach(el => {
         if ($(el).attr("id") != id) {
            $(el).animate({
               top: "-100%"
            }, 700)
         } else {
            selected = el
         }
      })
      await wait(700)
      $(selected).animate({
         left: "0%"
      }, 400)
      await wait(300)
      $(".contact-container").css("display", "flex")
      $(selected).toggleClass("item-selected")
      contentCreater(category)
      $(selected).removeAttr("onclick")
      $(selected).attr("onclick", "categoryClose(this)")
      await wait(300)
      $(".contact-container").toggleClass("contact-opened")
      $(".content-container").toggleClass("content-opened")
      await wait(1000)
      isAnimating = false
   }
}
async function categoryClose(e) {
   if (isAnimating == false) {
      isAnimating = true
      if (isBigPhotoOpened == true) {
         bigPhotoClose()
         await wait(300)
      }
      $("body").animate({
         top: "-100vh"
      })
      await wait(400)
      $(".contact-container").css("display", "none")
      $(".contact-container").css("opacity", "0")
      $(".contact-container").toggleClass("contact-opened")
      $(".content-container").toggleClass("content-opened")
      $(e).attr("onclick", "categoryOpen(this)")
      $("item-selected").toggleClass("item-fast-close")
      $(".item-selected").toggleClass("item-selected")
      $(".item").removeAttr("style")
      $(".item-cover").removeAttr("style")
      await wait(300)
      $("body").animate({
         top: "0vh"
      })
      $(".content-container").html("")
      await wait(400)
      $(".contact-container").css("opacity", "1")
      isAnimating = false
   }
}

function contentCreater(id) {
   let arr
   switch (id) {
      case "illustration":
         arr = illArray
         _category = "illustration"
         break
      case "design":
         arr = desArray
         _category = "design"
         break
      case "animation":
         arr = aniArray
         _category = "animation"
         break
      default:
         break
   }
   for (let i = 0;i < arr.length;i++) {
      item = `<div class="content-item">
      <div class="content-item-wrapper" style="background-image: url(${arr[i].placeHolderPath});">
         <div class="content-item-cover" onclick="bigPhotoOpener(this)" data-link="${arr[i].bigPhotoPath}" data-name="${arr[i].name}" data-type="${arr[i].type}" data-videolink="${arr[i].videoURL}" data-bothURL="${arr[i].urls}" data-category="${_category}">
            <p>${arr[i].name}</p>
         </div>
      </div>
   </div>`
      $(".content-container").append(item)
   }
}

async function bigPhotoOpener(item) {
   isBigPhotoOpened = true
   let link = $(item).attr("data-link")
   let name = $(item).attr("data-name")
   let type = $(item).attr("data-type")
   if (type == "photo") {
      v_arr = $(item).attr("data-link").split(",")
      let html = `<div class="photo-container">
      <img src="assets/misc/cross.svg" alt="" class="cross" onclick="bigPhotoClose()">
      <div class="photo-header">
         <h1>${name}</h1>
      </div>`
      for (let i = 0;i < v_arr.length;i++) {
         html += ` 
         <div class="photo-container-img-container">
            <img src="${v_arr[i]}" alt="${name}" id="img">
         </div>`
      }
      html += `</div>`
      $("body").append(html)
   } else if (type == "video") {


      v_arr = $(item).attr("data-videolink").split(",")
      let html = `<div class="photo-container">
      <img src="assets/misc/cross.svg" alt="" class="cross" onclick="bigPhotoClose()">
      <div class="photo-header">
         <h1>${name}</h1>
      </div>`
      for (let i = 0;i < v_arr.length;i++) {
         html += `<div class="video-container"><iframe src="${v_arr[i]}8&color=ffffff&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`
      }
      html += `</div>`
      $("body").append(html)
   } else if (type == "both") {
      let category = $(item).attr("data-category")
      let searchArr
      switch (category) {
         case "illustration":
            searchArr = illArray
            break
         case "design":
            searchArr = desArray
            break
         case "animation":
            searchArr = aniArray
            break
         default:
            console.error("BEKLENMEDİK BİR HATA İLE KARŞILAKTIK")
            break
      }

      var result = searchArr.filter(obj => {
         return obj.name == name
      })
      let bothArray = result[0].urls
      let html = `<div class="photo-container">
      <img src="assets/misc/cross.svg" alt="" class="cross" onclick="bigPhotoClose()">
      <div class="photo-header">
         <h1>${name}</h1>
      </div>`
      for (let i = 0;i < bothArray.length;i++) {
         if (bothArray[i].type == "photo") {
            html += ` 
            <div class="photo-container-img-container">
               <img src="${bothArray[i].url}" alt="${name}" id="img">
            </div>`
         } else {
            html += `<div class="video-container"><iframe src="${bothArray[i].url}8&color=ffffff&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`
         }
      }
      html += `</div>`
      $("body").append(html)
   }
   await wait(100)
   $(".photo-container").animate({
      opacity: "1"
   }, 300)
}

async function bigPhotoClose() {
   $(".photo-container").animate({
      opacity: "0"
   }, 300)
   await wait(300)
   $(".photo-container").remove()
   isBigPhotoOpened = false
}

$('body').on('click', '.photo-container', function (e) {
   if ($(e.target).attr("id") != "img") {
      bigPhotoClose()
   }
})

async function videoCloser() { await wait(3000); $(".entry-video-container").animate({ top: "-100vh" }, 800); await wait(800); $(".entry-video-container").remove() } videoCloser()
var video = document.getElementById("entryvideo")
video.play()

$("body").css("display", "block");

