const ListenerUtils = {
	UPDATE_PHONE_NUMBER: 'UPDATE_PHONE_NUMBER',
	PK_CAR_LIST_CHANGE: 'PK_CAR_LIST_CHANGE',
  _list: [],
  on(eventName, options = {}, callback){
    this._list.push({
      eventName: eventName,
			callback: callback,
			options: {
				once: false,
				pageId: options.pageId,
			}
    })
	},
	once(eventName, options = {}, callback){
		this._list.push({
      eventName: eventName,
			callback: callback,
			options: {
				once: true,
				pageId: options.pageId,
			}
    })
	},
	off(eventName, options = {}, callback) {
		if(typeof eventName === 'string' && eventName.length > 0){
			if(typeof callback === 'function'){
				const i = this._list.findIndex((e) => {
					return e.eventName === eventName && e.callback === callback;
				});
				if(i > -1) this._list.splice(i,1);
			} else {
				for(let i = 0;i < this._list.length;i += 1){
					if (this._list[i].eventName === eventName) {
						this._list.splice(i, 1);
						i -= 1;
					}
				}
			}
		}
		if(typeof options.pageId !== 'undefined'){
			for(let i = 0;i < this._list.length;i += 1){
				if (this._list[i].options.pageId === options.pageId) {
					this._list.splice(i, 1);
					i -= 1;
				}
			}
    }
	},
  emit(eventName, params = {}){
		this._list.forEach((e) => {
			if (e.eventName === eventName) {
				e.callback(params);
				// if(e.options.once){
				// 	this.off(eventName, {}, e.callback)
				// }
			}
		})
		for (let i = 0; i < this._list.length; i += 1) {
			const e = this._list[i];
			if (e.eventName === eventName && e.options.once) {
				this.off(eventName, {}, e.callback)
				i -= 1;
			}
		}
  },
}

export default ListenerUtils;