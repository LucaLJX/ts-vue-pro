import { Component, Vue } from 'vue-property-decorator'
import Dashboard from '@/views/dashboard/index'

@Component
export default class App extends Vue {
  private render () {
    return (
      <div id='app'>
        <Dashboard></Dashboard>
      </div>
    )
  }
}
