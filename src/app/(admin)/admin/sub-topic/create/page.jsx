import React, { Suspense } from 'react'
import SubTopicCreate from './SubTopicCreate'

const page = () => {
  return (
    <Suspense>
        <SubTopicCreate/>
    </Suspense>
  )
}

export default page