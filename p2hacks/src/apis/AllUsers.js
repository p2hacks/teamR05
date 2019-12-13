import * as request from "superagent";

export const getAllUsers = (all_users) => {
    return request
        .get(`http://private-anon-14c3863ce4-finds1.apiary-mock.com/user/${all_users}`)
        .then(res => {
            return {res:res.body};
        }).catch(err => {
            console.log(err);
            return {err};
        })
}
