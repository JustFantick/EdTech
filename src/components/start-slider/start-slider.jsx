import React, { Component } from 'react';

import Button from '../button/button.jsx'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/less';
import './start-slider.less'

class StartSlider extends Component {
	render() {
		return (
			<main className="main _scroll-anim _top" id='home'>
				<Swiper
					modules={[Navigation]}
					spaceBetween={50}
					slidesPerView={1}
					loop={true}
					speed={700}
					navigation={
						{
							prevEl: '.prev',
							nextEl: '.next',
						}
					}
				>
					<SwiperSlide>
						<img src={require('../../img/bigSliderImage.jpg')} alt='Image missed'></img>
						<div
							className='slide-content'>
							<h2 className='slide-title'>Get Started Digital <br /> Learning</h2>
							<Button type='blue' text='Get started' />
						</div>

					</SwiperSlide>
					<SwiperSlide>
						<img src={require('../../img/bigSliderImage.jpg')} alt='Image missed'></img>
						<div className='slide-content'>
							<h2 className='slide-title'>Second slide</h2>
							<Button type='blue' text='Get started' />
						</div>

					</SwiperSlide>
					<SwiperSlide>
						<img src={require('../../img/bigSliderImage.jpg')} alt='Image missed'></img>
						<div className='slide-content'>
							<h2 className='slide-title'>Third slide</h2>
							<Button type='blue' text='Get started' />
						</div>

					</SwiperSlide>

					<div className='icon-arrow prev'></div>
					<div className='icon-arrow next'></div>
				</Swiper>
			</main>
		);
	}
}
export default StartSlider;