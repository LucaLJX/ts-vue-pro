/**
 * home
 * Created by luca_ljx on 2018/10/31 at 下午3:09.
 */
import { Component, Vue } from 'vue-property-decorator'

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
      <div>home</div>
    )
  }
}

export default Home
