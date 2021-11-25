import { v4 as uuidv4 } from 'uuid';
import ListenerUtils from '@/utils/ListenerUtils';

export default function (options = {}) {
  const {
    mounted = () => { },
    mpEvents = {},
  } = options;

  options.mounted = async function () {
    this.$id = uuidv4();
    Object.entries(mpEvents).forEach(([eventName, callback]) => {
      ListenerUtils.on(`MPEVENTS_${eventName}`, {
        pageId: this.$id
      }, callback.bind(this))
    })

    mounted.call(this, ...arguments)
  }
  return options;
}