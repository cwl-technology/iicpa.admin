import { Suspense } from 'react'
import Chapter from './Chapter'

const page = () => {
    return (
        <Suspense>
            <Chapter />
        </Suspense>
    )
}

export default page