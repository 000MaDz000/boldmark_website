'use client';
import { getImgURL } from '@/helpers/getImgURL';
import { Picture } from '@/types/picture';
import NextImage, { ImageProps } from 'next/image';
import React from 'react'

function ClientImage({ src, ...rest }: Omit<ImageProps, "src"> & { src: Picture }) {
    const url = getImgURL(src);

    return (
        <NextImage {...rest} src={url} width={src?.width || 600} height={src?.height || 250} alt={src?.name || "alt"} />
    )
}

export default ClientImage