<template>
  <div class="aboutInfo" ref="myComponentRef">
    <div class="info">
      <div class="left">
        <h2>智医科技有限公司</h2>
        <div class="information">
          <div class="address">
            地址：
          </div>
          <div class="tel">
            电话：
          </div>
          <div class="mail">
            邮箱：
          </div>
        </div>
      </div>
      <div class="right">
        <div class="purple">
          企业介绍
          <div class="box">
            <div class="intro">品牌介绍</div>
            <div class="intro">团队介绍</div>
            <div class="intro">关于我们</div>
          </div>
        </div>
        <div class="purple service">
          服务范围
          <div class="box">
            <div class="intro">产品介绍</div>
            <div class="intro">新闻动态</div>
            <div class="intro">服务品牌</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bar">
<!--      <img src="../assets/wei.webp" alt="Wechat" class="barIcon">-->
<!--      <img src="../assets/weibo.webp" alt="微博" class="barIcon">-->
      <img src="https://mariodelvalle.github.io/CaptainIconWeb/img/twitter.svg" alt="推特" class="barIcon">
      <img src="https://mariodelvalle.github.io/CaptainIconWeb/img/facebook.svg" alt="脸书" class="barIcon">
      <img src="https://mariodelvalle.github.io/CaptainIconWeb/img/linkedin.svg" alt="Ins" class="barIcon">
    </div>
  </div>

</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="less" scoped>
.aboutInfo {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #9a9a9a;

  .info {
    margin: 90px 200px 60px 200px;
    display: flex;

    .left {
      color: white;
      width: 300px;

      .information {
        margin-top: 60px;
        padding-left: 55px;
        text-align: left;

        .address {
          font-weight: bold;
        }

        .tel, .mail {
          margin-top: 10px;
          font-weight: bold;
        }
      }
    }
  }

  .right {
    width: 500px;
    height: 100px;
    margin-top: 10px;
    margin-left: 200px;
    display: flex;
    color: white;

    .box {
      margin-top: 30px;
    }

    .purple {
      height: 100px;
      width: 100%;
      color: #525159;
      font-weight: bold;

    }

    .intro {
      color: white;
      margin-bottom: 15px;
    }

    .service {
      margin-left: 110px;
    }
  }
  .bar {
    height: 40px;
    width: 500px;
    display: flex;
    margin-left: 250px;
    .barIcon{
      width: 30px;
      height: 30px;
      background-color: #9a9a9a;
      margin-right: 20px;
    }
  }

}

</style>