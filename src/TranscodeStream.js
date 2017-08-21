import ffmpeg from 'fluent-ffmpeg'
import { PassThrough } from 'stream'

export default function (inputStream) {
  const outputStream = new PassThrough()

  ffmpeg()
    .input(inputStream)
    .inputFormat('wav')
    .audioCodec('libmp3lame')
    .outputFormat('mp3')
    .output(outputStream)
    .run()

  return outputStream
}
