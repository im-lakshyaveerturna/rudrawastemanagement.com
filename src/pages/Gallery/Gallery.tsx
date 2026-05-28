import { useState } from 'react'
import CircularGallery from '../../components/CircularGallery'
import image1 from '../../assets/gallery/image-1.jpg'
import image2 from '../../assets/gallery/image-2.jpg'
import image3 from '../../assets/gallery/image-3.jpg'
import image4 from '../../assets/gallery/image-4.jpg'
import image5 from '../../assets/gallery/image-5.jpeg'
import image6 from '../../assets/gallery/image-6.jpeg'
import svcCollection from '../../assets/services/doortodoor.png'
import svcIncinerator from '../../assets/services/incinerator.png'
import svcAutoclave from '../../assets/services/autoclave.png'
import svcShredding from '../../assets/services/shredding.jpg'
import svcScrubber from '../../assets/services/SCRUB.png'

const images = [
  { image: svcCollection, text: 'Door-to-door biomedical waste collection with authorized vehicles' },
  { image: svcIncinerator, text: 'High-temperature incinerator for anatomical and pharmaceutical waste' },
  { image: svcAutoclave, text: 'Autoclave steam sterilization for infectious biomedical waste' },
  { image: svcShredding, text: 'Shredding facility for secure volume reduction and destruction' },
  { image: svcScrubber, text: 'Scrubber system for stack emission control ensuring air safety' },
  { image: image1, text: 'Biomedical waste collection vehicle and facility' },
  { image: image2, text: 'Medical waste segregation and storage area' },
  { image: image3, text: 'Incineration facility for hazardous waste' },
  { image: image4, text: 'Waste collection team with safety gear' },
  { image: image5, text: 'Color-coded biomedical waste containers' },
  { image: image6, text: 'Waste management facility operations' }
]

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const handleImageClick = (index: number) => {
    setSelectedImage({ src: images[index].image, alt: images[index].text })
  }

  return (
    <div className="min-h-[calc(100vh-80px)] w-full">
      <section className="bg-gradient-to-br from-[#0b6e16] via-[#029e12] to-[#1b8f2a] px-6 pb-16 pt-24 text-center text-white">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="mb-4 text-4xl font-bold tracking-[-1px] md:text-[3.5rem]">Gallery</h1>
          <p className="text-lg font-light opacity-90 md:text-[1.3rem]">See our facility and operations in action</p>
        </div>
      </section>

      <section className="relative h-[400px] bg-black sm:h-[500px] lg:h-[600px]">
        <CircularGallery items={images} bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} onImageClick={handleImageClick} />
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[9999] flex cursor-pointer items-center justify-center bg-black/95" onClick={() => setSelectedImage(null)}>
          <div className="relative max-h-[90%] max-w-[90%] cursor-default" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 flex h-10 w-10 items-center justify-center border-none bg-transparent p-0 text-5xl leading-none text-white transition hover:opacity-70"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="block max-h-[90vh] max-w-full object-contain" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
