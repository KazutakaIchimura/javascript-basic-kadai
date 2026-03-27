// システム日付をコンソールに出力する

// 現在日付を取得
const today = new Date();

// 年・月・日を取得
const conYears = today.getFullYear();
const conMonth = today.getMonth() + 1;
const conDay = today.getDate();

// コンソール出力
console.log(conYears + '年' + conMonth + '月' + conDay + '日');