import { Suspense } from 'react'
import Topic from './Topic'

const page = () => {
    return (
        <Suspense>
            <Topic />
        </Suspense>
    )
}

export default page