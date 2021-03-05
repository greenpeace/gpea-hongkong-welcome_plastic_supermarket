export { mainShare, whatsAppShare };

const mainShare = event => {
  event.preventDefault();
  //
  const fbShare = () => {
    var baseURL = "https://www.facebook.com/sharer/sharer.php";
    var u = "https://act.gp/30dDPfd";
    var t = (window.innerHeight - 436) / 2;
    var l = (window.innerWidth - 626) / 2;
    window.open(
      baseURL + "?u=" + encodeURIComponent(u),
      "_blank",
      "width=626,height=436,top=" + t + ",left=" + l
    );
  };
  // WEB SHARE API
  if (navigator.share) {
    navigator
      .share({
        title: "",
        text:
          "Hi👋你覺唔覺超級市場嘅商品被即棄塑膠包裝好無謂？綠色和平揭露，超市即棄包裝係塑膠污染嘅主要源頭之一；呢啲即棄塑膠包裝入侵食物鏈，海鮮、食鹽亦無一倖免！綠色和平推動到百佳已踏出減塑第一步，但加快超市包括惠康走塑的步伐，急需你的力量，立即聯署👉 ",
        url: "https://act.gp/3qjJ9Iw"
      })
      .then()
      .catch();
  } else {
    fbShare();
  }
};

const whatsAppShare = event => {
  event.preventDefault();
  var w =
    "https://api.whatsapp.com/send?text=" +
    encodeURI(
      "Hi 你覺唔覺超級市場嘅商品被即棄塑膠包裝好無謂？綠色和平揭露，超市即棄包裝係塑膠污染嘅主要源頭之一；呢啲即棄塑膠包裝入侵食物鏈，海鮮、食鹽亦無一倖免！綠色和平推動到百佳已踏出減塑第一步，但加快超市包括惠康走塑的步伐，急需你的力量，立即聯署👉 https://act.gp/30hkDgN"
    );
  window.open(w);
};
