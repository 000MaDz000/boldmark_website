import { Video } from '@/types/video'
import React, { HTMLAttributes } from 'react'

function ClientVideoSrc({ src, ...rest }: HTMLAttributes<HTMLSourceElement> & { src: Video }) {
    return <source src={src.url} type="video/mp4" {...rest} />
}

export default ClientVideoSrc