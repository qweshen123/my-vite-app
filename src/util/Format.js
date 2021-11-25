class Format{
    static sliceFormat(data){
        return data.map(item => {
            return {
                describe:item.slide_name,
                pic:item.slide_pic,
                id:item.cid,
                url:item.slide_url
            }
        })
    }

    static topicFormat(data){
        return data.map(item => {
            return {
                title:item.item_title,
                thumb:item.new_thumb,
                tid:item.item_id
            }
        })
    }
}

export default Format