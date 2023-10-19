interface TrackingData {
    name?: string;
    event?: string;
    sex?: string;
    type?: string;
}
declare function sendTrackingData1(name: string, event: string, sex: string, type: string): Promise<any>;
declare function sendTrackingData2({ name, event, sex, type }: TrackingData): Promise<any>;
declare function sendTrackingData3({ name, event, sex, type }: TrackingData): Promise<any>;
declare function sendTrackingData4({ name, event, sex, type }: TrackingData): Promise<any>;
declare const curriedSendTrackingData: (a: string) => (b: string) => (c: string) => (d: string) => Promise<any>;
export { curriedSendTrackingData, sendTrackingData1, sendTrackingData2, sendTrackingData3, sendTrackingData4, };
