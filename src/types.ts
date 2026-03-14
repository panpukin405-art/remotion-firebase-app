export interface Segment {
    text: string;
    durationInFrames: number;
}

export interface SceneData {
    audio: string;
    segments: Segment[];
}
