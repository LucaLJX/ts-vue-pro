/**
 * 主页和导航
 * Created by luca_ljx on 2018/10/31 at 下午3:09.
 */
import { Component, Vue } from 'vue-property-decorator'
import { RouteConfig } from 'vue-router'
import './reset.scss'
import './index.scss'
import Submenu from '@/components/Submenu'

@Component({
  components: {
  }
})
class Home extends Vue {

  private mounted () {
    console.log(this.$router)
  }

  private render () {
    return (
      <div class='home-container'>
        <div class='sidebar-container'>
          <div class='sidebar-title'>搞事情</div>
          <div class='sidebar-submenu'>
            <Submenu />
          </div>
        </div>
        <div class='content-container'>
        </div>
      </div>
    )
  }
}

export default Home
