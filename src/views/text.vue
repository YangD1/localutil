<template>
  <div style="margin: 20px 0" />
  <el-input v-model="textarea" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="Please input" />
  <el-button type="primary" style="margin-top: 10px" @click="submit">提交</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { text } from '@/api/utils.js'
import { ElMessage } from 'element-plus';
const textarea = ref('')
const submit = async () => {
  const textRes = await text({text: textarea.value})
  ElMessage({
    type: 'success',
    message: textRes.msg
  })
}
</script>