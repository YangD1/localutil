<template>
<el-row>
  <el-button type="primary" @click="goto('upload')">上传</el-button>
  <el-button type="primary" @click="goto('text')">文字</el-button>
</el-row>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue';
const router = useRouter()

onMounted((): void => {
  console.log(import.meta.env.VITE_BASE_API)
}) 
const goto = (name: string): void =>{
  router.push({
    name
  })
}
</script>