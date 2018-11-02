/**
 * 公用头部
 * 面包屑 + 个人模块
 * todo： 个人信息模块（login out等）
 * Created by luca_ljx on 2018/11/01 at 下午7:20.
 */
import { Component, Vue, Watch } from 'vue-property-decorator'
import './index.scss'

@Component
class Header extends Vue {

  private levelList: any = null

  private getBreadcrumb () {
    let matched: any = this.$route.matched.filter((item: any) => item.name)
    const first = matched[0]
    if (first && first.name !== 'Home') {
      const home: any = [{ path: '/home', meta: { desc: '首页' } }]
      matched = [...home, ...matched]
    }
    this.levelList = matched
  }

  private created () {
    this.getBreadcrumb()
  }

  @Watch('$route')
  private routerChange () {
    this.getBreadcrumb()
  }

  private render () {
    return (
      <div class='breadcrumb-container'>
        <el-breadcrumb separator='/' class='breadcrumb'>
          <transition-group name='breadcrumb'>
            {
              this.levelList.map((item: any, index: number) => (
                item.meta.desc &&
                <el-breadcrumb-item key={ item.path }>
                {
                  index === this.levelList.length - 1
                  ? <span class='no-redirect'>{item.meta.desc}</span>
                  : <router-link to={item.redirect || item.path}>{item.meta.desc}</router-link>

                }
                </el-breadcrumb-item>
              ))
            }
          </transition-group>
        </el-breadcrumb>
      </div>
    )
  }
}

export default Header
