export const compress = (a:Array<number>,b:Array<number>) => {
    if(a.length!=b.length+1) console.log('convert error')
    let res = 0
    let prev = 1
    for( let i = 0 ; i < a.length ; i++ ) {
        res = res*prev+a[i]
        if(i<b.length) prev = b[i]
    }
    return res 
}

export const expand = ( a:number, b:Array<number> ) => {
    let res = Array<number>(b.length+1, 0)
    for( let i = b.length-1; i >= 0 ; i-- ) {
        res[i+1] = a % b[i]
        a = Math.floor(a/b[i])
    }
    res[0] = a
    return res
}