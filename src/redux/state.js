import { rerenderEntireTree } from "../render";

let state = {

    profilePage: {
        postsData: [
            { id: 1, message: 'Это я, ОЛД', likesCount: 10, dislikesCount: 0 },
            { id: 2, message: 'Ыхыхыхы, привет это я, олд', likesCount: 32, dislikesCount: 14 }
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Keks', avatar: 'https://uscrap.com.au/wp-content/uploads/2018/08/default-feature-img-1.png' },
            { id: 2, name: 'Marina', avatar: 'https://sun9-73.userapi.com/impg/-YgqCzkQyFgaw1tEdDDBrPHwD1nXR9KprN0jFQ/zVtUSZSSWCI.jpg?size=1620x2160&quality=95&sign=6c7b801e1cbfe08ab9a92779de85aff1&type=album' },
            { id: 3, name: 'Diman', avatar: 'https://sun9-64.userapi.com/impg/nKKd-tjkVqx-SH8lMivFK9sLbuAUtMvaIRVI2g/-QMHKB_Tm1Y.jpg?size=1000x1000&quality=96&sign=4249c2bd6553a375f42d2620b84e58f8&type=album' },
            { id: 4, name: 'Andrew', avatar: 'https://sun9-48.userapi.com/impg/QwC6L0sI6B0rqGjyrH7xTozBbuq3K2bOjzPKQg/FuJLxdqEms8.jpg?size=1469x1389&quality=96&sign=aa6d7462d1f486db7b06fb4157f5f269&type=album' },
            { id: 5, name: 'Nixxon', avatar: 'https://sun9-44.userapi.com/impf/c626431/v626431606/4535e/Uxre72rlZDk.jpg?size=1620x2160&quality=96&sign=e7ebe96d0262d58924ca9adba51d07be&type=album' }
        ],
        messagesData: [
            { id: 1, message: 'Привет!', myMessage: false, avatar: <img src='https://uscrap.com.au/wp-content/uploads/2018/08/default-feature-img-1.png' /> },
            { id: 2, message: 'Йоу)', myMessage: true, avatar: <img src='https://sun9-83.userapi.com/impg/0KOUqUbsPb7aP5onFfD6dxMKDKpipDk6p_NJCg/0M5WRnibo6M.jpg?size=2560x1707&quality=96&sign=fa65d1d57bd8cb1b01036da94a38fe12&type=album' /> },
            { id: 3, message: 'Че как?', myMessage: false, avatar: <img src='https://uscrap.com.au/wp-content/uploads/2018/08/default-feature-img-1.png' /> },
            { id: 4, message: 'Нормасс', myMessage: true, avatar: <img src='https://sun9-83.userapi.com/impg/0KOUqUbsPb7aP5onFfD6dxMKDKpipDk6p_NJCg/0M5WRnibo6M.jpg?size=2560x1707&quality=96&sign=fa65d1d57bd8cb1b01036da94a38fe12&type=album' /> }
        ],
        newMessageText: ''
    },
    sidebar: {
        friends: [
            { id: 1, name: 'Keks', avatar: 'https://uscrap.com.au/wp-content/uploads/2018/08/default-feature-img-1.png' },
            { id: 2, name: 'Marina', avatar: 'https://sun9-73.userapi.com/impg/-YgqCzkQyFgaw1tEdDDBrPHwD1nXR9KprN0jFQ/zVtUSZSSWCI.jpg?size=1620x2160&quality=95&sign=6c7b801e1cbfe08ab9a92779de85aff1&type=album' },
            { id: 3, name: 'Diman', avatar: 'https://sun9-64.userapi.com/impg/nKKd-tjkVqx-SH8lMivFK9sLbuAUtMvaIRVI2g/-QMHKB_Tm1Y.jpg?size=1000x1000&quality=96&sign=4249c2bd6553a375f42d2620b84e58f8&type=album' }
        ]
    }
}

export let sendMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText,
        myMessage: true,
        avatar: <img src='https://sun9-83.userapi.com/impg/0KOUqUbsPb7aP5onFfD6dxMKDKpipDk6p_NJCg/0M5WRnibo6M.jpg?size=2560x1707&quality=96&sign=fa65d1d57bd8cb1b01036da94a38fe12&type=album' />
    };
    state.dialogsPage.messagesData.push(newMessage);
    rerenderEntireTree(state)
    state.dialogsPage.newMessageText = '';
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0,
        dislikesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = '';
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;