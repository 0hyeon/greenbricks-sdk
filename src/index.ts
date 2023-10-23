import axios from 'axios'
interface TrackingData {
  name?: string
  event?: string
  sex?: string
  type?: string
}
let CryptoJS = require('crypto-js')
const ciphertext = CryptoJS.AES.encrypt('암호화할 값', 'secret key').toString()

const curry =
  <A, B, C, D, E, F>(f: (a: A, b: B, c: C, d: D, e: E) => F) =>
  (a: A) =>
  (b: B) =>
  (c: C) =>
  (d: D) =>
  (e: E) =>
    f(a, b, c, d, e)

async function sendTrackingData1(
  name: string,
  event: string,
  sex: string,
  type: string,
  adid: string,
) {
  try {
    const adid = CryptoJS.AES.encrypt(name, 'secret key').toString()
    console.log('adid : ', adid)
    const response = await axios.get(
      `https://web-crawaling.vercel.app/api/post-tracking?name=${name}&event=${event}&sex=${sex}&type=${type}adid=${adid}`,
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
