import React, { Suspense } from 'react'
import StudyPanel from './StudyPanel'

const page = () => {
  return (
    <Suspense>
      <StudyPanel />
    </Suspense>
  )
}

export default page