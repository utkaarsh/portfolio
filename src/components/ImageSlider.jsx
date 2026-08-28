import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Modal from "./Modal";

const ImageSlider = ({ images = [], slides = 4 }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const modalSliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: images.length > slides,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const modalSettings = {
    dots: true,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    initialSlide: selectedIndex ?? 0,
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      setTimeout(() => {
        modalSliderRef.current?.slickGoTo(selectedIndex, true);
      }, 0);
    }
  }, [selectedIndex]);

  if (!images.length) {
    return null;
  }

  return (
    <>
      {/* Main Gallery */}
      <div className="mx-auto w-9/12 rounded-xl">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={`${image}-${index}`} className="px-2 mr-3">
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="block w-full cursor-pointer overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="h-64 w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </button>
            </div>
          ))}
        </Slider>
      </div>

      {/* Image Modal */}
      <Modal
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
      >
        <div className="w-full">
          <Slider
            ref={modalSliderRef}
            slidesToShow={1}
            {...modalSettings}
            beforeChange={(_, next) => setSelectedIndex(next)}
          >
            {images.map((image, index) => (
              <div key={`${image}-modal-${index}`}>
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="max-h-[80vh]  max-w-full self-center mx-auto rounded-xl object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Modal>
    </>
  );
};

export default ImageSlider;
