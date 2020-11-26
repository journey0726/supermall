import {request} from './request.js'

export function getHomeMultiData() {
  return request({
    url:'/home/multidata'
  });
}

export function getGoodsData(type, page) {
  return request({
    url:'/test/getGoods',
    params:{
      type,
      page
    }
  });
}