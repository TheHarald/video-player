export type Event = {
    id: number;
    timestamp: number;
    duration: number;
    zone: {
        left: number;
        top: number;
        width: number;
        height: number;
    }
}