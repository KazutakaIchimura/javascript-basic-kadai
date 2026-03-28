// id要素であるbtnを変数に代入する
const btn = document.getElementById('btn');

// id要素であるtextを変数に代入する
const text = document.getElementById('text');

// ボタンをクリックした時の処理
btn.addEventListener('click', () => {
    // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});