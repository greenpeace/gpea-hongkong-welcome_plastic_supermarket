<template>
  <div id="app" class="antialiased font-nototc relative flex flex-col items-center">
    <header class="z-10 header relative w-full px-4 py-2 header--white">
      <div class="container mx-auto flex items-center justify-between">
        <div>
          <img
            class="logo logo--green"
            src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-green-%5bweb%5d-01.png"
            alt="logo"
          />
          <img
            class="logo logo--white"
            src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-white-%5bweb%5d-01.png"
            alt="logo"
          />
        </div>
        <div class="nav-button">
          <button v-scroll-to="'#enform'" class="btn">立即聯署</button>
        </div>
      </div>
    </header>
    <!-- end of header -->
    <!-- main -->
    <main class="main relative">
      <div class="grid gap-4">
        <div class="content bg-gray-100">
          <section class="section-hero relative">
            <img class="w-full" src="../src/assets/petition_banner_03.jpg" alt />
            <div class="col-xs-12">
              <h1 class="mt-8 mb-4 flex flex-wrap tracking-wider text-4xl font-bold">
                <div>加快超市走塑</div>
                <div class="mx-2"></div>
                <div>急需你的力量</div>
              </h1>
            </div>
            <div class="md:hidden col-xs-12">
              <p
                class="text"
              >一同發聲，要求包括龍頭惠康在內的超市回應你的訴求：制定完整減塑藍圖、發展可重用包裝銷售模式、淘汰無謂塑膠包裝，並提供走塑購物選項，讓你「有得揀」。</p>
            </div>
            <div class="bg-gray-100 py-2 bg-gray-100">
              <div class="s-logo-wrapper bg-white rounded mt-2 px-2 py-2 overflow-hidden">
                <div class="flex flex-wrap justify-around items-center">
                  <div
                    class="w-24 h-24 s-logo lg:m-4 m-2 flex items-center justify-center"
                    v-for="(logo, index) in supermarketImages"
                    :key="index"
                  >
                    <img :src="logo" class="w-full s-logo" :alt="logo.name" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="px-4 py-4">
            <div class="row md:mb-8">
              <div class="col-xs-12 col-lg-6">
                <p
                  class="text"
                >每年，香港有至少112噸塑膠包裝垃圾流入海洋。超市即棄包裝是塑膠污染的主要源頭之一；這些垃圾入侵食物鏈，您我日常進食的海鮮、食鹽亦無一倖免，暗藏微塑膠！</p>
                <p class="text">
                  綠色和平最新報告指出，本港7間連鎖超市的走塑表現均不合格。
                  <strong>當中惠康和百佳同屬超市龍頭，但前者的走塑資訊透明度低，欠缺創新走塑政策，走塑表現比百佳較遜色。</strong>
                </p>
              </div>
              <div class="px-2 py-2 col-xs-12 col-lg-6">
                <img src="../src/assets/R0032756.jpg" alt class="w-full" />
              </div>
            </div>
            <div class="row mb-8">
              <div class="col-xs-12 col-md-6 col-xl-5">
                <div class="row">
                  <div class="px-2 py-2 mb-4 col-xs-6 col-md-12">
                    <img src="../src/assets/R0032663_nologo.jpg" alt class="w-full" />
                  </div>
                  <div class="px-2 py-2 mb-4 col-xs-6 col-md-12">
                    <img src="../src/assets/R0032723.jpg" alt class="w-full" />
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-6 col-xl-7">
                <p
                  class="text"
                >超市每天售賣無數食材、飲品、日常用品，大部分產品都預先包裝，令顧客「冇得揀」。然而，根據我們的評估和海外經驗，超市絕對有能力改變其貨品包裝及銷售模式，減少無謂包裝。</p>
                <p
                  class="text"
                >事實上，綠色和平早已向各大超市提供「走塑」方案，亦成功促使個別超市踏出減塑的第一步：有賴逾15,000人聯署、參與查膠隊等行動支持，綠色和平成功推動百佳推行裸裝蔬果試行計劃；百佳亦承認計劃讓公司成功減塑及增加銷量，更成為首間設立裸買補充站的大型超市。</p>
                <p
                  class="text"
                >這是一個好開始，但要取得更大成果，我們需要在2020年得到30,000人加入聯署，推動超市加快改變步伐，加入國際的走塑潮流，發展可重用包裝銷售模式及制定完整減塑藍圖，負起對環境、顧客以至我們下一代的責任。</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-md-6 mb-4">
                <h3 class="text-xl font-bold">立即聯署要求超市：</h3>
                <ul class="text-sm mt-4 list-disc list-inside">
                  <li class="mb-2">立刻減少無謂包裝，設立無塑購物區域或裸買補充站，增加售賣裸裝產品比例</li>
                  <li class="mb-2">訂下整體塑膠減量目標，並制訂明確的路線圖與時間表</li>
                  <li class="mb-2">設定全面淘汰即棄塑膠期限，停用不可回收的塑膠物料，並將可回收的塑膠重用或妥善回收</li>
                  <li class="mb-2">以「可循環再用」為原則，發展並向員工及公眾推廣可大規模實行的走塑方案</li>
                </ul>
              </div>
              <div class="col-xs-12 col-md-6 mb-4">
                <h3 class="text-xl font-bold">我們亦要求政府：</h3>
                <ul class="text-sm mt-4 list-disc list-inside">
                  <li class="mb-2">設立生產者責任制，從源頭管制即棄塑膠，包括塑膠包裝、即棄餐具、微膠珠等</li>
                  <li class="mb-2">制訂走塑時間表，逐步禁用即棄及難以回收的塑膠產品，並向市民公布進度</li>
                  <li class="mb-2">投放資源予社區教育及提供回收減廢設施，例如鼓勵超市設置自取站予人拿取環保袋及器皿等</li>
                </ul>
              </div>
              <div class="col-xs-12">
                <hr class="my-4 border-bg-gray-100" />
                <p class="text-gray-900 text-sm text">
                  ＊
                  <strong>甚麼是無謂包裝？</strong>
                  <br />無謂包裝是指預先以不必要、用完即棄的塑膠，例如用一層或多層塑膠（如保鮮紙、發泡膠盤、膠袋）包裝蔬果、零食等。
                </p>
                <p class="text-gray-900 text-sm text">
                  ＊
                  <strong>甚麼是無塑購物區域？</strong>
                  <br />該區域的貨品沒有使用任何即棄塑膠包裝，店舖以按樽制收回及重用器皿，或讓顧客使用可重用器皿，按需要購買合適份量。
                </p>
              </div>
            </div>
          </section>
          <section class="bg-red-100 ranking pb-20">
            <div class="px-4 py-4">
              <h2 class="text-4xl font-bold mt-4 mb-2">香港超市表現逐間睇</h2>
              <p class="text-xl font-bold">點擊超市以查看詳細結果。</p>
            </div>
            <Ranking class="mb-8" :supermarkets="supermarkets" />
            <div class="px-4 py-4">
              <hr class="my-4 border-bg-gray-100" />
              <h3 class="text-xl font-bold mb-4">評級方法</h3>
              <p class="text">
                《香港連鎖超市走塑表現評級報告》參考綠色和平應用於全球多個國家或地區，包括美國、英國、西班牙及台灣等超市走塑表現評分準則，並依據各超市在香港的分店數目以及市場佔有率，調整訂下適用於香港市場的「超市塑膠使用問卷調查」及評分方法。於2019年8月向7大連鎖超市品牌的管理層發出問卷，包括（依字首筆畫或首字母排序）：一田、牛奶公司、屈臣氏集團、華潤、AEON、city'super及Marks
                & Spencer *。
              </p>
              <p class="text">
                問卷針對「即棄塑膠包裝」、「即棄塑膠製品」、「供應鏈合作」、
                「員工訓練、消費者溝通及政策倡議」及「資訊公開及透明度」五大範疇，邀請超市用約兩個月時間回覆。
              </p>
              <p class="text">
                若想瞭解更多，請
                <a
                  class="external-link"
                  href="https://www.greenpeace.org/hongkong/issues/plastics/update/18618/%e9%82%8a%e9%96%93%e8%b6%85%e5%b8%82%ef%bc%8c%e8%b5%b0%e5%a1%91%e8%a1%a8%e7%8f%be%e6%9c%80%e4%bb%a4%e4%ba%ba%e3%80%8c%e8%b7%8c%e7%9c%bc%e9%8f%a1%e3%80%8d/?ref=petition_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >點擊此處</a>查看完整報告。
              </p>
              <p class="text mb-8">
                * 華潤、AEON、city'super及Marks &
                Spencer沒有回覆本次綠色和平發出的超市塑膠使用量問卷調查，本報告的資料大部分是來自於公開可取得之資訊。
              </p>
            </div>
          </section>
        </div>
        <slide-x-right-transition :duration="400">
          <aside class="aside-enform enform relative">
            <div id="enform" class="form-container form-container--sticky sticky">
              <div class="form-header text-white mt-2 mb-4 text-2xl text-center font-bold" v-if="!formSubmitted">
                <h2 class="mb-2">加快超市走塑 急需你的力量</h2>
                <p
                  class="font-normal text-sm"
                >一同發聲，要求包括龍頭惠康在內的超市回應你的訴求：制定完整減塑藍圖、發展可重用包裝銷售模式、淘汰無謂塑膠包裝，並提供走塑購物選項，讓你「有得揀」。</p>
              </div>
              <div class="enform-progress my-4">
                <div class="overflow-hidden rounded shadow w-full bg-gray-200">
                  <div
                    class="transition-all font-bold text-white bg-gporangelight p-1 text-center duration-1000 overflow-visible whitespace-no-wrap"
                    v-bind:style="{width: `${this.signupProgress || 0}%` }"

                  >{{this.participants ? this.participants.toLocaleString()+"人已聯署" : "-"}} </div>
                </div>
              </div>
              <div class="form-body enform">
                <MCForm v-if="!formSubmitted" @onSubmit="_onSubmit"/>
                <ThankYouBlock v-if="formSubmitted"/>
              </div>
            </div>
          </aside>
        </slide-x-right-transition>
      </div>
      <div
        class="mobile-button md:hidden tracking-wide shadow overflow-hidden fixed w-full flex items-center justify-center px-4 py-2"
      >
        <div class="scroll-indicator">
          <div class="progress-bar" v-bind:style="{width: `${this.scrollDepth}%` }"></div>
        </div>
        <button class="form-button" v-scroll-to="'#enform'">{{ mobileBtnText }}</button>
      </div>
    </main>
    <!-- end of main -->
    <!-- footer -->
    <footer class="z-10 footer relative w-full px-4 py-12 bg-gpdarkblue text-white text-sm">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 mb-8">
            <img
              class="logo mb-8"
              src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-white-%5bweb%5d-01.png"
              alt="Greenpeace 綠色和平"
            />
            <p
              class="text-sm"
            >綠色和平是獨立的國際環保組織，通過科學研究、政策倡議及和平行動，揭露全球環境問題並提出相應解決方案。我們從不接受任何政府、企業或政治團體的資助，只接受個人的直接捐款，以維持公正獨立。</p>
          </div>
          <div class="w-full md:w-1/2 mb-8">
            <ul
              class="footer-links leading-loose flex flex-col justify-between items-start md:items-end text-right list-none list-inside"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.greenpeace.org/hongkong/"
                alt="主頁"
              >主頁</a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.greenpeace.org/hongkong/policies/privacy-and-cookies/"
                alt="私隱政策與個人資料收集聲明"
              >私隱政策與個人資料收集聲明</a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.greenpeace.org/hongkong/about/contact/"
                alt="聯絡我們"
              >聯絡我們</a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.greenpeace.org/hongkong/about/overview/"
                alt="關於綠色和平"
              >關於綠色和平</a>
            </ul>
          </div>
          <div class="w-full mb-8">
            <div class="border-t border-gray-400 px-4"></div>
            <div class="text-sm mt-4">© GREENPEACE 2020</div>
          </div>
        </div>
      </div>
    </footer>
    <!-- end of footer -->

    <FullLoadingPage :isActive="isLoading"/>
  </div>
</template>

<script>
import NProgress from "nprogress";
NProgress.configure({
  showSpinner: false
});

import { supermarkets, supermarketImages } from "@/supermarkets.js";
import Ranking from "./components/Ranking.vue";

import MCForm from "./components/MCForm.vue"
import ThankYouBlock from "./components/ThankYouBlock.vue"
import * as mcHelper from "@/mc.form-helper.js"
import FullLoadingPage from "./components/FullLoadingPage.vue"

export default {
  name: "App",
  components: { Ranking, MCForm, FullLoadingPage,ThankYouBlock },
  data() {
    return {
      supermarkets: supermarkets,
      supermarketImages: supermarketImages,
      isMobile: false,
      scrollDepth: 0,
      showMobileButton: true,
      showFormModal: true,
      formSubmitted: false, // wether to show the succ page or not
      participants: 0,
      goal: 0,
      isLoading: false
    };
  },
  methods: {
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    },
    checkMobile() {
      var isMobile = window.matchMedia("screen and (max-width:767px)").matches;
      this.isMobile = isMobile;
      return isMobile;
    },
    getDocumentHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    },
    getWindowHeight() {
      return (
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight
      );
    },
    getScrollTop() {
      return window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    },
    handleScroll() {
      let scroll = this.getScrollTop() / this.innerHeight;
      this.scrollDepth = Math.round(scroll * 100);
    },

    /**
     * Handle the form submission
     * @return {[type]} [description]
     */
    _onSubmit: function (formDataObj) {
      try {
        this.isLoading = true

        // prepare the submit data
        let postData = mcHelper.fetchFormInputs("#mc-form")
        for (let k in formDataObj) {
          if (k in postData) {
            postData[k] = formDataObj[k]
          }
        }

        fetch(mcHelper.getPostURL(), {
          method: 'POST',
          body: Object.keys(postData).reduce((formData, k) => {
            formData.append(k, postData[k]);
            return formData;
          }, new FormData())
        })
        .then(response => response.json())
        .then(response => {
          this.isLoading = false

          if (response.Supporter) { // ok, go to next page
            mcHelper.sendPetitionTracking("2020-supermarket")
            this.formSubmitted = true
            this.participants += 1
            document.querySelector(".enform").scrollIntoView();
          } else {
            console.error(response)
          }
        })
        .catch(error => {
          this.isLoading = false // something wrong
          alert(error)
          console.error(error)
        })

      } catch (e) {
        console.error(e)
      }
    }
  },
  computed: {
    mobileBtnText() {
      return this.formSubmitted ? "感謝您聯署超市走塑" : "立即聯署";
    },
    innerHeight() {
      return this.getDocumentHeight() - this.getWindowHeight();
    },
    signupProgress() {
      return this.participants
        ? Math.round((this.participants / this.goal) * 100)
        : 0;
    }
  },
  created() {
    NProgress.start();
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.checkMobile();

    // render the peition status bar
    const {numSignupTarget, numSignup} = mcHelper.getNumSignupsAndTarget()
    this.goal = numSignupTarget;
    this.participants = 0;
    setTimeout(() => { // for the animation
      this.participants = numSignup;
    }, 1000)

    this.$nextTick(() => {
      NProgress.done();
    });
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
    console.warn("Please refresh the page");
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
