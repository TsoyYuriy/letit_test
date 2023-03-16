import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, 
							display: "block", 
							background: "url(/assets/images/icons/arrow-next-icon.svg) no-repeat", 
							width: '30px',
							top: '-30px', 
							right: '40px' 
						}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, 
							display: "block", 
							background: "url(/assets/images/icons/arrow-prev-icon.svg) no-repeat", 
							width: '30px',
							top: '-30px', 
							left: '40px' 
						}}
			onClick={onClick}
		/>
	);
}
const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow className='prev'/>,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: false,
				nextArrow: <SampleNextArrow />,
  			prevArrow: <SamplePrevArrow />,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
};

const Carousel = () => {

	const sliderItem = [
		{
			title: 'Заголовок',
			description: 'Разработка и реализация плана по улучшению экологической обстановки в городе. Это может включать в себя сокращение выбросов загрязняющих веществ, развитие мест'
		},
		{
			title: 'Заголовок',
			description: 'Разработка и реализация плана по улучшению экологической обстановки в городе. Это может включать в себя сокращение выбросов загрязняющих веществ, развитие мест'
		},
		{
			title: 'Заголовок',
			description: 'Разработка и реализация плана по улучшению экологической обстановки в городе. Это может включать в себя сокращение выбросов загрязняющих веществ, развитие мест'
		},
		{
			title: 'Заголовок',
			description: 'Разработка и реализация плана по улучшению экологической обстановки в городе. Это может включать в себя сокращение выбросов загрязняющих веществ, развитие мест'
		},

	]

	return (
		<div>
			<Slider {...settings}>
				{
					sliderItem.map((el, i) => {
						return <div key={i}>
										<div className='slider__item'>
											<h5 className='slider__title'>{el.title}</h5>
											<p className='slider__text'>{el.description}</p>
										</div>
									</div>
					})
				}
			</Slider>
		</div>

	)
}

export default Carousel
