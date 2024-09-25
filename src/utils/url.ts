export const getBaseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://pathfinder-bice-eta.vercel.app'

export const cfWorkerUrl = 'https://ducometa-worker.team3.workers.dev'
