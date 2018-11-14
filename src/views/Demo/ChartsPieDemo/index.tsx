/**
 * home
 * Created by luca_ljx on 2018/10/31 at 下午3:09.
 */
import { Component, Vue } from 'vue-property-decorator'
import pieTable from '@/components/pieTable/pie-table'

@Component({
  components: {
    pieTable
  }
})
class ChartsPieDemo extends Vue {

  private propData = {
    data: [
      { value: 335, name: '直接访问' },
      { value: 310, name: '邮件营销' },
      { value: 234, name: '联盟广告' },
      { value: 135, name: '视频广告' },
      { value: 335, name: '直接访问' },
      { value: 310, name: '邮件营销' },
      { value: 234, name: '联盟广告' },
      { value: 135, name: '视频广告' },
      { value: 1548, name: '搜索引擎' }
    ],
    keyWords: [
      { title: '分类', key: 'name' },
      { title: '统计', key: 'value' }
    ],
    seriesName: '访问来源',
    detailUrl: 'this/is/test/url'
  }

  private chartTitle: string = '测试图表--饼图'

  private mounted () {
    console.log(this.$router)
  }

  private render () {
    return (
      <div>
        <pieTable propData={this.propData} chartTitle={this.chartTitle} />
      </div>
    )
  }
}

export default ChartsPieDemo
