<template>
  <div class="labor-graph">
    <div class="circle ent">
      <div class="circle-title">企业</div>

      <div class="pairs">
        <div v-for="(p, idx) in circle1" :key="idx" class="icon-box">
          <div class="icon-img-box">
            <img :src="p.icon" alt="" class="icon">
          </div>
          <div class="title">{{ p.title }}</div>
        </div>
      </div>
    </div>
    <div class="arrow-to-right">
      <div class="line">
        传统模式发薪
      </div>
      <div class="arrow">
        <svg width="30px" height="80px" viewBox="0 0 51 115">
          <g id="arraw-right" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-51.000000, -12.000000)" fill="#FB4B42" fill-rule="nonzero">
              <polygon transform="translate(76.500000, 69.500000) rotate(-270.000000) translate(-76.500000, -69.500000) " points="76.5 44 134 95 19 95"></polygon>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div class="circle personal">
      <div class="circle-title">自由职业者</div>
      <div class="pairs">
        <div v-for="(p, idx) in circle2" :key="idx" class="icon-box">
          <div class="icon-img-box">
            <img :src="p.icon" alt="" class="icon">
          </div>
          <div class="title">{{ p.title }}</div>
        </div>
      </div>
    </div>
    <div class="arrow-to-right">
      <div class="line">
        存在问题
      </div>
      <div class="arrow">
        <svg width="30px" height="80px" viewBox="0 0 51 115">
          <use href="#arraw-right"></use>
        </svg>
      </div>
    </div>
    <div class="circle situation">
      <div class="circle-title">现状</div>

      <div class="text">
        <p>无法提供发票税负重成本高</p>
        <p>三流不合一</p>
      </div>
    </div>
  </div>
</template>
<script>
import solutionData from '@/components/config/solution'

export default {
  name: 'LaborGraph',
  data () {
    return {
      circle1: solutionData.highLabor.graphEnt,
      circle2: solutionData.highLabor.graphPersonal,
    }
  },
}
</script>
<style lang="scss" scoped>
.labor-graph {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 354px;

  .circle {
    width:354px;
    height:354px;
    background:linear-gradient(41deg,rgba(251,75,66,1),rgba(251,123,66,1));
    border-radius:50%;
    padding-top: 48px;

    .circle-title {
      // width:67px;
      // height:33px;
      width: 100%;
      text-align: center;
      font-size:35px;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:35px;
      // margin-bottom: 36.5px;
      margin-bottom: 30px;
    }
    .pairs {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .icon-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        // width: 76px;
        width: 73px;
        margin-bottom: 10px;

        .icon-img-box {
          width: 30px;
          height: 30px;
        }
        .icon {
          // width: 30px;
          max-height: 30px;
          max-width: 30px;
        }
        .title {
          // height:17px;
          font-size:18px;
          font-family:Source Han Sans CN;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:33px;
          margin-top: 7px;
        }
      }
    }
  }

  .situation {
    .text {
      margin-top: 82px;

      // width:251px;
      // height:50px;
      font-size:21px;
      font-family:Source Han Sans CN;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:30px;
    }
  }
}

.arrow-to-right {
  width: 190px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  .line {
    background-color: #FB4B42;
    font-size:21px;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:40px;

    height: 40px;
    width: 165px;
    position: relative;
    left: -1px;
  }
  .arrow {
    position: relative;
    top: 1px;
    left: -1px;
  }
}
@media (max-width: 1500px) {
  .labor-graph {
    .circle {
      width:290px;
      height:290px;
      padding-top: 30px;

      .circle-title {
        margin-bottom: 10px;
        font-size: 25px;
      }
      .pairs {
        .icon-box {
          width: 60px;
          margin-bottom: 10px;
          .title {
            font-size: 14px;
          }
        }
      }
    }
    .situation {
      .text {
        margin-top: 52px;

        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:30px;
      }
    }
  }
  .arrow-to-right {
    .line {
      width: 153px;
    }
  }
}
</style>
