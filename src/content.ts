import { SceneData } from './types';

// 30 FPS想定
const FPS = 30;

export const scenes: SceneData[] = [
    {
        audio: 'シーン1.wav',
        segments: [
            { text: '今、原油価格が', durationInFrames: 1.5 * FPS },
            { text: 'バグっているってまじ？', durationInFrames: 2 * FPS },
            { text: '原油高が招く', durationInFrames: 1.5 * FPS },
            { text: '『本当の地獄』、', durationInFrames: 2 * FPS },
            { text: '知ってますか？', durationInFrames: 2 * FPS },
        ],
    },
    {
        audio: 'シーン２.wav',
        segments: [
            { text: 'ガソリン代だけじゃない。', durationInFrames: 2 * FPS },
            { text: 'プラスチック、肥料、', durationInFrames: 2 * FPS },
            { text: '輸送費。原油が上がれば、', durationInFrames: 3 * FPS },
            { text: '生活に関わる', durationInFrames: 1.5 * FPS },
            { text: '『全てのモノ』が', durationInFrames: 1.5 * FPS },
            { text: '連鎖的に値上がりします。', durationInFrames: 3 * FPS },
        ],
    },
    {
        audio: 'シーン3.wav',
        segments: [
            { text: '最悪なのはここから。', durationInFrames: 2 * FPS },
            { text: '物価は上がるのに、', durationInFrames: 2 * FPS },
            { text: '景気が悪くて', durationInFrames: 1.5 * FPS },
            { text: '給料が上がらない。', durationInFrames: 2 * FPS },
            { text: 'これが悪夢の', durationInFrames: 1.5 * FPS },
            { text: '『スタグフレーション』です。', durationInFrames: 3 * FPS },
        ],
    },
    {
        audio: 'シーン４.wav',
        segments: [
            { text: '自由に使えるお金が減り、', durationInFrames: 2 * FPS },
            { text: '消費が冷え込み、', durationInFrames: 2 * FPS },
            { text: 'さらに企業の業績が悪化。', durationInFrames: 3 * FPS },
            { text: 'あなたの給料は', durationInFrames: 1.5 * FPS },
            { text: 'もっと上がらなくなる。', durationInFrames: 2.5 * FPS },
        ],
    },
    {
        audio: 'シーン5.wav',
        segments: [
            { text: 'これが『負のサイクル』。', durationInFrames: 2 * FPS },
            { text: '一度ハマれば、', durationInFrames: 1.5 * FPS },
            { text: '国が助けてくれるまで数年、', durationInFrames: 3 * FPS },
            { text: 'いや十数年かかるかも', durationInFrames: 2 * FPS },
            { text: 'しれません。', durationInFrames: 1.5 * FPS },
        ],
    },
    {
        audio: 'シーン6.wav',
        segments: [
            { text: '打開策は一つ。', durationInFrames: 1.5 * FPS },
            { text: '国や会社に依存せず、', durationInFrames: 2.5 * FPS },
            { text: '『稼ぐ力』を', durationInFrames: 1.5 * FPS },
            { text: 'バグらせるか、', durationInFrames: 1.5 * FPS },
            { text: '『投資』で資産を守るか。', durationInFrames: 2.5 * FPS },
            { text: '知識がない人から', durationInFrames: 1.5 * FPS },
            { text: '脱落します。', durationInFrames: 1.5 * FPS },
        ],
    },
    {
        audio: 'シーン7.wav',
        segments: [
            { text: 'みんなは今の日本', durationInFrames: 2 * FPS },
            { text: '信用できる？', durationInFrames: 2 * FPS },
        ],
    },
];
