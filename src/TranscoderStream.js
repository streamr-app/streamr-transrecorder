import { PassThrough } from 'stream'

import wavStream from './WAVStream'
import s3UploadStream from './S3UploadStream'
import transcodeStream from './TranscodeStream'

export default function () {
  const inputStream = new PassThrough()

  transcodeStream(inputStream.pipe(wavStream))
    .pipe(s3UploadStream('streams/133/transcoded.mp3'))

  return inputStream
}
