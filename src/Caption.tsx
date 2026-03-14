import React from 'react';

export const Caption: React.FC<{
    text: string;
    frameInSegment: number;
}> = ({ text, frameInSegment }) => {
    // タイプライターアニメーション
    // 1文字 2フレーム
    const charsShown = Math.floor(frameInSegment / 2);
    const visibleText = text.slice(0, charsShown);

    const renderText = (str: string) => {
        // 重要ワード（『』で囲まれた部分など）を黄色にする簡易実装
        // ユーザー指定: 黄色に変更
        const parts = str.split(/(『.*?』)/g);
        return parts.map((part, i) => {
            const isImportant = part.startsWith('『') && part.endsWith('』');
            return (
                <span key={i} style={{ color: isImportant ? '#ffff00' : '#ffffff' }}>
                    {part}
                </span>
            );
        });
    };

    return (
        <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '20px 40px',
            borderRadius: '20px',
            display: 'inline-block',
            fontSize: '48px',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            // 袋文字（白文字＋黒影）
            textShadow: `
        -2px -2px 0 #000,  
         2px -2px 0 #000,
        -2px  2px 0 #000,
         2px  2px 0 #000,
         5px 5px 10px rgba(0,0,0,0.5)
      `,
            lineHeight: '1.4',
        }}>
            {renderText(visibleText)}
        </div>
    );
};
