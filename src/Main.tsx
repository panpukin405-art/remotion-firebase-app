import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill, staticFile, Audio, Sequence } from 'remotion';
import { scenes } from './content';
import { Owl } from './Owl';
import { Caption } from './Caption';

export const Main: React.FC = () => {
    const { fps } = useVideoConfig();

    let currentStartFrame = 0;

    return (
        <AbsoluteFill style={{ backgroundColor: '#1a1a1a' }}>
            {scenes.map((scene, sceneIndex) => {
                const sceneDuration = scene.segments.reduce((acc, s) => acc + s.durationInFrames, 0);
                const sequence = (
                    <Sequence
                        key={sceneIndex}
                        from={currentStartFrame}
                        durationInFrames={sceneDuration}
                    >
                        <Audio src={staticFile(scene.audio)} />
                        <SceneContent scene={scene} />
                    </Sequence>
                );
                currentStartFrame += sceneDuration;
                return sequence;
            })}
        </AbsoluteFill>
    );
};

const SceneContent: React.FC<{ scene: typeof scenes[0] }> = ({ scene }) => {
    const frame = useCurrentFrame();

    let currentSegmentStart = 0;

    return (
        <AbsoluteFill>
            {/* 背景（演出として適宜追加可能ですが、一旦シンプルに） */}

            {/* テロップ */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                textAlign: 'center',
            }}>
                {scene.segments.map((segment, segIndex) => {
                    const isVisible = frame >= currentSegmentStart && frame < currentSegmentStart + segment.durationInFrames;
                    const segmentView = isVisible ? (
                        <Caption
                            key={segIndex}
                            text={segment.text}
                            frameInSegment={frame - currentSegmentStart}
                        />
                    ) : null;
                    currentSegmentStart += segment.durationInFrames;
                    return segmentView;
                })}
            </div>

            {/* フクロウ（左下） */}
            <div style={{
                position: 'absolute',
                bottom: 50,
                left: 50,
                width: 300,
                height: 300,
            }}>
                <Owl />
            </div>
        </AbsoluteFill>
    );
};
