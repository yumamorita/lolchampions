'use strict';
const championInput = document.getElementById('champion');
const displayButton = document.getElementById('display');
const resultDivided = document.getElementById('result-area');
const championname = [
    {jpname:"アーゴット",enname:"Urgot"},
    {jpname:"アーリ",enname:"Ahri"},
    {jpname:"アイバーン",enname:"Ivern"},
    {jpname:"アカリ",enname:"Akali"},
    {jpname:"アジール",enname:"Azir"},
    {jpname:"アッシュ",enname:"Ashe"},
    {jpname:"アニー",enname:"Annie"},
    {jpname:"アニビア",enname:"Anivia"},
    {jpname:"アフェリオス",enname:"Aphelios"},
    {jpname:"アムム",enname:"Amumu"},
    {jpname:"アリスター",enname:"Alistar"},
    {jpname:"イブリン",enname:"Evelynn"},
    {jpname:"イラオイ",enname:"Illaoi"},
    {jpname:"イレリア",enname:"Irelia"},
    {jpname:"ヴァイ",enname:"Vi"},
    {jpname:"ヴァルス",enname:"Varus"},
    {jpname:"ウーコン",enname:"Wukong"},
    {jpname:"ヴェイン",enname:"Vayne"},
    {jpname:"ヴェル＝コズ",enname:"Vel'koz"},
    {jpname:"ウディア",enname:"Udyr"},
    {jpname:"エイトロックス",enname:"Aatrox"},
    {jpname:"エコー",enname:"Ekko"},
    {jpname:"エズリアル",enname:"Ezreal"},
    {jpname:"エリス",enname:"Elise"},
    {jpname:"オーン",enname:"Ornn"},
    {jpname:"オラフ",enname:"Olaf"},
    {jpname:"オリアナ",enname:"Orianna"},
    {jpname:"オレリオン・ソル",enname:"Aurelion Sol"},
    {jpname:"カ＝ジックス",enname:"Kha'Zix"},
    {jpname:"カーサス",enname:"Karthus"},
    {jpname:"カイ＝サ",enname:"Kai'Sa"},
    {jpname:"カサディン",enname:"Kassadin"},
    {jpname:"カシオペア",enname:"Cassiopeia"},
    {jpname:"カタリナ",enname:"Katarina"},
    {jpname:"カミール",enname:"Camille"},
    {jpname:"ガリオ",enname:"Galio"},
    {jpname:"カリスタ",enname:"Kalista"},
    {jpname:"カルマ",enname:"Karma"},
    {jpname:"ガレン",enname:"Garen"},
    {jpname:"ガングプランク",enname:"Gangplank"},
    {jpname:"キヤナ",enname:"Qiyana"},
    {jpname:"キンドレッド",enname:"Kindred"},
    {jpname:"クイン",enname:"Quinn"},
    {jpname:"グラガス",enname:"Gragas"},
    {jpname:"グレイブス",enname:"Graves"},
    {jpname:"クレッド",enname:"Kled"},
    {jpname:"ケイトリン",enname:"Caitlyn"},
    {jpname:"ケイル",enname:"Kayle"},
    {jpname:"ケイン",enname:"Kayn"},
    {jpname:"ケネン",enname:"Kennen"},
    {jpname:"コーキ",enname:"Corki"},
    {jpname:"コグ＝マウ",enname:"Kog'Maw"},
    {jpname:"サイオン",enname:"Sion"},
    {jpname:"ザイラ",enname:"Zyra"},
    {jpname:"サイラス",enname:"Sylas"},
    {jpname:"ザック",enname:"Zac"},
    {jpname:"サミーラ",enname:"Samira"},
    {jpname:"ザヤ",enname:"Xayah"},
    {jpname:"シヴァーナ",enname:"Shyvana"},
    {jpname:"シヴィア",enname:"Sivir"},
    {jpname:"ジェイス",enname:"Jayce"},
    {jpname:"シェン",enname:"Shen"},
    {jpname:"ジグス",enname:"Ziggs"},
    {jpname:"ジャーヴァンIV",enname:"Jarvan IV"},
    {jpname:"シャコ",enname:"Shaco"},
    {jpname:"ジャックス",enname:"Jax"},
    {jpname:"ジャンナ",enname:"Janna"},
    {jpname:"ジリアン",enname:"Zilean"},
    {jpname:"ジン",enname:"Jhin"},
    {jpname:"シン・ジャオ",enname:"Xin Zhao"},
    {jpname:"ジンクス",enname:"Jinx"},
    {jpname:"シンジド",enname:"Singed"},
    {jpname:"シンドラ",enname:"Syndra"},
    {jpname:"スウェイン",enname:"Swain"},
    {jpname:"スカーナー",enname:"Skarner"},
    {jpname:"スレッシュ",enname:"Thresh"},
    {jpname:"セジュアニ",enname:"Sejuani"},
    {jpname:"セト",enname:"Sett"},
    {jpname:"ゼド",enname:"Zed"},
    {jpname:"セナ",enname:"Senna"},
    {jpname:"ゼラス",enname:"Xerath"},
    {jpname:"セラフィーン",enname:"Seraphine"},
    {jpname:"ゾーイ",enname:"Zoe"},
    {jpname:"ソナ",enname:"Sona"},
    {jpname:"ソラカ",enname:"Soraka"},
    {jpname:"ダイアナ",enname:"Diana"},
    {jpname:"タム・ケンチ",enname:"Tahm Kench"},
    {jpname:"ダリウス",enname:"Darius"},
    {jpname:"タリック",enname:"Taric"},
    {jpname:"タリヤ",enname:"Taliyah"},
    {jpname:"タロン",enname:"Talon"},
    {jpname:"チョ＝ガス",enname:"Cho'Gath"},
    {jpname:"ツイステッド・フェイト",enname:"Twisted Fate"},
    {jpname:"ティーモ",enname:"Teemo"},
    {jpname:"トゥイッチ",enname:"Twitch"},
    {jpname:"ドクター・ムンド",enname:"Dr.Mundo"},
    {jpname:"トランドル",enname:"Trundle"},
    {jpname:"トリスターナ",enname:"Tristana"},
    {jpname:"トリンダメア",enname:"Tryndamere"},
    {jpname:"ドレイヴン",enname:"Draven"},
    {jpname:"ナー",enname:"Gnar"},
    {jpname:"ナサス",enname:"Nasus"},
    {jpname:"ナミ",enname:"Nami"},
    {jpname:"ニーコ",enname:"Neeko"},
    {jpname:"ニダリー",enname:"Nidalee"},
    {jpname:"ヌヌ",enname:"Nunu"},
    {jpname:"ノーチラス",enname:"Nautilus"},
    {jpname:"ノクターン",enname:"Nocturne"},
    {jpname:"バード",enname:"Bard"},
    {jpname:"パイク",enname:"Pyke"},
    {jpname:"ハイマーディンガー",enname:"Heimerdinger"},
    {jpname:"パンテオン",enname:"Pantheon"},
    {jpname:"ビクター",enname:"Viktor"},
    {jpname:"フィオラ",enname:"Fiora"},
    {jpname:"フィズ",enname:"Fizz"},
    {jpname:"フィドルスティックス",enname:"Fiddlesticks"},
    {jpname:"ブラウム",enname:"Braum"},
    {jpname:"ブラッドミア",enname:"Vladimir"},
    {jpname:"ブランド",enname:"Brand"},
    {jpname:"ブリッツクランク",enname:"Blitzcrank"},
    {jpname:"ベイガー",enname:"Veigar"},
    {jpname:"ヘカリム",enname:"Hecarim"},
    {jpname:"ポッピー",enname:"Poppy"},
    {jpname:"ボリベア",enname:"Volibear"},
    {jpname:"マオカイ",enname:"Maokai"},
    {jpname:"マスター・イー",enname:"Master Yi"},
    {jpname:"マルザハール",enname:"Malzahar"},
    {jpname:"マルファイト",enname:"Malphite"},
    {jpname:"ミス・フォーチュン",enname:"Miss Fortune"},
    {jpname:"モルガナ",enname:"Morgana"},
    {jpname:"モルデカイザー",enname:"Mordekaiser"},
    {jpname:"ヤスオ",enname:"Yasuo"},
    {jpname:"ユーミ",enname:"Yuumi"},
    {jpname:"ヨネ",enname:"Yone"},
    {jpname:"ヨリック",enname:"Yorick"},
    {jpname:"ライズ",enname:"Ryze"},
    {jpname:"ラカン",enname:"Rakan"},
    {jpname:"ラックス",enname:"Lux"},
    {jpname:"ラムス",enname:"Rammus"},
    {jpname:"ランブル",enname:"Rumble"},
    {jpname:"リー・シン",enname:"Lee Sin"},
    {jpname:"リヴェン",enname:"Riven"},
    {jpname:"リサンドラ",enname:"Lissandra"},
    {jpname:"リリア",enname:"Lillia"},
    {jpname:"ルシアン",enname:"Lucian"},
    {jpname:"ルブラン",enname:"LeBlanc"},
    {jpname:"ルル",enname:"Lulu"},
    {jpname:"レオナ",enname:"Leona"},
    {jpname:"レク＝サイ",enname:"Rek'Sai"},
    {jpname:"レネクトン",enname:"Renekton"},
    {jpname:"レンガー",enname:"Rengar"},
    {jpname:"ワーウィック",enname:"Warwick"},
]
/**
 * 指定した要素の子どもを全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element) {
    while (element.firstChild) {
      // 子どもの要素があるかぎり削除
      element.removeChild(element.firstChild);
    }
}
displayButton.onclick = () => {
    
    const championjp = championInput.value;
    var championen = 0;
    if (championjp.length === 0) {
      // 名前が空の時は処理を終了する。
      return;
    }
    for(var i = 0;i<championname.length;i++){
        if(championjp === championname[i].jpname){
            championen = championname[i].enname;
        }
    }
    if(championen === 0){
        alert(そんなチャンピオンはいません);
        return;
        //championの名前が不正な時はアラートをつけて処理を終了する。
    }
    console.log(championen);
    console.log(championjp);

    
    // キャラ紹介エリアの作成
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = 'キャラ詳細を調べるのにいいサイト';
    resultDivided.appendChild(header);
    const paragraph0 = document.createElement('p');
    paragraph0.innerText = '公式サイト　:　キャラクターのストーリーや簡単なスキル説明などが乗っている';
    resultDivided.appendChild(paragraph0);
    const anchor0 = document.createElement('a');
    anchor0.href = "https://jp.leagueoflegends.com/ja-jp/champions/" + championen.toLowerCase() + "/";
    anchor0.innerText = "https://jp.leagueoflegends.com/ja-jp/champions/" + championen.toLowerCase() +"/";
    resultDivided.appendChild(anchor0);
    const paragraph1 = document.createElement('p');
    paragraph1.innerText = 'WIKI　:　キャラクターのステータスやスキルダメージなど詳細なデータが乗っている。';
    resultDivided.appendChild(paragraph1);
    const anchor1 = document.createElement('a');
    anchor1.href = "https://loljp-wiki.tk/wiki/?Champion%2F" + championen;
    anchor1.innerText = "https://loljp-wiki.tk/wiki/?Champion%2F" + championen;
    resultDivided.appendChild(anchor1);
    const paragraph2 = document.createElement('p');
    paragraph2.innerText = 'OPGG　:　キャラクターの勝率や相性が乗っている統計サイト。';
    resultDivided.appendChild(paragraph2);
    const paragraph3 = document.createElement('p');
    paragraph3.innerText = '多く使われているスキルビルドやアイテムビルドなども知ることができる。';
    resultDivided.appendChild(paragraph3);
    const anchor2 = document.createElement('a');
    anchor2.href = "https://jp.op.gg/champion/" + championen;
    anchor2.innerText = "https://jp.op.gg/champion/" + championen;
    resultDivided.appendChild(anchor2);
};

championInput.onkeydown = event => {
    if (event.key === 'Enter') {
      // TODO ボタンのonclick() 処理を呼び出す
      assessmentButton.onclick();
    }
};

