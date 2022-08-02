import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'
import axios from './'
namespace Utils {
  // 请求参数
  export interface textRequest {
    text: string
  }
  // 返回参数
  export interface textResponse {
    msg: string
  }
}

export const text = (params: Utils.textRequest) => {
  return axios.post<Utils.textResponse>('/localutil/text', params)
}