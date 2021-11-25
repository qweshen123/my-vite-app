<template>
    <!-- <template v-if="slice">
        <van-swipe :autoplay="3000" :show-indicators="false">
            <van-swipe-item v-for="(item, index) in slice" :key="index">
                <div class="img-wrap">
                    <img v-lazy="item.pic" class="img" />
                </div>
            </van-swipe-item>
        </van-swipe>
    </template> -->
            <!-- <select id="mySelect">
                  <option>Apple</option>
                  <option>Orange</option>
                  <option>Pineapple</option>
                  <option>Banana</option>
            </select>

              <div class="text-value">{{value}}</div> -->

    <div class="main">
        <div class="content">
            <div class="thumb-list">
                <template v-for="(item,index) in thumbList" :key="index">
                    <div class="thumb-items flex flex-direction-column flex-center" @click="toNewDetail(item.tid)">
                        <div class="item-title-wrap flex flex-center">
                            <div class="item-pic"></div>
                            <div class="item-title">{{item.title}}</div>
                        </div>
                        <img :src="item.thumb" class="thumb-img">
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../../common/store';
import { getTopic } from '@/common/server.js';
import _ from 'lodash';
export default {
    setup() {
        
    },
    data(){
        return {
            store,
            slice:[],
            value:'Apple',
            thumbList:[]
        }
    },
    mounted(){
        getTopic.call(this, {
            p:1,
            pSize:5,
            tid:95
        }).then(res => {
            console.log(res)
            this.thumbList = res
        })
    },
    methods: {
        toNewDetail(id){
            wx.miniProgram.navigateTo({
                url: `/pages/news/detail/detail?article_id=${id}`
            })
        }
    }


}
</script>

<style lang="scss" scoped>
@import '@/style/fonts-icon.css';


.main {
    width: 100%;
    min-height:100vh;
    background-image: url(https://img-asset.chemm.com/assets/wcjs/v2.0/bg-header.png);
    background-size: 100% 1660px;
    background-position: left top;
    background-repeat: no-repeat;
    padding-top: 416px;
    background-color: #160d20;
}

.item-title-wrap {
    position: relative;
    width: 100vw;
    color:#7EFFE7;

    .item-title {
        position: relative;
        font-size: 32px;
        font-weight: 600;

        &::before {
            position: absolute;
            left: -56px;
            top:50%;
            transform: translateY(-50%);
            content:'';
            display: block;
            width: 40px;
            height: 2px;
            background: #7EFFE7;
        }

        &::after {
            position: absolute;
            right: -56px;
            top:50%;
            transform: translateY(-50%);
            content:'';
            display: block;
            width: 40px;
            height: 2px;
            background: #7EFFE7;
        }
    }

    .item-pic {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 254px;
        height: 72px;
        transform: translate(-50%, -50%);
        background-image: url(data:image/png;base64,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);
        background-size: cover;
        background-position: center;
    }
}

.thumb-img {
    width: 690px;
    margin: 32px 0 64px 0;
}

</style>