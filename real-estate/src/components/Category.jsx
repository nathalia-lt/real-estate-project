import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import CardImovel from "./CardImovel"

function Category ( {category} ){
    console.log(category)
    return(
        <>
        <h2 className="text-2xl text-green-500 p-2">{category.name}</h2>
        <div className="flex flex-col gap-y-3.5 w-full">
            <Swiper className="w-full" modules={[Navigation, Pagination, Scrollbar]} spaceBetween={10} slidesPerView={1} navigation pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}>
                {category.imoveis.map((imovel, index) => (
                    <SwiperSlide  key={index}>
                        <CardImovel imovel={imovel} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </>
    )
}

export default Category