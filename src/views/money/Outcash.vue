<template>
 <div class="content" v-title="title" style="background-color:#fff;">
   <div class="operatecash" v-if="operate==true">
     <div class="row outcashuser">
       <div class="col-20 headimg">
         <img src="../../assets/images/ic_wechat_logo.png" >
       </div>
       <div class="col-80 headinfo">
         <span>远方</span><br>
         <small class="fontcolor">当前荔枝<span> {{tixianlizhi}}</span>（本次最多可提现 <span> {{tixiancash}} </span> 元）</small>
       </div>
     </div>
     <div class="list-block margin0 fontsize">
       <ul>
         <li class="item-content">
           <div class="item-inner marginL0">
             <div class="item-title label">本次提现：</div>
             <div class="item-input row">
               <div class="col-40"><input type="text" placeholder="" v-model="cashnum"></div>
               <div class="col-50 caculate"><span>元</span> <small>(合 <span>{{ lizhinum }}</span>荔枝)</small></div>
             </div>
           </div>
         </li>
         <li class="item-content">
           <div class="item-inner marginL0">
             <div class="item-title label">应到账：</div>
             <div class="item-input row">
               <div class="col-90 caculate"><span class="fontcolor"> 0 </span><span> 元</span></div>
             </div>
           </div>
         </li>
         <li class="item-content tixian">
           <div class="item-inner marginL0">
             <div class="item-title label">提现到：</div>
             <div class="item-input row">
               <div class="col-26 totixian" :class="chooseZFB ? 'chooseStyle' : ''" @click="payStyle('zfb')">
                 <svg version="1.1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                    x="0px" y="0px" width="38px" height="38px" viewBox="0 0 38 38" enable-background="new 0 0 38 38" xml:space="preserve">
               <defs>
               </defs>
               <path :fill="chooseZFB ? '#fe405a' : '#333'" d="M38,26V7.3c0-4-3.3-7.3-7.3-7.3H7.3C3.3,0,0,3.3,0,7.3v23.4c0,4,3.3,7.3,7.3,7.3h23.4c3.6,0,6.6-2.6,7.2-6
                   c-1.9-0.8-10.3-4.5-14.7-6.6c-3.3,4-6.8,6.5-12.1,6.5c-5.3,0-8.8-3.2-8.3-7.2c0.3-2.6,2.1-6.9,9.8-6.1c4.1,0.4,6,1.1,9.3,2.2
                   c0.9-1.6,1.6-3.3,2.1-5.2H9.2v-1.5h7.3v-2.6H7.6V9.9h8.9V6.1c0,0,0.1-0.6,0.7-0.6h3.7v4.4h9.5v1.6h-9.5v2.6h7.7
                   c-0.7,2.9-1.8,5.6-3.1,7.9C27.8,22.9,38,26,38,26L38,26L38,26L38,26z M10.5,29.4c-5.6,0-6.4-3.5-6.1-5c0.3-1.5,1.9-3.4,5-3.4
                   c3.5,0,6.7,0.9,10.5,2.8C17.2,27.3,13.9,29.4,10.5,29.4L10.5,29.4L10.5,29.4z M10.5,29.4"/>
               </svg>
                 <small>支付宝</small>
               </div>
               <div class="col-26 totixian" :class="chooseWX ? 'chooseStyle' : ''" @click="payStyle('wx')">
                 <svg version="1.1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                    x="0px" y="0px" width="44px" height="36px" viewBox="0 0 44 36" enable-background="new 0 0 44 36" xml:space="preserve">
               <defs>
               </defs>
               <path :fill="chooseWX ? '#fe405a' : '#333'" d="M29.8,10.9c0.5,0,1,0,1.5,0.1C29.9,4.7,23.2,0,15.6,0C7,0,0,5.9,0,13.3c0,4.3,2.3,7.8,6.2,10.6l-1.6,4.7
                   l5.4-2.7c1.9,0.4,3.5,0.8,5.5,0.8c0.5,0,1,0,1.5-0.1c-0.3-1-0.5-2.1-0.5-3.3C16.5,16.4,22.4,10.9,29.8,10.9L29.8,10.9z M21.4,6.7
                   c1.2,0,1.9,0.8,1.9,2c0,1.2-0.8,2-1.9,2c-1.2,0-2.3-0.8-2.3-2C19.1,7.4,20.2,6.7,21.4,6.7L21.4,6.7z M10.5,10.6
                   c-1.2,0-2.3-0.8-2.3-2c0-1.2,1.2-2,2.3-2s1.9,0.8,1.9,2C12.5,9.8,11.7,10.6,10.5,10.6L10.5,10.6z M44,23.1c0-6.3-6.2-11.4-13.2-11.4
                   c-7.4,0-13.2,5.1-13.2,11.4c0,6.3,5.8,11.4,13.2,11.4c1.6,0,3.1-0.4,4.7-0.8l4.3,2.3l-1.2-3.9C41.7,29.7,44,26.6,44,23.1L44,23.1z
                    M26.5,21.1c-0.8,0-1.6-0.8-1.6-1.6c0-0.8,0.8-1.6,1.6-1.6c1.2,0,1.9,0.8,1.9,1.6C28.4,20.4,27.7,21.1,26.5,21.1L26.5,21.1z
                    M35,21.1c-0.8,0-1.5-0.8-1.5-1.6c0-0.8,0.8-1.6,1.5-1.6c1.2,0,1.9,0.8,1.9,1.6C37,20.4,36.2,21.1,35,21.1L35,21.1z M35,21.1"/>
               </svg>
                 <small>微信</small>
               </div>
               <div class="col-26 totixian" :class="chooseYL ? 'chooseStyle' : ''" @click="payStyle('yl')">
                 <svg version="1.1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                    x="0px" y="0px" width="38px" height="38px" viewBox="0 0 38 38" enable-background="new 0 0 38 38" xml:space="preserve">
               <defs>
               </defs>
               <path :fill="chooseYL ? '#fe405a' : '#333'" d="M38,26V7.3c0-4-3.3-7.3-7.3-7.3H7.3C3.3,0,0,3.3,0,7.3v23.4c0,4,3.3,7.3,7.3,7.3h23.4c3.6,0,6.6-2.6,7.2-6
                   c-1.9-0.8-10.3-4.5-14.7-6.6c-3.3,4-6.8,6.5-12.1,6.5c-5.3,0-8.8-3.2-8.3-7.2c0.3-2.6,2.1-6.9,9.8-6.1c4.1,0.4,6,1.1,9.3,2.2
                   c0.9-1.6,1.6-3.3,2.1-5.2H9.2v-1.5h7.3v-2.6H7.6V9.9h8.9V6.1c0,0,0.1-0.6,0.7-0.6h3.7v4.4h9.5v1.6h-9.5v2.6h7.7
                   c-0.7,2.9-1.8,5.6-3.1,7.9C27.8,22.9,38,26,38,26L38,26L38,26L38,26z M10.5,29.4c-5.6,0-6.4-3.5-6.1-5c0.3-1.5,1.9-3.4,5-3.4
                   c3.5,0,6.7,0.9,10.5,2.8C17.2,27.3,13.9,29.4,10.5,29.4L10.5,29.4L10.5,29.4z M10.5,29.4"/>
               </svg>
                 <small>银联</small>
               </div>
             </div>
           </div>
         </li>

         <li class="item-content">
           <div class="item-inner marginL0">
             <div class="item-title label">支付宝：</div>
             <div class="item-input row">
               <div class="col-100"><input type="text" v-model="accountnum" placeholder="请输入您的支付宝账号"></div>
             </div>
           </div>
         </li>
         <li class="item-content">
           <div class="item-inner marginL0">
             <div class="item-title label">姓名：</div>
             <div class="item-input row">
               <div class="col-100"><input type="text" placeholder="请输入您支付宝真实姓名"></div>
             </div>
           </div>
         </li>
       </ul>
       <div class="content-block btnstyle">
         <div class="row">
           <div class="col-100">
             <a href="javascript:;" @click="submit()" class="button button-big button-fill button-round button-danger confirm-ok">确认提现</a>
           </div>
         </div>
         <div class="row tixianproblem"><a href="javascript:;" class="">提现常见问题</a></div>
       </div>
     </div>
   </div>
   <div v-if="fail==true">
     <div class="content-padded textcenter">
       <h3><img src="../../assets/images/ic_shenheweitongguo.png"></h3>
       <h4 class="fontcolor">提现失败</h4>
       <p class="">请检查账户是否异常</p>
       <div class="content-block mt50">
         <div class="row">
           <div class="col-100">
             <a href="javascript:;" @click="reapply" class="button button-big button-fill button-round button-danger confirm-ok">重新申请</a>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div v-if="success==true">
     <div class="content-padded textcenter">
       <h3><img src="../../assets/images/ic_shenhezhong.png"></h3>
       <h4 class="fontcolor">审核中</h4>
       <p class="fontcolor33">审核中，请您耐心等待！</p>
     </div>
   </div>

 </div>
</template>
<script>
  import $ from 'n-zepto'
  export default {
    data () {
      return {
        title: '提现',
        tixianlizhi: 0,
        tixiancash: 0,
        operate: true,
        fail: false,
        success: false,
        cashnum: '',
        accountname: '支付宝账户',
        lizhinum: 0,
        accountnum: '',
        outcashUrl: '',
        outcashDate: '',
        chooseWX: false,
        chooseZFB: true,
        chooseYL: false
      }
    },
    methods: {
      submit: function () {
        let _this = this
        $.confirm('确定要提现 <span style="color:#fe405a">' + this.cashnum +
        '元（合' + this.lizhinum + '荔枝）</span>到<span style="color:#fe405a">' +
        this.accountname + '：' + this.accountnum + '</span>?', function () {
          _this.operate = false
          _this.fail = true
          _this.success = false
          _this.$http.post(this.outcashUrl, this.outcashDate).then((response) => {
            $.toast('提交成功！')
            sessionStorage.setItem('username', response.body.users.username)
            sessionStorage.setItem('password', response.body.users.password)
          })
        })
      },
      reapply: function () {
        this.operate = true
        this.fail = false
        this.success = false
      },
      payStyle: function (name) {
        switch (name) {
          case 'zfb':
            this.chooseWX = false
            this.chooseZFB = true
            this.chooseYL = false
            break
          case 'wx':
            this.chooseWX = true
            this.chooseZFB = false
            this.chooseYL = false
            break
          case 'yl':
            this.chooseWX = false
            this.chooseZFB = false
            this.chooseYL = true
            break
        }
      }
    },
    watch: {
      cashnum: function () {
        this.$http.post('', '').then((response) => {
          $.toast('提交成功！')
        })
      }
    }
  }
</script>
<style scoped lang="less">
@import "../../assets/less/outcash.less";
</style>
