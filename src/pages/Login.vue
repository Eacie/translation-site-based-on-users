<template>
  <div
    :style="{
      width: '70%',
      minWidth: '800px',
      maxWidth: '1000px',
      margin: 'auto',
    }"
  >
    <head-top :signedIn="true">
      <template #logo>
        <router-link to="/index">Translate</router-link>
      </template>
    </head-top>

    <div
      :style="{
        backgroundImage: 'linear-gradient(to right, #fc4a1a, #f8a32e)',
        padding: '120px 0',
        paddingBottom: '40px',
      }"
    >
      <div
        :style="{
          width: '50%',
          margin: 'auto',
          backgroundColor: 'white',
          padding: '10px 50px',
          position: 'relative',
        }"
      >
        <a-avatar
          :size="192"
          :style="{
            position: 'absolute',
            left: '50%',
            top: '-96px',
            marginLeft: '-96px',
          }"
        >
          logo
        </a-avatar>

        <a-form v-if="toLogin">
          <a-space
            direction="vertical"
            :size="32"
            :style="{ width: '100%', marginTop: '100px' }"
          >
            <a-input placeholder="请输入用户名/邮箱" :class="{ input: true }">
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
            <div :style="{ textAlign: 'right' }">
              <a-input-password
                placeholder="请输入密码"
                :class="{ input: true }"
              >
                <template #prefix>
                  <LockOutlined />
                </template>
              </a-input-password>
              <span :style="{ color: '#c1c1c1', fontSize: '0.8em' }">
                忘记密码
              </span>
            </div>
          </a-space>
          <a-row justify="center">
            <a-col :style="{ textAlign: 'center' }">
              <a-button shape="circle" size="large" :class="{ button: true }">
                <span
                  :style="{
                    fontWeight: 900,
                    color: 'white',
                  }"
                >
                  登录
                </span>
              </a-button>
              <div
                :style="{
                  color: '#c1c1c1',
                }"
                @click="
                  () => {
                    toLogin = false;
                  }
                "
              >
                没有账号? 点击注册
              </div>
            </a-col>
          </a-row>
          <div
            :style="{
              position: 'absolute',
              width: '5em',
              height: '5em',
              right: '0',
              bottom: '0',
              transform: 'rotate(45deg) translateX(4em)',
              overflow: 'hidden',
            }"
          >
            <QrcodeOutlined
              :style="{
                position: 'absolute',
                right: '0',
                bottom: '0',
                fontSize: '3em',
                transform: 'rotate(-45deg) translate(-0.6em,-1.1em)',
              }"
            />
          </div>
        </a-form>

        <a-form v-else>
          <a-space
            direction="vertical"
            :size="32"
            :style="{ width: '100%', marginTop: '100px' }"
          >
            <a-input placeholder="请输入邮箱" :class="{ input: true }">
              <template #prefix>
                <MailOutlined />
              </template>
            </a-input>
            <a-input placeholder="请输入用户名" :class="{ input: true }">
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
            <a-input-password placeholder="请输入密码" :class="{ input: true }">
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input-password>
            <a-input-password
              placeholder="请再次输入密码"
              :class="{ input: true }"
            >
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input-password>
          </a-space>
          <a-row justify="center">
            <a-col :style="{ textAlign: 'center' }">
              <a-button shape="circle" size="large" :class="{ button: true }">
                <span
                  :style="{
                    fontWeight: 900,
                    color: 'white',
                  }"
                >
                  注册
                </span>
              </a-button>
              <div
                :style="{
                  color: '#c1c1c1',
                }"
                @click="
                  () => {
                    toLogin = true;
                  }
                "
              >
                已有账号? 点击登录
              </div>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <div :style="{ color: 'white', textAlign: 'center', padding: '0.5em' }">
        帮助中心
      </div>
    </div>

    <foot-down> </foot-down>
  </div>
</template>

<script>
import footDown from "../components/FootDown";
import headTop from "../components/HeadTop";
import {
  LockOutlined,
  MailOutlined,
  QrcodeOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

export default {
  name: "Login",
  components: {
    LockOutlined,
    MailOutlined,
    QrcodeOutlined,
    UserOutlined,
    footDown,
    headTop,
  },

  data() {
    return {
      toLogin: true,
    };
  },

  methods: {
    validate(event) {
      console.log(event.target);
      event.preventDefault();
    },
  },
};
</script>

<style lang="less" scoped>
.input {
  border: 0;
  height: 3em;
  border-bottom: 1px solid #f26e18;
}

.button {
  border-radius: 100%;
  height: 3em;
  width: 3em;
  font-size: 2em;
  background-color: #f26e18;
  color: #fff;
}
</style>
