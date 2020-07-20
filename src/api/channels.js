// 与频道操作有关的代码

import request from '@/utils/request'

/**
 * 获取当前频道
 */
export const getChannels = () => {
  return request({
    method: 'get',
    url: '/app/v1_0/user/channels'
  })
}
