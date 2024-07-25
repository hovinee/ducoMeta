'use client'

import { EDUCATIONS } from '@/data/unity/data'
import AutoSizeImage from '../ui/auto-size-image/AutoSizeImage'
import CSText from '../ui/text/CSText'
import { motion } from 'framer-motion'
import Link from 'next/link'

const GridCuration = () => {
  return (
    <div className="grid grid-cols-1 gap-[1.5rem] border-b pb-[5rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {EDUCATIONS.map((education, index) => (
        <div key={education.id}>
          <div className="cursor-pointer">
            <div className="w-full overflow-hidden rounded-[1rem]">
              <Link href={`/education/${education.id}`}>
                <motion.div
                  key={index}
                  className="relative h-full cursor-pointer rounded-[1rem] bg-999899"
                  whileHover={{ scale: 1.1 }}
                >
                  <AutoSizeImage
                    src={education.thumbnail_image}
                    full
                    rounded="10"
                  />
                </motion.div>
              </Link>
            </div>
          </div>
          <div className="h-[8rem] w-full rounded-b-[1rem] pt-[1.5rem]">
            <CSText size="21" color="white" weight="bold">
              {education.title}
            </CSText>
            <CSText size="14" color="white" className="mt-[0.5rem]">
              {education.sub_title}
            </CSText>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GridCuration
