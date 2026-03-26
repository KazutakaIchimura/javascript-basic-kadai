let num = 4;

if (num % 3 == 0 && num % 5 == 0) {
// 変数numが３と５の倍数の場合にメッセージをコンソールに出力
    console.log('3と5の倍数です');
} else if (num % 3 == 0) {
    // 変数numが３の倍数の場合にメッセージをコンソールに出力
    console.log('3の倍数です');
} else if (num % 5 == 0) {
    // 変数numが５の倍数の場合にメッセージをコンソールに出力
    console.log('5の倍数です');
} else {
    console.log(num);
}