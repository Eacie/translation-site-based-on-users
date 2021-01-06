<template>
  <div class="home">
    <head-top :signed-in="true">
      <template v-slot:logo>
        <router-link to="/home">Translate</router-link>
      </template>
    </head-top>

    <div class="body">
      <div class="up">
        <div class="input-box">
          <div class="choose">
            <div class="label">检测到汉语</div>
            <div class="icon">箭头</div>
            <div class="label">英语</div>
          </div>
          <div class="input-wrap">
            <div class="input">
              <div class="delete">x</div>
              <textarea name="input" id="input"></textarea>
            </div>
            <div class="icon-items">
              <div class="icon-item">语音输入</div>
              <div class="icon-item">朗读文本</div>
              <div class="icon-item">翻译</div>
            </div>
          </div>
        </div>
      </div>
      <div class="down">
        <div class="output-box">
          <div class="item" v-for="i in 4" :key="i">
            <div class="popular" v-if="i == 1">获赞最多</div>
            <div class="output">abcdefg</div>
            <div class="icon-items">
              <div class="left">
                <div class="icon-item">朗读文本</div>
              </div>
              <div class="right">
                <div class="icon-item">复制</div>
                <div class="icon-item">收藏</div>
                <div class="icon-item">赞同</div>
                <div class="icon-item">反对</div>
              </div>
            </div>
          </div>
          <div class="more">点击查看更多</div>
        </div>
        <div class="upload-box">
          <div class="label">对结果不满意?</div>
          <div class="upload-items">
            <div class="upload-item">自己上传</div>
            <div class="upload-item">人工翻译</div>
          </div>
        </div>
      </div>
    </div>

    <foot-down></foot-down>
  </div>
</template>

<script>
import headTop from "../../components/HeadTop.vue";
import footDown from "../../components/FootDown.vue";

export default {
  name: "Home",
  components: {
    headTop,
    footDown,
  },
  data() {
    return {
      input: "",
      output: "",
    };
  },
  methods: {
    translate() {},
  },
};
</script>

<style lang="less" scoped>
.home {
  min-width: 800px;
  max-width: 100%;
  .body {
    width: 100%;
    display: flex;
    flex-direction: column;
    .up {
      background-image: linear-gradient(to right, #fc4a1a, #f8a32e);
      padding-top: 80px;
      padding-bottom: 20px;
      .input-box {
        width: 50%;
        margin: auto;
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;
        .choose {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          border-bottom: 1px #e0dfdf solid;
          padding-bottom: 5px;
          .label {
            flex: 1;
            color: #a19f9f;
            font-size: 14px;
            text-align: center;
          }
          .icon {
            position: absolute;
          }
        }
        .input-wrap {
          .input {
            position: relative;
            .delete {
              position: absolute;
              right: 10px;
              top: 10px;
            }
            textarea {
              width: 100%;
              overflow: auto;
              word-break: break-all;
              resize: none;
              height: 100px;
              padding: 10px;
              margin-top: 10px;
            }
          }
          .icon-items {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            .icon-item {
              flex: 1;
              text-align: center;
            }
          }
        }
      }
    }
    .down {
      display: flex;
      flex-direction: column;
      .output-box {
        width: 50%;
        margin: auto;
        box-shadow: 0px 0px 10px #aaa;
        border-radius: 5px;
        padding: 5px;
        margin-top: 20px;
        .item {
          border-bottom: 1px #fcc9b3 solid;
          position: relative;
          .popular {
            position: absolute;
            left: -20px;
          }
          .output {
            padding: 30px 0;
          }
          .icon-items {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .left {
              .icon-item {
                text-align: center;
              }
            }
            .right {
              display: flex;
              flex-direction: row;
              .icon-item {
                flex-grow: 1;
                text-align: center;
                margin-left: 5px;
              }
            }
          }
        }
        .more {
          text-align: center;
          font-size: 12px;
          color: #c1c1c1;
          padding: 10px;
        }
      }
      .upload-box {
        width: 50%;
        margin: auto;
        margin-bottom: 40px;
        .label {
          margin-top: 10px;
          font-size: 10px;
          color: #c1c1c1;
          padding: 5px;
        }
        .upload-items {
          box-shadow: 0px 0px 10px #aaa;
          border-radius: 5px;
          display: flex;
          flex-direction: row;
          .upload-item {
            flex-grow: 1;
            text-align: center;
            padding: 10px;
            color: #c1c1c1;
          }
          :first-child {
            border-right: 1px solid #c1c1c1;
          }
        }
      }
    }
  }
}
</style>
