import express from 'express'

import RecordingService from './RecordingService'

const PORT = process.env.PORT || 4352
const server = express().listen(PORT)

const service = new RecordingService()
service.attachTo(server)

process.on('SIGINT', () => {
  process.exit()
})
