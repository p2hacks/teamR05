import * as request from 'superagent';
export const LoginApi=(data)=> {
    return request
        .post('https://p2server.herokuapp.com/user')
        .send({ mail: data.mail, address: data.address })
        .then(data => data.json())
        .catch(error => {
            if (error.status !== 400) {
                alert('通信に失敗しました。通信環境を確認してください。');
            }
            return { error };
        });
}