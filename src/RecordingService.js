import { BinaryServer } from 'binaryjs'

import TranscoderStream from './TranscoderStream'

export default class RecordingService {
  attachTo (server) {
    this.socketServer = BinaryServer({ server })
    console.log('Awaiting connections')

    this.socketServer.on('connection', (client) => {
      console.log('Connection established')

      const stream = TranscoderStream()

      client.on('stream', (bitStream, meta) => {
        bitStream.pipe(stream)
      })

      client.on('close', () => {
        console.log('Connection closed')
        stream.end()
      })
    })
  }
}
