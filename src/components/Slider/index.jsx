import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const imageList = [
	"http://hanghaimobile.com/wp-content/uploads/2021/03/ms_banner_img3.png",
	"https://s.yimg.com/os/creatr-uploaded-images/2021-12/56ca57c0-600f-11ec-befb-522263874ea1",
	"https://admin.gse.ae/uploads/slide/Gse_ca6b987358d345a5b374ca117732afc1_Slide.jpg",
	"https://storage.googleapis.com/pr-newsroom-wp/1/2020/02/Galaxy_Header.jpg",
];

const Slider = () => {
	return (
		<div className="slider">
			<Swiper slidesPerView={1}>
				{imageList.map((image, index) => {
					return (
						<SwiperSlide key={index}>
							<img src={image} alt="alt img" />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Slider;
