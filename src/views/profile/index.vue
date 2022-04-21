<template>
  <div class="">个人中心</div>
  <button @click="test">show</button>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    v-model:currentPage="currentPage1"
    :page-size="100"
    layout="total, prev, pager, next"
    :total="1000"
  />
</template>

<script setup>
import {} from 'vue'
import { ElMessageBox } from 'element-plus'
const handleSizeChange = val => {
  console.log(`每页 ${val} 条`)
}
const handleCurrentChange = val => {
  console.log(`当前页: ${val}`)
}
const test = () => {
  ElMessageBox.confirm('确认关闭？')
    .then(_ => {})
    .catch(_ => {
      // catch
    })
}
</script>

<style lang="scss" scoped></style>
