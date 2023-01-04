import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const imageList = [
	"https://fixinmin.com/wp-content/uploads/2022/09/banner.jpg",
	"https://s.yimg.com/os/creatr-uploaded-images/2021-12/56ca57c0-600f-11ec-befb-522263874ea1",
	"https://cdn.techzones.vn/Data/Sites/1/media/tin-t%E1%BB%A9c-/samsung-gear-s2-sport/samsung-gear-s2-sport-3.jpg?w=1920",
	"https://fixinmin.com/wp-content/uploads/2022/11/phone-banner-2.jpg",
	"https://itechcorrect.co.uk/wp-content/uploads/2016/03/iPad-Repair-Banner1-1.jpg",
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
