'use client';
import { Picture } from '@/types/picture';
import NextImage, { ImageProps } from 'next/image';
import React from 'react'

function ClientImage({ src, ...rest }: Omit<ImageProps, "src"> & { src: Picture }) {
    const params = new URLSearchParams();
    params.set("path", src.url);

    const url = "/api/images?" + params.toString();

    return (
        <NextImage {...rest} src={url} width={src.width} height={src.height} alt={src.name} />
    )
}

export default ClientImage