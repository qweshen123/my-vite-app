import FetchUtil from '@/util/FetchUtil';
import store from '@/common/store';
import qs from 'qs';
const UserUtils = {
  login(){
    return FetchUtil.get('/user/api/o_login').then(res => {
      if (res.data.status !== '1') throw res.data;
      store.userInfo = {
        ...store.userInfo,
        ...(res.data.data.user_info || {}),
        isLogin: !!res.data.data.user_info?.id,
        token: res.data.data.token,
      }
    }).catch(err => {
      console.error(err);
      throw err;
    })
  },
  updateInfo(options = {}){
    return FetchUtil.get('/user/api/update_user', {
      params: {
        ...options
      }
    })
  }
}
export default UserUtils;