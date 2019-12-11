import React from 'react';

const Pre = (props) => {
    return (
        < form method='post'>
            <p>
                <input type="email" name="email"></input>
            </p>
            <p>
                <input type='text'></input>
            </p>
            <p>
                <input type="submit" value="送信する"></input>
            </p>
        </form >
    )

}

export default Pre;