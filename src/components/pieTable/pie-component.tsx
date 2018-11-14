
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
class PieComponent extends Vue {

  @Prop({ default: Object.create(null) })
  private pieData!: any

  // 是否渲染饼图
  private isShowPie: boolean = false

  // 初始化pie数据
  private options: any = {
    title : {
      show: false
    },
    tooltip : {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: []
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius : '40%',
        center: ['50%', '30%'],
        data: [],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  private mounted () {
    this.initEchartsData(this.pieData)
  }

  private initEchartsData (data: any) {
    if (data.length !== 0) {
      this.options.series[0].data = this.pieData.data
      this.options.legend.data = this.pieData.data.map((item: any) => item.name)
      this.isShowPie = true
    }
  }

  private goToDetail (params: any) {
    let fullUrl: string = ''
    fullUrl = `${this.pieData.detailUrl}&id=${this.pieData.data[params.dataIndex].value}`
  }

  private render () {
    return (
      <div class='echarts-pie-container'>
        {
          this.isShowPie ? <v-chart options={this.options} onClick={(item: any) => this.goToDetail(item)}></v-chart> : <p>暂无数据</p>
        }
      </div>
    )
  }

}

export default PieComponent
