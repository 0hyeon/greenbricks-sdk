# greenbricks-sdk

greenbrick - 트레킹 예시함수 api호출 npm 배포
https://www.npmjs.com/package/greenbricks-sdk

3.0.2 함수커링화
sendTrackingData2({ name, event, sex, type });
curriedSendTrackingData(name)(event)(sex)(type);
const curriedSendTrackingDataWithName = curriedSendTrackingData(name)(event);
curriedSendTrackingDataWithName(sex)(type);

2.0.0 트래킹api추가
sendTrackingData1({ name, event, sex, type });
