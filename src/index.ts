import axios from 'axios'
interface TrackingData {
  name?: string
  event?: string
  sex?: string
  type?: string
}
const curry =
  <A, B, C, D>(f: (a: A, b: B, c: C) => D) =>
  (a: A) =>
  (b: B) =>
  (c: C) =>
    f(a, b, c)

async function sendTrackingData1({ name, event, sex, type }: TrackingData) {
  try {
    const response = await axios.get(
      `https://web-crawaling.vercel.app/api/post-tracking?name=${name}&event=${event}&sex=${sex}&type=${type}`,
    )
    return response.data
  } catch (error) {
    console.error('트래킹 데이터 전송 중 오류 발생:', error)
    throw error
  }
}

async function sendTrackingData2({ name, event, sex, type }: TrackingData) {
  try {
    const response = await axios.get(
      `https://web-crawaling.vercel.app/api/post-tracking?name=${name}&event=${event}&sex=${sex}&type=${type}`,
    )
    return response.data
  } catch (error) {
    console.error('트래킹 데이터 전송 중 오류 발생:', error)
    throw error
  }
}

async function sendTrackingData3({ name, event, sex, type }: TrackingData) {
  try {
    const response = await axios.get(
      `https://web-crawaling.vercel.app/api/post-tracking?name=${name}&event=${event}&sex=${sex}&type=${type}`,
    )
    return response.data
  } catch (error) {
    console.error('트래킹 데이터 전송 중 오류 발생:', error)
    throw error
  }
}

async function sendTrackingData4({ name, event, sex, type }: TrackingData) {
  try {
    const response = await axios.get(
      `https://web-crawaling.vercel.app/api/post-tracking?name=${name}&event=${event}&sex=${sex}&type=${type}`,
    )
    return response.data
  } catch (error) {
    console.error('트래킹 데이터 전송 중 오류 발생:', error)
    throw error
  }
}

const curriedSendTrackingData = curry(sendTrackingData1)

export {
  curriedSendTrackingData,
  sendTrackingData1,
  sendTrackingData2,
  sendTrackingData3,
  sendTrackingData4,
}
