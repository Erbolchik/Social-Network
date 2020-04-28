let initialState = {
    friends: [
        { id: 1, name: 'Nurbol', image: 'https://sun9-32.userapi.com/c850224/v850224200/6be47/IuhLBv-1xSQ.jpg' },
        { id: 2, name: 'Yerasyl', image: 'https://sun9-9.userapi.com/c845523/v845523508/105dd4/tRjPLaWk0vQ.jpg' },
        { id: 3, name: 'Askhat', image: 'https://sun9-26.userapi.com/c849536/v849536956/49247/q_QRoLFxoJM.jpg' }
    ]
}

const sidebarReducer = (state = initialState,action="")=>{
    return state;
}

export default sidebarReducer;