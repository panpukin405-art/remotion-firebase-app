import React from 'react';
import { useCurrentFrame, staticFile, AbsoluteFill } from 'remotion';

export const Owl: React.FC = () => {
    const frame = useCurrentFrame();

    // 4フレームごとに画像を切り替えて喋っている演出
    // 奇数フレーム（喋っている口が開いているイメージ）: 2, 3
    // 偶数フレーム（閉じているイメージ）: 1, 4
    const owlImages = [
        staticFile('owl/owl1.jpg'),
        staticFile('owl/owl2.jpg'),
        staticFile('owl/owl3.jpg'),
        staticFile('owl/owl4.jpg'),
    ];

    // 0.2秒(6フレーム@30fps)ごとに切り替え
    // 音声がある前提のコンポーネント内なので、ループさせる
    // 画像の順番を工夫して、2と3を口が開いている状態、1と4を閉じている状態とする
    const index = Math.floor(frame / 6) % 4;
    const imageSequence = [0, 1, 2, 3]; // owl1, owl2, owl3, owl4

    // ユーザーの指示: 
    // 音声があるところは 2 or 3
    // 音声がないときは 1 or 4
    // このコンポーネントはAudioと同じSequence内にあるので、基本「音声がある」想定で動かす
    // アニメーションを 2 -> 3 -> 2 -> 1 のようにループさせる
    const animation = [1, 2, 1, 0]; // インデックス 1(owl2), 2(owl3), 1(owl2), 0(owl1)
    const currentImage = owlImages[animation[index]];

    return (
        <AbsoluteFill style={{
            borderRadius: '50%',
            overflow: 'hidden',
            border: '10px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 0 20px rgba(0,0,0,0.5)'
        }}>
            <img
                src={currentImage}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                alt="Owl"
            />
        </AbsoluteFill>
    );
};
