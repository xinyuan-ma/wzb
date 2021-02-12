<template>
  <div class="page-header" :class="{joinUs: joinUs}">
    <div class="container">
      <div class="left logo">
        <img class="job-offer" v-if="joinUs" :src="ImgHome.jobOffer" alt="">
        <img class="imgHome-logo" v-else :src="ImgHome.imgHomeLogo" alt="">
        <div class="login">
          <div v-if="joinUs" class="navs join-us">
            <a
              v-for="(item, index) in navs"
              :key="index"
              :href="item.url"
              :class="{
            selected: parentPath === item.url,
            parentNode: item.sub,
          }"
              class="nav-item easing"
              @mouseover="onMouseover(item.title)">
              <div class="text">
                {{ item.title }}
                <div v-if="isItemHover && item.sub" class="nav-cols">
                  <div class="title-row">
                    <div v-for="(sub, sIdx) in item.sub" :key="sIdx" class="nav-type-title">
                      {{ sub.title }}
                    </div>
                  </div>

                  <div class="children-row">
                    <div v-for="(sub, sIndex) in item.sub" :key="sIndex" class="nav-children">
                      <a
                        v-for="(child, cidx) in sub.children"
                        :key="cidx"
                        :href="child.url"
                        :class="{selected: currentPath === child.url}"
                        class="child-nav-item">
                        {{ child.title }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <span class="free-register">免费注册</span>
            <span class="free-login">登录</span>
          </div>
        </div>
      </div>
      <div v-if="!joinUs" class="navs">
        <a
          v-for="(item, index) in navs"
          :key="index"
          :href="item.url"
          :class="{
            selected: parentPath === item.url,
            parentNode: item.sub,
          }"
          class="nav-item easing"
          @mouseover="onMouseover(item.title)">
          <div class="text">
            {{ item.title }}
            <div v-if="isItemHover && item.sub" class="nav-cols">
              <div class="title-row">
                <div v-for="(sub, sIdx) in item.sub" :key="sIdx" class="nav-type-title">
                  {{ sub.title }}
                </div>
              </div>

              <div class="children-row">
                <div v-for="(sub, sIndex) in item.sub" :key="sIndex" class="nav-children">
                  <a
                    v-for="(child, cidx) in sub.children"
                    :key="cidx"
                    :href="child.url"
                    :class="{selected: currentPath === child.url}"
                    class="child-nav-item">
                    {{ child.title }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import ImgHome from '@/assets/home'

export default {
  name: 'AHeader',
  props: {
    headerMode: {
      type: String,
      default () {
        return ''
      }
    },
  },
  data () {
    return {
      ImgHome,
      navs: [
        { title: '首页', url: '/' },
        { title: '产品与服务', url: '/cloud/'},
        { title: '加入我们', url: '/joinUs/'},
        // {
        //   title: '完税服务',
        //   url: 'javascript:;',
        //   sub: [
        //     {
        //       title: '产品',
        //       children: [
        //         { title: '灵活用工', url: '/flexible-labor/', }
        //       ],
        //     },
        //     // {
        //     //   title: '收入类型',
        //     //   children: [
        //     //     { title: '高薪收入型', url: '/solution/high-paid' },
        //     //     { title: '投资收益型', url: '/solution/investment' },
        //     //     { title: '企业利润型', url: '/solution/profit' },
        //     //     { title: '劳务收入型', url: '/solution/high-labor' },
        //     //   ],
        //     // },
        //   ],
        // },
        { title: '关于我们', url: '/introduction/' },
      ],
      currentPath: '',
      parentPath: '',
      isItemHover: '',
      joinUs: false
    }
  },
  created () {
    this.judgement()
  },
  mounted () {
    const pathStr = this.$route.path
    if (pathStr.match(/solution/) || pathStr.match(/flexible-labor/)) {
      this.parentPath = 'javascript:;'
      this.currentPath = pathStr
    } else {
      this.parentPath = pathStr
      this.currentPath = pathStr
    }
  },
  methods: {
    judgement () { // 判断是否是招聘页面
      let path = this.$route.path
      if (path == '/joinUs/' || path == '/jobDuty/') {
        this.joinUs = true
      } else {
        this.joinUs = false
      }
    },
    onMouseover (title) {
      if (title === '完税服务') {
        this.isItemHover = true
      } else {
        this.isItemHover = false
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import "../style/conf.scss";

$NAV_SELECTED_COLOR: black;
.page-header {
  position: sticky;
  top: 0;
  z-index: 100000;
  background: #ffffff;
  height: 90px;
  overflow: hidden;
  border-bottom: 1px solid #DADCE0;
  &.joinUs {
    height: 75px;
  }
  .container {
    width: $PAGE_MAX_WIDTH;
    margin: 0 auto;

    align-items: center;
    justify-content: space-between;
    .logo {
      margin: 10px 60px 8px 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .job-offer {
        width: 131px;
        height: 35px;
      }
      .imgHome-logo {
        width: 96px;
        height: 35px;
      }
      .login {
        flex: 1;
        font-weight: bold;
        line-height: 36px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .free-register {
          color: #1F1F1F;
        }
        .free-login {
          color: #2469F3;
          margin-left: 43px;
        }
      }
    }
  }

  .navs {
    margin-left: 48px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    &.join-us {
      margin: 0;
    }
    // 企业登录
    .nav-item {
      font-size:15px;
      font-weight:500;
      color:rgba(0,0,0,1);
      line-height:21px;
      text-decoration: none;
      color: rgba(0,0,0,.6);
      display: block;
      margin-right: 80px;

      .nav-cols {
        display: none;
        position: absolute;
        top: 90px;
        left: 0px;
        padding-top: 39px - 4px;
        padding-bottom: 34px - 14px;
        padding-left: 43px;
        padding-right: 43px;
        width: 160px;
        background:rgba(246,246,246,1);

        .title-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(221,221,221,1);

          .nav-type-title {
            // width:36px;
            // height:17px;
            font-size:18px;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(0,0,0,1);
            line-height:51px;

            margin-right: 61px;
            &:last-child {
              margin-right: 0px;
            }
          }
        }

        .children-row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;

          .nav-children {
            display: flex;
            flex-direction: column;

            margin-right: 61px;
            &:last-child {
              margin-right: 0px;
            }

            .child-nav-item {
              font-size:14px;
              font-family:PingFang SC;
              font-weight:500;
              color:rgba(163,163,163,1);
              line-height:51px;

              text-decoration: none;

              &:hover,
              &.selected {
                color: #000000;
              }
            }
          }
        }
      }
      &:hover {
        // color: black;
        color: $NAV_SELECTED_COLOR;
        opacity:1;

        .nav-cols {
          display: block;
          z-index: 79;
        }
      }
      &:last-of-type {
        padding-right: 0px;
      }
    }
    .nav-item.selected {
      color: $NAV_SELECTED_COLOR;
    }
  }

}
</style>
