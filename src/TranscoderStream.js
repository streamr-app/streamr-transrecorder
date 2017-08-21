import { PassThrough } from 'stream'

import wavStream from './wavStream'
import s3UploadStream from './s3UploadStream'
import ffmpegStream from './ffmpegStream'

export default function () {
  const inputStream = new PassThrough()

  ffmpegStream(inputStream.pipe(wavStream))
    .pipe(s3UploadStream('streams/133/transcoded.mp3'))

  return inputStream
}
