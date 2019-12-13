import * as request from 'superagent';
export const UserAnswer=(Answer)=> {
    return request
        .post('https://p2server.herokuapp.com/answer')
        .send({ id: Answer.id, result: Answer.result })
        .then(data => data.json())
        .catch(error => {
            if (error.status !== 400) {
                alert('通信に失敗しました。通信環境を確認してください。');
            }
            return { error };
        });
}