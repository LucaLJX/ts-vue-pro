
import { Component, Prop, Vue } from 'vue-property-decorator'
import { KeyArrItem } from '@/model/echarts'

@Component
class TableComponent extends Vue {

  @Prop({ default: Object.create(null) })
  private tableData!: any

  private mounted () {
    console.log('change to el-table page.')
    console.log(this.tableData)
    this.initTable(this.tableData.keyWords)
  }

  private initTable (keysArr: Array<KeyArrItem>) {
    console.log(keysArr)
    if (keysArr.length !== 0) {
      return keysArr.map((item) => (
        <el-table-column
          prop={item.key}
          label={item.title}>
        </el-table-column>
      ))
    }
  }

  private render () {
    return (
      <div class='echarts-pie-table-container'>
        <el-table
          border
          data={this.tableData.data}
          stripe
          style='width: 100%'
          height='300'>
          {this.initTable(this.tableData.keyWords)}
        </el-table>
      </div>
    )
  }

}

export default TableComponent
