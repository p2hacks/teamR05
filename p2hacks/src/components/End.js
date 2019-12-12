import React from 'react';

export default function End() {
    Window = window.close();
    return (
        <div>
            <p>
                アンケートへのご協力ありがとうございました。
            </p>
            <button onClick={Window}>終了する</button>
        </div>
  );
}