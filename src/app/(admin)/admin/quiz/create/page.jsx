import React, { Suspense } from 'react'
import QuizCreate from './QuizCreate'

const page = () => {
  return (
    <Suspense>
        <QuizCreate/>
    </Suspense>
  )
}

export default page