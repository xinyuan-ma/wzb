<template>
  <!--<div class="page-header" :class="{joinUs: joinUs}">-->
  <div class="page-header">
    <div class="container">
      <div class="left logo">
        <div class="logo-btn">
          <img class="imgHome-logo" :src="ImgHome.Logo" alt="">
          <span>{{joinUs ?  '问政宝招聘' : '问政宝'}}</span>
        </div>
        <!--<img class="job-offer" v-if="joinUs" :src="ImgHome.Logo" alt="">-->
        <div class="login">
          <!--<div v-if="joinUs" class="navs join-us">-->
            <!--<a-->
              <!--v-for="(item, index) in navs"-->
              <!--:key="index"-->
              <!--:href="item.url"-->
              <!--:class="{-->
            <!--selected: parentPath === item.url,-->
            <!--parentNode: item.sub,-->
          <!--}"-->
              <!--class="nav-item easing"-->
              <!--@mouseover="onMouseover(item.title)">-->
              <!--<div class="text">-->
                <!--{{ item.title }}-->
                <!--<div v-if="isItemHover && item.sub" class="nav-cols">-->
                  <!--<div class="title-row">-->
                    <!--<div v-for="(sub, sIdx) in item.sub" :key="sIdx" class="nav-type-title">-->
                      <!--{{ sub.title }}-->
                    <!--</div>-->
                  <!--</div>-->

                  <!--<div class="children-row">-->
                    <!--<div v-for="(sub, sIndex) in item.sub" :key="sIndex" class="nav-children">-->
                      <!--<a-->
                        <!--v-for="(child, cidx) in sub.children"-->
                        <!--:key="cidx"-->
                        <!--:href="child.url"-->
                        <!--:class="{selected: currentPath === child.url}"-->
                        <!--class="child-nav-item">-->
                        <!--{{ child.title }}-->
                      <!--</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</a>-->
          <!--</div>-->
          <div>
            <span class="free-register">免费注册</span>
            <span class="free-login">登录</span>
          </div>
        </div>
      </div>
      <!--<div v-if="!joinUs" class="navs">-->
      <div class="navs">
        <div
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
            <span @click="goDetail(item.url)">{{ item.title }}</span>
            <div class="nav-cols" v-show="isItemHover && item.sub">
              <div class="title-row">
                <div v-for="(sub, sIdx) in item.sub" :key="sIdx" class="nav-type-title" @click="goDetail(sub.url)">
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
        </div>
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
        {
          title: '产品与服务',
          // url: 'javascript:;',
          url: '',
          sub: [
            {
              title: '政策云平台',
              url: '/cloud'
            },
            {
              title: '精品课',
              url: '/course'
            },
          ]
        },
        { title: '加入我们', url: '/joinUs'},
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
  watch: {
    '$route.path': function (path, oldVal) {
      console.log(path, 'newVal');
      if (path == '/joinUs' || path == '/jobDuty') {
        this.joinUs = true
      } else {
        this.joinUs = false
      }
    }
  },
  mounted () {
    this.judgement()
  },
  methods: {
    goDetail (url) {
      if(!url) return
      this.$router.push(url)
      this.isItemHover = false
    },
    judgement () { // 判断是否是招聘页面
      let path = this.$route.path
      if (path == '/joinUs' || path == '/jobDuty') {
        this.joinUs = true
      } else {
        this.joinUs = false
      }
    },
    onMouseover (title) {
      if (title === '产品与服务') {
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
  padding-top: 10px;
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
      margin: 0 60px 10px 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo-btn {
        display: flex;
        align-items: center;
        width: 200px;
        height: 35px;
        font-size: 16px;
        font-weight: bold;
        color: #1F1F1F;
        line-height: 35px;
        .imgHome-logo {
          width: 35px;
          height: 35px;
          margin-right: 8px;
        }
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
    display: flex;
    flex-direction: row;
    &.join-us {
      margin: 0;
    }
    // 企业登录
    .nav-item {
      font-size:15px;
      font-weight:500;
      line-height:21px;
      text-decoration: none;
      color: rgba(0,0,0,.6);
      display: block;
      margin-right: 80px;
      position: relative;
      .text {
        cursor: pointer;
      }
      .nav-cols {
        position: absolute;
        top: 35px;
        left: 0;
        width: 160px;
        z-index: 10;
        background: #F4F7F9;

        .title-row {
          display: flex;
          flex-direction: column;
          padding-left: 30px;
          .nav-type-title {
            font-size: 15px;
            font-weight: 500;
            line-height: 50px;
            text-decoration: none;
            text-align: left;
            color: rgba(0, 0, 0, 0.6);
            &:hover {
              color: #000000;
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
