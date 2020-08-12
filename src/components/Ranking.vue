<template>
  <div class="px-4 py-4">
    <div class="score-cardboard mx-auto">
      <div
        class="score-card relative bg-white rounded border"
        v-for="(sm, key, index) in supermarkets"
        :key="index"
        :id="'sm-' + index"
        :class="{ 'is-active': index == picked && supermarketIsShown }"
      >
        <div
          @click="checkSupermarket(index)"
          v-scroll-to="'#sm-' + index"
          class="card__header relative flex flex-col"
        >
          <div class="rank text-sm font-bold p-2">#{{ index + 1 }}</div>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              v-show="index == picked && supermarketIsShown"
              class="fill-current h-6 w-6 text-gray-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </span>
          <div class="information justify-between items-center flex px-4 py-2 mt-4">
            <div class="s-logo mx-4">
              <img class="w-full object-contain h-24 w-24" :src="sm.logo" alt />
            </div>
            <div class="s-name">
              <h3 class="mx-2 text-xl font-bold text-gray-900">{{ sm.name }}</h3>
            </div>
          </div>
          <div class="score px-2 py-1 bg-gray-200 justify-between items-center flex relative">
            <div class="score-bg-is-red left-0 absolute h-full" :style="{ width: sm.score + '%' }"></div>
            <span class="overall-score-header tracking-wider">整體得分</span>
            <div class="overall-score text-gray-600" :score="sm.score">
              <strong class="score-is-red">{{ sm.score }}</strong> / 100
            </div>
            <div class="score__bar absolute flex">
              <div class="red-area"></div>
              <div class="yellow-area"></div>
              <div class="green-area"></div>
            </div>
          </div>
        </div>
        <collapse-transition :duration="300">
          <div v-show="index == picked && supermarketIsShown" class="card__body px-2 py-4">
            <div class="s-details">
              <ul class="mb-2">
                <li class="text-sm mb-2">
                  走塑政策：
                  <strong>{{ sm.distributions.policy }}</strong>
                  <div class="relative h-1 w-full bg-gray-200">
                    <div
                      class="score-bg-is-red absolute h-full text-xs"
                      :style="{ width: sm.distributions.policy + '%' }"
                    ></div>
                  </div>
                </li>
                <li class="text-sm mb-2">
                  減塑措施：
                  <strong>{{ sm.distributions.reduction }}</strong>
                  <div class="relative h-1 w-full bg-gray-200">
                    <div
                      class="score-bg-is-red absolute h-full text-xs"
                      :style="{ width: sm.distributions.reduction + '%' }"
                    ></div>
                  </div>
                </li>
                <li class="text-sm mb-2">
                  倡議及創新：
                  <strong>{{ sm.distributions.initiative }}</strong>
                  <div class="relative h-1 w-full bg-gray-200">
                    <div
                      class="score-bg-is-red absolute h-full text-xs"
                      :style="{ width: sm.distributions.initiative + '%' }"
                    ></div>
                  </div>
                </li>
                <li class="text-sm mb-2">
                  資訊透明度：
                  <strong>{{ sm.distributions.transparency }}</strong>
                  <div class="relative h-1 w-full bg-gray-200">
                    <div
                      class="score-bg-is-red absolute h-full text-xs"
                      :style="{ width: sm.distributions.transparency + '%' }"
                    ></div>
                  </div>
                </li>
              </ul>
              <div>
                <p class="text-xl font-bold mt-4 mb-2">基本資料</p>
                <p class="text-sm">{{ sm.information }}</p>
              </div>
            </div>
            <div class="s-methods mt-4">
              <p class="text-xl font-bold mt-4 mb-2">詳細評分</p>
              <p class="text-sm mt-2">
                <strong>走塑政策</strong>
                ：{{ sm.evaluations.policy }}
              </p>
              <p class="text-sm mt-2">
                <strong>減塑措施</strong>
                ：{{ sm.evaluations.reduction }}
              </p>
              <p class="text-sm mt-2">
                <strong>倡議與創新</strong>
                ：{{ sm.evaluations.initiative }}
              </p>
              <p class="text-sm mt-2">
                <strong>資訊透明度</strong>
                ：{{ sm.evaluations.transparency }}
              </p>
            </div>
          </div>
        </collapse-transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ranking",
  props: {
    supermarkets: Object,
  },
  data() {
    return {
      picked: 0,
      supermarketIsChecked: 0,
      supermarketIsShown: false,
    };
  },
  methods: {
    checkSupermarket: function (supermarket) {
      if (this.picked == supermarket) {
        this.supermarketIsShown = !this.supermarketIsShown;
      } else {
        this.picked = supermarket;
        this.supermarketIsShown = true;
      }
    },
    closeSupermarket: function () {
      this.supermarketIsShown = false;
    },
  },
};
</script>

<style scoped lang="scss">
.score-cardboard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .score-card {
    cursor: pointer;
    width: 100%;
    margin: 4px;
    position: relative;
    transition: all 0.25s;
    @media (min-width: 1024px) {
      width: calc(50% - 16px);
    }
    &:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
  }
}

.score-card__overlay {
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
}

.score-card.is-active {
  .card__header {
    z-index: 2;
  }
  .card__body {
    z-index: 2;
  }
}

.card__header {
  background-color: #fff;
  height: 100%;
  justify-content: space-between;
  .rank {
    position: absolute;
    top: 0px;
    left: 0px;
    color: #033e5a;
  }
  .information {
    margin-top: 40px;
    margin-bottom: 20px;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .s-logo {
      flex: 1;
      width: calc(30% - 20px);
      max-width: 180px;
    }
    .s-name {
    }
  }
}

.card__body {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
}

.s-remark {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.overall-score-header {
  z-index: 1;
  color: white;
  text-shadow: 1px 1px 0px var(--mred), -1px -1px 0px var(--mred),
    1px -1px 0px var(--mred), -1px 1px 0px var(--mred);
}

.score-is-red {
  color: var(--mred);
}
.score-bg-is-red {
  background-color: var(--mred);
}
.score-bg-is-yellow {
  background-color: var(--myellow);
}
.score-bg-is-green {
  background-color: var(--mgreen);
}

.score__bar {
  height: 3px;
  width: 100%;
  bottom: 0;
  left: 0;
  .red-area {
    left: 0;
    width: 33.333%;
    background: var(--mred);
  }
  .yellow-area {
    left: 40%;
    width: 33.333%;
    background: #f9c632;
  }
  .green-area {
    right: 0;
    width: 33.333%;
    background: var(--mgreen);
  }
}
</style>
