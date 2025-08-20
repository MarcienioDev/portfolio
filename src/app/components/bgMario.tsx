import Image from 'next/image';

export default function bgMario() {
  return (
    <Image
      alt="Mountains"
      src="/assets/bgMario.gif"
      quality={100}
      fill
      sizes="100vw"
      className='-z-10 brightness-25'
      style={{
        objectFit: 'cover',
      }}
    />
  )
}