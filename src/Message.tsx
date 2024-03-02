function Message(){
    const name = 'David'
    
    if (name)
        return <h1>Hello React World, <br/> Your conqueror {name} is here.</h1>
    else return <h1>Hello React World</h1>
}

export default Message