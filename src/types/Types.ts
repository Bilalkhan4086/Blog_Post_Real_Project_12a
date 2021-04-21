type dataTypes = {
name : string,
country : string,
email : string,
password : string
}

type loginSliceTypes = {
    loginSlice : object,
    data:dataTypes,
    login:boolean

}

type pageContextDataTypes = {
    pageContext : object,
    data : any,
    active : string
}

export type stateType = {
    state : object,
    loginSlice : loginSliceTypes,
    data : dataTypes,
    login:boolean
}
export type pageContextTypes = {
    pageContext : pageContextDataTypes
}
export type BlogsTypes = {
    data : any,
    count: number
}
