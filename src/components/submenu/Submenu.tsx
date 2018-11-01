/**
 * 导航组件
 * Created by luca_ljx on 2018/10/31 at 下午6:55.
 */
import { Component, Vue } from 'vue-property-decorator'
import { RouteConfig } from 'vue-router'

@Component({
  components: {
  }
})
class Submenu extends Vue {

  private routes: any[] = []

  private created () {
    // @ts-ignore
    this.routes = this.$router.options.routes
  }

  private handleOpen (key: any, keyPath: any) {
    console.log(key, keyPath)
  }

  private handleClose (key: any, keyPath: any) {
    console.log(key, keyPath)
  }

  private check (item: any) {
    // 是否有子节点
    return item.children && item.children!.length > 0
  }

  private renderNoChildren (item: any) {
    if (item.path !== '/') {
      return <router-link
            to={`${item.path}`}
            key={item.path}>
            <el-menu-item index={`${item.path}`}>
              {
                item.meta.icon !== '' ? <i class={item.meta.icon}></i> : null
              }
              <span slot='title'>{item.meta.desc}</span>
            </el-menu-item>
          </router-link>
    }
  }

  private renderHasChildren (item: any) {
    return <el-submenu index={`${item.path}`}>
            <template slot='title'>
              {
                item.meta.icon !== '' ? <i class={item.meta.icon}></i> : null
              }
              <span>{item.meta.desc}</span>
            </template>
            {
              item.children.map((childrenItem: any) => (
                <router-link
                  to={`${item.path}/${childrenItem.path}`}
                  key={`${item.path}/${childrenItem.path}`}>
                  <el-menu-item index={`${item.path}/${childrenItem.path}`}>
                    {
                      childrenItem.meta.icon !== '' ? <i class={childrenItem.meta.icon}></i> : null
                    }
                    <span slot='title'>{`${item.path}/${childrenItem.path}`}</span>
                  </el-menu-item>
                </router-link>
              ))
            }
          </el-submenu>
  }

  private render () {
    return (
      <div>
        <el-menu
          default-active={this.$route.path}
          class='el-menu-vertical-demo'
          background-color='#2d3a4b'
          text-color='#fff'
          active-text-color='#38ccff'
          onOpen={(key: any, keyPath: any) => this.handleOpen(key, keyPath)}
          onClose={(key: any, keyPath: any) => this.handleClose(key, keyPath)}>
          {
            this.routes.map((item: any, index: number) => (
              item.children.length > 0 ? this.renderHasChildren(item) : this.renderNoChildren(item)
            ))
          }
        </el-menu>
      </div>

    )
  }
}

export default Submenu
