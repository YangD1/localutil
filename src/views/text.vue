<template>
  <div style="margin: 20px 0" />
  <el-input v-model="textarea" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="Please input" />
  <el-button type="primary" style="margin-top: 10px" @click="submit">提交</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
const textarea = ref('')
const submit = (): void => {
  axios.post(textarea.value).then((res): void => {
    console.log(res)
  })
}
</script>