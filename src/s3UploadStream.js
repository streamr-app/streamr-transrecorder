import { PassThrough } from 'stream'
import AWS from 'aws-sdk'

const bucket = process.env.S3_BUCKET
const s3 = new AWS.S3()

export default function s3UploadStream (key) {
  const passThrough = new PassThrough()

  const params = { Bucket: bucket, Key: key, Body: passThrough }
  const options = { partSize: 10 * 1024 * 1024, queueSize: 1 }
  s3.upload(params, options, (err, data) => console.log(err, data))

  return passThrough
}
