/**
 * 主页和导航
 * Created by luca_ljx on 2018/10/31 at 下午3:09.
 */
import { Component, Vue } from 'vue-property-decorator'
import './reset.scss'
import './index.scss'
import Submenu from '@/components/submenu/Submenu'

@Component({
  components: {
  }
})
class Dashboard extends Vue {

  private mounted () {
    console.log(this.$router)
  }

  private render () {
    return (
      <div class='home-container'>
        <div class='sidebar-container'>
          <div class='sidebar-title'>Element UI</div>
          <div class='sidebar-submenu'>
            <Submenu />
          </div>
        </div>
        <div class='content-container'>
          <div class='breadcrumb-container'>
            <el-breadcrumb separator='/' class='breadcrumb'>
              <el-breadcrumb-item to='/'>首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href='/'>活动管理</a></el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class='content'>
            <router-view/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
