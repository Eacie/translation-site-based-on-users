<template>
  <div
    :style="{
      width: '70%',
      minWidth: '800px',
      maxWidth: '1000px',
      margin: 'auto',
    }"
  >
    <a-back-top :visibilityHeight="1000" />

    <head-top :signedIn="true">
      <template v-slot:logo>
        <router-link to="/index">Translate</router-link>
      </template>
    </head-top>

    <div
      :style="{
        backgroundImage: 'linear-gradient(to right, #fc4a1a, #f8a32e)',
        padding: '80px 0',
        paddingBottom: '40px',
      }"
    >
      <div
        :style="{
          width: 'calc(200% / 3)',
          margin: 'auto',
          backgroundColor: 'white',
        }"
      >
        <a-row justify="space-around">
          <a-col>
            <a-select :bordered="false" size="large" value="中文">
              <a-select-option value="中文">中文</a-select-option>
              <a-select-option value="英文">英文</a-select-option>
            </a-select>
          </a-col>
          <a-col>
            <SwapOutlined :style="{ lineHeight: '3em' }" />
          </a-col>
          <a-col>
            <a-select :bordered="false" size="large" value="英语">
              <a-select-option value="英文">英文</a-select-option>
            </a-select>
          </a-col>
        </a-row>
        <a-textarea
          :autoSize="{
            minRows: 4,
            maxRows: 12,
          }"
          :style="{
            fontSize: '1.5em',
          }"
        >
        </a-textarea>
        <a-row :gutter="30" :style="{ padding: '0.5em' }">
          <a-col>
            <a-button shape="circle" size="large" type="dashed">
              <template #icon>
                <AudioOutlined />
              </template>
            </a-button>
          </a-col>
          <a-col>
            <a-button shape="circle" size="large" type="dashed">
              <template #icon>
                <SoundOutlined />
              </template>
            </a-button>
          </a-col>
          <a-col :style="{ marginLeft: 'auto' }">
            <a-button shape="circle" size="large" type="dashed">
              <template #icon>
                <SearchOutlined />
              </template>
            </a-button>
          </a-col>
        </a-row>
      </div>
    </div>

    <div
      :style="{
        padding: '80px 0',
        paddingTop: '40px',
      }"
    >
      <div
        :style="{
          width: 'calc(200% / 3)',
          margin: 'auto',
        }"
      >
        <a-list
          bordered
          :data-source="getAnswer"
          item-layout="vertical"
          :loading="false"
          size="large"
          :split="false"
          :style="{ backgroundColor: 'white' }"
        >
          <template #header>
            <TagFilled
              :style="{
                position: 'absolute',
                color: '#FA7624',
                fontSize: '5em',
                transform: 'translate(-40px, -20px) rotate(45deg)',
                borderRadu,
              }"
            />
          </template>
          <template #renderItem="{ item }">
            <a-list-item>
              <span>{{ item.content }}</span>
              <a-row
                justify="space-between"
                :style="{
                  paddingTop: '1em',
                }"
              >
                <a-col>
                  <a-button shape="circle" type="dashed">
                    <template #icon>
                      <SoundOutlined />
                    </template>
                  </a-button>
                </a-col>
                <a-col>
                  <a-space>
                    <a-button shape="circle" type="dashed">
                      <template #icon>
                        <CopyOutlined />
                      </template>
                    </a-button>

                    <a-button shape="circle" type="dashed">
                      <template #icon>
                        <StarOutlined />
                      </template>
                    </a-button>

                    <a-tooltip>
                      <template #title>
                        {{ item.approve }}
                      </template>
                      <a-button shape="circle" type="dashed">
                        <template #icon>
                          <LikeOutlined />
                        </template>
                      </a-button>
                    </a-tooltip>

                    <a-tooltip>
                      <template #title>
                        {{ item.oppose }}
                      </template>
                      <a-button shape="circle" type="dashed">
                        <template #icon>
                          <DislikeOutlined />
                        </template>
                      </a-button>
                    </a-tooltip>
                  </a-space>
                </a-col>
              </a-row>
            </a-list-item>
          </template>
          <template #loadMore>
            <a-button v-if="loadingMore" block ghost size="large">
              <a-spin />
            </a-button>
            <a-button v-else block ghost size="large" @click="onLoadMore">
              <span :style="{ color: '#C1C1C1' }">点击查看更多</span>
            </a-button>
          </template>
        </a-list>
        <div :style="{ color: '#C1C1C1', padding: '0.5em' }">
          对结果不满意?
        </div>
        <a-row>
          <a-col :span="12">
            <a-button block size="large">自己上传</a-button>
          </a-col>
          <a-col :span="12">
            <a-button block size="large">人工翻译</a-button>
          </a-col>
        </a-row>
      </div>
    </div>

    <foot-down> </foot-down>
  </div>
</template>

<script>
import {
  AudioOutlined,
  CopyOutlined,
  DislikeOutlined,
  LikeOutlined,
  SearchOutlined,
  SoundOutlined,
  StarOutlined,
  SwapOutlined,
  TagFilled,
} from "@ant-design/icons-vue";
import _ from "lodash";
import Mock from "mockjs";
import { defineComponent } from "vue";
import footDown from "../components/FootDown";
import headTop from "../components/HeadTop";

export default defineComponent({
  name: "Index",
  components: {
    AudioOutlined,
    CopyOutlined,
    DislikeOutlined,
    LikeOutlined,
    SearchOutlined,
    SoundOutlined,
    StarOutlined,
    SwapOutlined,
    TagFilled,
    footDown,
    headTop,
  },

  data() {
    return {
      answers: [1, 2, 3, 4, 5].map(() =>
        Mock.mock({
          content: "@paragraph",
          "approve|0-100": 0,
          "oppose|0-100": 0,
        })
      ),
      loading: true,
      loadingMore: false,
    };
  },

  computed: {
    getAnswer: {
      get() {
        return [...this.answers].sort(
          (a, b) => b.approve - b.oppose + a.oppose - a.approve
        );
      },
    },
  },

  methods: {
    onLoadMore() {
      this.loadingMore = true;
      setTimeout(() => {
        let res = [1, 2, 3, 4, 5].map(() =>
          Mock.mock({
            content: "@paragraph",
            "approve|0-100": 0,
            "oppose|0-100": 0,
          })
        );
        this.answers = _.concat(this.answers, res);
        this.loadingMore = false;
      }, 1000);
    },
  },
});
</script>

<style lang="less" scope></style>
