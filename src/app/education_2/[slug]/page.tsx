'use client'

import { Unity, useUnityContext } from 'react-unity-webgl'
import React, { useState, useEffect, useCallback } from 'react'
import AutoSizeImage from '@/components/ui/auto-size-image/AutoSizeImage'
import Progressbar from '@/components/progress/ProgressBar'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const CFWORKERURL = 'https://worker-lms2024-stage.team3.workers.dev'

const CounselPage = () => {
  const roomIdModel = usePathname().split('/').pop()
  const [getApi, setGetApi] = useState<string>('')
  const [splashEnd, setSplashEnd] = useState<boolean>(false)

  //unity build
  const {
    unityProvider,
    addEventListener,
    removeEventListener,
    loadingProgression,
    sendMessage,
  } = useUnityContext({
    loaderUrl: `${CFWORKERURL}/Build/Build.loader.js`,
    dataUrl: `${CFWORKERURL}/Build/Build.data`,
    frameworkUrl: `${CFWORKERURL}/Build/Build.framework.js`,
    codeUrl: `${CFWORKERURL}/Build/Build.wasm`,
  })

  //splashEnd

  const onSplashEnd = useCallback((data: any) => {
    setSplashEnd(true)
  }, [])

  const onRequest = useCallback((data: any) => {
    setGetApi(data)
  }, [])

  useEffect(() => {
    if (getApi == 'get/room-id') {
      sendMessage(
        'MessageReceiver',
        'OnResponse',
        `${getApi}|200|${JSON.stringify({ id: roomIdModel })}`,
      )
    }
  }, [getApi])

  useEffect(() => {
    addEventListener('OnSplashEnd', onSplashEnd)
    addEventListener('OnRequest', onRequest)

    return () => {
      removeEventListener('OnSplashEnd', onSplashEnd)
      removeEventListener('OnRequest', onRequest)
    }
  }, [addEventListener, removeEventListener])

  return (
    <div className="absolute inset-0 z-10 bg-black">
      <div
        className={clsx(
          'fixed z-20 h-full w-full',
          splashEnd ? 'hidden' : 'block',
        )}
      >
        <AutoSizeImage
          src={'/images/unity/loading_bg_2.jpg'}
          full
          priority
          objectCover
        />
        <Progressbar number={Math.round(loadingProgression * 100)} />
      </div>

      <div className="relative h-full w-full">
        <Unity
          style={{
            width: '100%',
            height: '100%',
            justifySelf: 'center',
            alignSelf: 'center',
            opacity: splashEnd ? 100 : 0,
            transition: 'opacity 1s ease',
          }}
          unityProvider={unityProvider}
        />
      </div>
    </div>
  )
}

export default CounselPage
