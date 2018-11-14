
import { Component, Prop, Vue } from 'vue-property-decorator'
import chartsPie from './pie-component'
import chartsTable from './table-component'
import './index.scss'

@Component({
  components: {
    chartsPie, chartsTable
  }
})
class PieTable extends Vue {

  // table-pie组件的title
  @Prop({ default: '' })
  private chartTitle!: string

  // 对table-pie组件的样式自定义
  @Prop({ default: '' })
  private cardStyle!: 'string'

  // 父组件传递过来的数据
  @Prop({ default: Object.create(null) })
  private propData!: any

  private isShowTable: boolean = false

  private mounted () {
    console.log('change to echarts pie page.')
  }

  private render () {
    return (
      <el-card class='echarts-pie-card' style={this.cardStyle}>
        <div slot='header' class='clearfix'>
          <span>{this.chartTitle}</span>
          <el-button
          style='float: right; padding: 3px 0'
          type='text'
          onClick={() => this.isShowTable = !this.isShowTable}>
            切换图表
          </el-button>
        </div>
        {
          this.isShowTable ? <chartsTable tableData={this.propData} /> : <chartsPie pieData={this.propData} />
        }
      </el-card>
    )
  }
}

export default PieTable
