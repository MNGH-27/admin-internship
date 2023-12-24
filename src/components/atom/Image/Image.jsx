'use client'

import NextImage from 'next/image'

const loaderProp = ({ src }) => {
   return src
}

const Image = ({ src, alt, ...rest }) => {
   return <NextImage src={src} alt={alt} {...rest} loader={loaderProp} />
}

export default Image
