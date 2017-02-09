<template>
	<div>
		<x-header :left-options="{showBack: false}">控制面板&nbsp;&nbsp;<a slot="right" @click="logout">退出</a></x-header>

    <card :header="{title: ''}" style="margin-top: 0;padding-top: 10px;background: #4D90E7;color: #fff;">
      <div slot="content" class="card-flex card-content dashboard-card">
        <div>
          <span>今日销售金额(元)</span>
          <br/>
          <span style="font-size: 3rem;">{{dashboardData.today_income}}</span>
        </div>
      </div>
      <div slot="content" class="card-flex card-content dashboard-card">
        <div style="border-right: 1px #fff solid;">
          <span>待发货订单</span>
        </div>
        <div>
          <span>问题订单</span>
        </div>
      </div>
      <div slot="content" class="card-flex card-content dashboard-card">
        <div>
          <span>{{dashboardData.unsent_orders}}</span>
        </div>
        <div>
          <span>{{dashboardData.pending_orders}}</span>
        </div>
      </div>
      <div slot="content" class="card-flex card-content dashboard-card" style="margin-top: 10px;">
        <div style="border-right: 1px #fff solid;">
          <span>未成团订单</span>
        </div>
        <div>
          <span>浏览人数</span>
        </div>
      </div>
      <div slot="content" class="card-flex card-content" style="padding-top: 0;">
        <div>
          <span>{{dashboardData.no_tuan_count}}</span>
        </div>
        <div>
          <span>{{dashboardData.tool_click}}</span>
        </div>
      </div>
    </card>

    <flexbox v-if="is_admin==1" style="text-align: center;color: #717171;margin-top: 40px;">
      <flexbox-item v-link="{ path: '/goods' }">
        <img src="/static/images/goods.png" style="width: 25%;" alt="">
        <div class="fa" style="display: block;">
          商品
        </div>
      </flexbox-item>
      <flexbox-item v-link="{ path: '/cash' }">
        <img src="/static/images/cash.png" style="width: 25%;" alt="">
        <div class="fa" style="display: block;">
          提现
        </div>
      </flexbox-item>
    </flexbox>
    <flexbox style="text-align: center;color: #717171;margin-top: 40px;">
      <flexbox-item v-link="{ path: '/ordersRouter' }">
        <img src="/static/images/view_details.png" style="width: 25%;" alt="">
        <div class="fa" style="display: block;">
          订单
        </div>
      </flexbox-item>
      <flexbox-item v-link="{ path: '/user' }">
        <img src="/static/images/shops.png" style="width: 25%;" alt="">
        <div class="fa" style="display: block;">
          我的
        </div>
      </flexbox-item>
    </flexbox>
    <div v-if="is_admin==1" style="text-align: center;padding: 20px 0;">
      <b style="color: #4D90E7;" v-link="{ path: '/datas' }">
        <span class="fa fa-line-chart"></span>
        数据监控
      </b>
    </div>



    <loading :show="showLoading"></loading>
    <confirm :show.sync="confirm" title="消息" confirm-text="确定" cancel-text="取消" @on-confirm="onConfirm">
      <p style="text-align:center;">是否退出帐号？</p>
    </confirm>

	</div>
</template>

<script>
import { uAjax } from 'src/assets/js/uajax'
import { Card, Flexbox, FlexboxItem, Confirm, XInput, GroupTitle, Group, XButton, Cell, XHeader, Box, Loading } from 'vux/src/components'
export default {
  components: {
    Card,
    Confirm,
    Flexbox,
    FlexboxItem,
    Loading,
    XHeader,
    XInput,
    Group,
    XButton,
    Cell,
    GroupTitle,
    Box
  },
  data () {
    return {
      confirm: false,
      showLoading: false,
      dashboardData: {},
      is_admin: 0
    }
  },
  ready () {
    this.getDashboard()
    this.isAdmin()
  },
  methods: {
    isAdmin () {
      this.is_admin = localStorage.getItem('is_admin')
    },
    getDashboard () {
      var _this = this
      //不再需要填写入驻信息
      localStorage.removeItem('nowStep')
      uAjax({
        url: '/api/dashboard/data/sum',
        success: function(rsp) {
          _this.dashboardData = rsp.data
        }
      },this)
    },
    logout () {
      this.confirm = true
    },
    onConfirm () {
      var _this = this
      uAjax({
        url: '/api/auth/logout',
        success: function(rsp) {
          localStorage.clear()
          _this.$router.go('/login')
        }
      },this)
    }
  }
}
</script>
