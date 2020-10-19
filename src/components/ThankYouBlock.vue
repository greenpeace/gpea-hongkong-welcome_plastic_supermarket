<template>
  <div class="thankyou">
    <p class="text">
      <strong>感謝您加入聯署！</strong>
    </p>

    <p class="text">
      感謝您！我們需要更多市民加入，加快超市走塑的步伐；一同表達消費者心聲，促成改變，實現走塑購物選項。您願意分享給身邊的家人和朋友，擴大要求超市盡快淘汰無謂包裝的力量嗎？
    </p>

    <p class="actions">
      <a
        class="share-button share-button__main btn action-button button--share"
        href="#"
        target="_blank"
        @click="mainShare"
        >分享出去</a
      >
    </p>

    <p class="actions">
      <a
        class="share-button share-button__whatsapp btn action-button button--whatsappshare"
        href="#"
        target="_blank"
        @click="whatsAppShare"
      >
        <img
          src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1853/whatsapp.svg?v=1554003003000"
          style="max-width: 24px; margin: 0 auto;"
        />
      </a>
    </p>

    <p class="text">
      全賴您的支持，三年來我們在走塑項目上，成功促使零售商淘汰微塑膠、揭示香港海域及河道的塑膠污染實況、並促使快餐業界如大家樂、大快活開始採取減塑措施！此外，我們成功招募近400間餐廳加入「全城走塑」行列，提供走塑友善措施。您的長期捐助，將讓我們在2020年有足夠資源與學校合辦「走塑學堂」、延續「尋找走塑店鋪」活動，
      達成全港1,000間店鋪提供走塑友善措施的目標！
    </p>

    <p class="actions">
      <a
        class="btn action-button button--support ty-page-donation-link"
        href="https://supporter.ea.greenpeace.org/hk/s/donate?language=zh_HK&campaign=plastics&ref=2020-supermarket-thankyou_page"
        target="_blank"
        >支持我們</a
      >
    </p>
  </div>
</template>

<script>
import { mainShare, whatsAppShare } from "@/share.js";

export default {
  name: "ThankYouBlock",
  data: function() {
    return {};
  },
  methods: {
    mainShare,
    whatsAppShare
  }
};
</script>

<style lang="scss">
.thankyou {
  padding-top: 20px;
  padding-bottom: 20px;
}
.thankyou strong {
  font-size: 22px;
}
.thankyou p {
  line-height: 1.42857;
  margin-bottom: 20px;
}
.actions a {
  color: #fff;
  text-decoration: none;
}
.actions a:hover {
  color: #0a0a0a;
}
.action-button {
  margin: 15px auto;
  color: #fff;
  display: block;
  padding: 10px 30px;
  text-align: center;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  letter-spacing: 2px;
  text-decoration: none;
  outline: none;
  border: none;
}
.button--share {
  background-color: #3b5998;
}
.button--support {
  background-color: rgb(253, 162, 47);
}
.button--whatsappshare {
  background-color: #25d366;
}
.button--whatsappshare img {
  width: 100%;
  height: auto;
  max-width: 30px;
}
@media screen and (min-width: 768px) {
  .button--whatsappshare {
    display: none;
  }
}
</style>
