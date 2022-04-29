<template>
  <el-dialog
    :title="$t('msg.excel.title')"
    :model-value="modelValue"
    @close="closed"
    width="30%"
  >
    <el-input
      v-model="excelName"
      :placeholder="$t('msg.excel.placeholder')"
    ></el-input>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.excel.close') }}</el-button>
        <el-button type="primary" @click="onConfirm" :loading="loading">{{
          $t('msg.excel.confirm')
        }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { getUserManageAllList } from '@/api/user-manage'
import { defineProps, defineEmits, ref } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
const emits = defineEmits(['update:modelValue'])

const i18n = useI18n()
const exportDefaultName = i18n.t('msg.excel.defaultName')
const excelName = ref(exportDefaultName)
/**
 * 导出按钮点击事件
 */
const loading = ref(false)
const onConfirm = async () => {
  loading.value = true
  const allUser = (await getUserManageAllList()).list
  console.log(allUser)
  closed()
}

/**
 * 关闭
 */
const closed = () => {
  loading.value = false
  emits('update:modelValue', false)
}
</script>

<style lang="scss" scoped></style>
