import * as request from "superagent";

export const getUserMail = (user_mail) => {
    return request
        .get(`http://private-anon-14c3863ce4-finds1.apiary-mock.com/user/${user_mail}`)
        .then(res => {
            return {res:res.body};
        }).catch(err => {
            console.log(err);
            return {err};
        })
}
