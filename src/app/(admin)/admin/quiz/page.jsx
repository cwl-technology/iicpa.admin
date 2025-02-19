import { Suspense } from 'react'
import Quiz from './Quiz'

const page = () => {
    return (
        <Suspense>
            <Quiz />
        </Suspense>
    )
}

export default page