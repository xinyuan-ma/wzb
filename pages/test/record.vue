<template>
  <div class="record-table">
    <p>一共有 {{ recordList.length }} 条记录</p>
    <div class="table">
      <el-table
        :data="recordList"
        stripe
        style="width: 100%">
        <el-table-column
          prop="title"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="msgText"
          label="纯文本">
          <template slot-scope="scope">
            <pre>{{ scope.row.msgText }}</pre>
          </template>
        </el-table-column>
        <el-table-column
          prop="fullText"
          label="富文本">
          <template slot-scope="scope">
            <div class="html-box" v-html="scope.row.fullText"></div>
          </template>
        </el-table-column>
        <el-table-column
          prop="time"
          label="时间">
          <template slot-scope="scope">
            <span class="time-tag">{{ new Date(scope.row.time) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecordTable',
  data () {
    return {
      recordList: []
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    async loadData () {
      const data = await fetch('https://wanshuijin.demo.jonham.cn/api/_admin_/record').then(res => res.json())
      // const data = await fetch('http://localhost:1234/api/_admin_/record').then(res => res.json())

      this.recordList = data.data
    }
  },
}
</script>
<style lang="scss" scoped>
.table {
  width: 100%;

  color: black;
}

.record-table {
  padding: 15px;
}
</style>
<style lang="scss">
.el-table {
  color: black;
}
</style>
