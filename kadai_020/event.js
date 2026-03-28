// btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click', () => {
    // 新しくh2要素を作成し、定数に代入する
    const creText = document.querySelector('h2');

    // h2要素を変更する（textContentを使用、innerHTMLは使用しない）
    creText.textContent = 'ボタンをクリックしました';
});