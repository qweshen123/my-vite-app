import Format from '../util/Format'

export const getSlides = function(options){
    return new Promise((resolve, reject) => {
        this.$FetchUtils.get('/portal/api/slides',
            {
                params:{
                    type:options.type
                } 
            }
        ).then(res => {
            resolve(Format.sliceFormat(res.data.slides))
        })
    })
}

export const getTopic = function(options){
    return new Promise((resolve, reject) => {
        this.$FetchUtils.get('/mina/api/topic_item',
            {
                params:{
                    tid:options.tid,
                    p:options.p,
                    page_size:options.pSize
                } 
            }
        ).then(res => {
            console.log(res.data.topic_list)
            resolve(Format.topicFormat(res.data.topic_list))
        })
    })
}

export const getThreadList = function(options){
    return new Promise((resolve, reject) => {
        this.$FetchUtils.get('/Wcjs/Thread/getThreadList',
            {
                params:{
                    sort:options.sort,
                    topic:options.topic,
                    page_size:options.size,
                    type:options.type,
                    fid:options.fid,
                    p:options.p
                } 
            }
        ).then(res => {
            resolve()
        })
    })
}