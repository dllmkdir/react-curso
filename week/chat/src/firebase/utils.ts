import { db } from './firebase'
let firsCount = 0
export const getMessages = async () => {
    const msgTemp = await db.ref('chat/').once('value')
    const msgVal = msgTemp.val()
    console.log(msgVal)
    let msgList = []
    for (let key in msgVal) {
        let msgTemp = msgVal[key]
        msgTemp.published = msgTemp.published.replace(/\"/g, '')
        msgList.push(msgTemp)
    }
    firsCount = msgList.length
    return msgList
}
const generateRandomId = (): string => {

    let S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4());

}
export const createMessage = async (msg) => {
    msg.published = msg.published.replace(/\"/g, '')
    await db.ref(`chat/${generateRandomId()}`).set(msg)
}

export const databaseListener = (callback) => {
    db.ref('chat').startAt(firsCount).on('child_added', (snapshot) => {
        console.log(snapshot)
        let newMsg = snapshot.val()
        newMsg.published = newMsg.published.replace(/\"/g, '')

        callback(newMsg)
        console.log('user was added !!');
    });
}