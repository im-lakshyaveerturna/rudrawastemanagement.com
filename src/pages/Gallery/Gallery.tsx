import { useState } from 'react'
import './Gallery.css'
import CircularGallery from '../../components/CircularGallery'
import image1 from '../../assets/gallery/image-1.jpg'
import image3 from '../../assets/gallery/image-3.jpg'
import image4 from '../../assets/gallery/image-4.jpg'
import image5 from '../../assets/gallery/image-5.jpg'
import image9 from '../../assets/gallery/iamge-9.jpeg'
import image10 from '../../assets/gallery/image-10.jpeg'
// Services images to include in gallery
import svcCollection from '../../assets/services/doortodoor.png'
import svcIncinerator from '../../assets/services/incinerator.png'
import svcAutoclave from '../../assets/services/autoclave.png'
import svcShredding from '../../assets/services/shredding.jpg'
import svcScrubber from '../../assets/services/SCRUB.png'

const images = [
  // Services visuals first
  { image: svcCollection, text: 'Door-to-door biomedical waste collection with authorized vehicles' },
  { image: svcIncinerator, text: 'High-temperature incinerator for anatomical and pharmaceutical waste' },
  { image: svcAutoclave, text: 'Autoclave steam sterilization for infectious biomedical waste' },
  { image: svcShredding, text: 'Shredding facility for secure volume reduction and destruction' },
  { image: svcScrubber, text: 'Scrubber system for stack emission control ensuring air safety' },
  // Remaining gallery visuals
  { image: image1, text: 'Biomedical waste collection vehicle and facility' },
  { image: image3, text: 'Medical waste segregation and storage area' },
  { image: image4, text: 'Incineration facility for hazardous waste' },
  { image: image5, text: 'Waste collection team with safety gear' },
  { image: image9, text: 'Color-coded biomedical waste containers' },
  { image: image10, text: 'Waste management facility operations' },
]

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const handleImageClick = (index: number) => {
    setSelectedImage({ src: images[index].image, alt: images[index].text })
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <h1 className="page-title">Gallery</h1>
          <p className="page-subtitle">See our facility and operations in action</p>
        </div>
      </section>

      <section className="gallery-carousel">
        <CircularGallery 
          items={images}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
          onImageClick={handleImageClick}
        />
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
