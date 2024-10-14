import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoading = () => {
    return (
        <SkeletonTheme  baseColor="#DBD3D3" highlightColor="#ECDFCC">
            
                <Skeleton  count={5} />
            
        </SkeletonTheme>
    )
}

export default SkeletonLoading