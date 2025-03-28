import React, { Suspense } from 'react'
import View from './View'

const page = () => {
    return (
        <Suspense>
            <View />
        </Suspense>
    )
}

export default page