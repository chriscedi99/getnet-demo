import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { BodyCarrousel } from "../../Home/BodyCarrousel/BodyCarrousel";

interface Props {
  images: { image: string }[];
}

export const Carrousel = ({ images }: Props) => {
  return (
    <>
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            color: red; 
          }
        `}
      </style>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={2500}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {images.map((item) => (
          <SwiperSlide key={item.image}>
            <BodyCarrousel image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
