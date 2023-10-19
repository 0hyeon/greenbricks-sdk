interface TrackingData {
    name?: string;
    event?: string;
    sex?: string;
    type?: string;
}
declare function sendTrackingData1({ name, event, sex, type }: TrackingData): Promise<any>;
declare function sendTrackingData2({ name, event, sex, type }: TrackingData): Promise<any>;
declare function sendTrackingData3({ name, event, sex, type }: TrackingData): Promise<any>;
declare function sendTrackingData4({ name, event, sex, type }: TrackingData): Promise<any>;
export { sendTrackingData1, sendTrackingData2, sendTrackingData3, sendTrackingData4, };
