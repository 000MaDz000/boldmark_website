'use client';
import { Picture } from '@/types/picture';
import NextImage, { ImageProps } from 'next/image';
import React from 'react'

function ClientImage({ src, ...rest }: Omit<ImageProps, "src"> & { src: Picture }) {
    const params = new URLSearchParams();
    params.set("path", src?.url);

    const url = "/api/images?" + params.toString();

    return (
        <NextImage {...rest} src={url} width={src?.width || 600} height={src?.height || 250} alt={src?.name || "alt"} />
    )
}

export default ClientImage