jQuery(function ($) {
    // すべてのパネルを非表示にする
    $('#panel > dd').hide();
    // タイトル(dt要素)のイベントリスナー
    $('#panel > dt').click(function () {
        // すべてのパネルを500ミリ秒のアニメーションで閉じる
        $('#panel > dd').slideUp(500);
        // クリックされたタイトルのパネルを500ミリ秒の
        // アニメーションで開く
        $('+dd', this).slideDown(500);
    });
});
