'use client'

import GridCuration from '@/components/grid-curation/GridCuration'
import CSText from '@/components/ui/text/CSText'

const MainArea = () => {
  return (
    <section className="relative mx-auto  mt-[-30rem] rounded-lg px-[2rem] pb-[10rem] lg:px-[9rem]">
      <div className="mt-[10rem] flex flex-col gap-[10rem]">
        <div className="flex flex-col gap-[1.5rem]">
          <CSText size="31" color="white" weight="bold">
            예비 심리상담사를 위한 메타버스 교육동
          </CSText>
          <CSText size="16" color="white" className="whitespace-pre-line">
            이 플랫폼은 AI 기반 메타버스 상에서 예비 심리상담 전문가를 위해
            설계된 교육 및 훈련 프로그램을 제공합니다.
          </CSText>
          <GridCuration />
        </div>
      </div>
    </section>
  )
}

export default MainArea
