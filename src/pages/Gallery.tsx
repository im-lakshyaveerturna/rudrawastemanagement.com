import { useState } from 'react'
import './Gallery.css'
import CircularGallery from '../components/CircularGallery'
import image1 from '../assets/gallery/image-1.jpg'
import image2 from '../assets/gallery/image-2.jpg'
import image3 from '../assets/gallery/image-3.jpg'
import image4 from '../assets/gallery/image-4.jpg'
import image5 from '../assets/gallery/image-5.jpg'
import image6 from '../assets/gallery/image-6.jpg'
import image7 from '../assets/gallery/image-7.jpg'
import image8 from '../assets/gallery/image-8.jpg'
import image9 from '../assets/gallery/iamge-9.jpeg'
import image10 from '../assets/gallery/image-10.jpeg'

const images = [
  { image: image1, text: 'Facility 1' },
  { image: image2, text: 'Facility 2' },
  { image: image3, text: 'Facility 3' },
  { image: image4, text: 'Facility 4' },
  { image: image5, text: 'Facility 5' },
  { image: image6, text: 'Facility 6' },
  { image: image7, text: 'Facility 7' },
  { image: image8, text: 'Facility 8' },
  { image: image9, text: 'Facility 9' },
  { image: image10, text: 'Facility 10' },
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
