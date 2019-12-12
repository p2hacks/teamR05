// actioncreator
const addAnswer = (num) => {
    return {
        type: 'ADD',
        num: num
    }
}
export default addAnswer

export const LOGIN_REQUEST = (mail, adress) => {
    return {
        type: 'LOGIN_REQUEST',
        mail: mail,
        adless: adress
    }
}