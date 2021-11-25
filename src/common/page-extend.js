import UserUtils from '@/utils/UserUtils';
import store from '@/common/store';
import MPEventExtend from '@/common/mpEvent-extend';

export default function(options = {}){

  options.mounted = async function(){
    
    this.$params = {
      ...this.$route.params,
    }
    if (!store.userInfo.isLogin){
      try {
        await UserUtils.login();
      } catch(err) {
        alert(err.msg || err);
      }
    }
    mounted?.call(this, ...arguments)
  }
  options.methods.$setShareInfo = function(options = {}){
    try {
      // 头条postMessage在浏览器报错
      this.$NavigateUtils.getMiniProgram().postMessage({
        data: {
          action: 'shareConfig',
          data: {
            ...options,
          }
        }
      })
    } catch(err){

    }
    
  }
  return options;
}