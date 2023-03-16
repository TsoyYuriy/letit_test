import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-icon.svg";
import ImgRed1 from '../../../assets/images/acc-red-img1.png'
import ImgRed2 from '../../../assets/images/acc-red-img2.png'
import ImgRed3 from '../../../assets/images/acc-red-img3.png'
import ImgRed4 from '../../../assets/images/acc-red-img4.png'
import GreenCol from '../../../assets/images/green.png'
import RedCol from '../../../assets/images/red.png'
import BlueCol from '../../../assets/images/blue.png'
import "./accordion-red.css";

const info = [
	{
		header: [
			{
				image: GreenCol,
				darkColor: '#075066',
				lightColor: '#00B5A5',
				letit: '100 000',
				usd: '8 000',
				usd2: '0.08',
				share: 1,
				headerBg: '#B0E7E2',
				border: '2px solid #00B5A5'
			}
		],
		border: '2px solid #00B5A5',
		lightColor: '#00B5A5',
		price: '8 500',
		channel: ['технический анализ'],
		outside: '',
		summit: ['возможность участия'],
		cryptoconferencing: ['оповещение об участии'],
		outside2: '',
		footerBg: '#00B5A5'
	},
	{
		header: [
			{
				image: RedCol,
				darkColor: '#E84F35',
				lightColor: '#F9E6DC',
				letit: '200 000',
				usd: '16 000',
				usd2: '0.08',
				share: 2,
				headerBg: '#F5C0B7',
				border: '2px solid #E84F35'
			}
		],
		border: '2px solid #E84F35',
		lightColor: '#E84F35',
		price: '24 620',
		channel: ['технический анализ', 'аналитика рынка'],
		outside: '(стоимость вне клуба – 5000 USDT)',
		summit: ['возможность участия', 'билет со скидкой 50%'],
		cryptoconferencing: ['возможность участия', 'билет со скидкой 50%'],
		outside2: '(стоимость вне клуба – 4000 USDT)',
		footerBg: '#E84F35'

	},
	{
		header: [
			{
				image: BlueCol,
				darkColor: '#075066',
				lightColor: '#B0E7E2',
				letit: '500 000',
				usd: '40 000',
				usd2: '0.08',
				share: 5,
				headerBg: '#8EBBC9',
				border: '2px solid #075066'
			}
		],
		border: '2px solid #075066',
		lightColor: '#075066',
		price: '49 000',
		channel: ['технический анализ', 'аналитика рынка', 'инвестиционные стратегии'],
		outside: '(стоимость вне клуба – 4000 USDT)',
		summit: ['возможность участия', 'билет со скидкой 50%'],
		cryptoconferencing: ['совместное участие', 'бесплатные билеты', 'мерч LETIT', 'VIP места'],
		outside2: '(стоимость вне клуба – 4000 USDT)',
		footerBg: '#075066'

	},
	
]

const AccordionRed = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className={isActive ? 'accordion accordionRed__header--white' : 'accordion accordionRed__header' }>
			<div className="container">
				<div
					className="accordion__header"
					onClick={() => setIsActive(!isActive)}
				>
					<h2 className={isActive ? "accordion__title accordionRed__title" : 'accordion__title'}>ЗАКРЫТЫЙ ТРЕЙДИНГ КЛУБ</h2>
					<Arrow className={isActive ? "accordionRed__arrow-up" : "accordion__arrow"}/>

					<div className="accordionRed__header-info">
						{
							isActive 
							?
							<div className="accordionRed__header-open">
								<img src={ImgRed4} alt="img" />
								<p>CLUB</p>
							</div>

							:
							<div className="accordionRed__header-row">
								<img src={ImgRed1} alt="img" />
								<img src={ImgRed2} alt="img" />
								<img src={ImgRed3} alt="img" />
							</div>
						}
					</div>

				</div>

				<div className={isActive ? "show__red" : "accordion__body"}>
				
					<div className="mobile-block mobile-block__red">
							<div className="back-block back-block__red" onClick={() => setIsActive(!isActive)}>
								<Arrow className="mobile-block__arrow" />
								<p>Назад</p>
							</div>

							<div className="mobile-block__header ">
								<div className="mobile-block__header-info mobile-block__header-info__red">
									<p className="mobile-block__title mobile-block__title-red">ЗАКРЫТЫЙ ТРЕЙДИНГ КЛУБ</p>
								</div>

							
							</div>
						</div>

					<div className="accordionRed__body-row">

						{
							info.map((el, i) => {
								return <div className="accordionRed-body__col" key={i}>
												<div className="accordionRed-body__inner">

													{
														el.header.map((head, i) => {
															return <div className="accordionRed-body__header" style={{background: `${head.headerBg}`, border: `${head.border}`}} key={i}>

																			<div className="accordionRed-body__header-top">
																				<img className="img-col" src={head.image} alt="Green" />
																				<div></div>
																				<div className="accordionRed-body__header-topNumber">
																					<p style={{color: `${head.darkColor}`}}>{head.letit} LETIT</p>
																					<p>{head.usd} USDT</p>
																					<p>({head.usd2} USDT)</p>
																				</div>
																			</div>
																			<div className="accordionRed-body__header-bottom">
																				<p style={{color: `${head.lightColor}`}}>Только на период токен сейла:</p>
																				<p style={{color: `${head.darkColor}`}}>{head.share} {head.share > 1 ? 'доли' : 'доля'} в подарок за 18 месяцев</p>
																			</div>

																		</div>
														})
													}
													
													<div className="accordionRed-body__content" style={{color: `${el.lightColor}`, border: `${el.border}` }}>
														<div className="accordionRed-body__content-top">
															<p className="accordionRed-body__content-title">Постоянные привелегии:</p>
															<p className="accordionRed-body__content-subtitle">Базовое обучение</p>
															<p className="accordionRed-body__content-footnote">(стоимость вне клуба – 2100 USDT)</p>

															<p className="accordionRed-body__content-subtitle">Закрытый канал</p>


															<ul className="accordionRed-body__content-list">
																{
																	el.channel.map((ch, i) => {
																		return <li key={i}>{ch}</li>
																	})
																}
															</ul>
															<p className="accordionRed-body__content-footnote">(недоступен вне клуба)</p>
														</div>

														<div className="accordionRed-body__content-middle">
															<p className="accordionRed-body__content-subtitle">LETIT SUMMIT TRADERS</p>
															<ul className="accordionRed-body__content-list">
															{
																	el.summit.map((sm, i) => {
																		return <li key={i}>{sm}</li>
																	})
																}
															</ul>
															<p className="accordionRed-body__content-footnote">{el.outside}</p>
														</div>

														<div className="accordionRed-body__content-bottom">
															<p className="accordionRed-body__content-subtitle">Криптоконферении</p>
															<ul className="accordionRed-body__content-list">
																{
																	el.cryptoconferencing.map((cp, i) => {
																		return <li key={i}>{cp}</li>
																	})
																}
															</ul>
															<p className="accordionRed-body__content-footnote">{el.outside2}</p>
														</div>
													</div>

													<div className="accordionRed-body__footer" style={{background: `${el.footerBg}`}}>
														<p>Выгода за первый год:</p>
														<p>{el.price} USDT</p>
													</div>
												</div>

												<div className="accordionRed-body__buttons">
													<button className="accRed__btn" style={{border: `${el.border}`, color: `${el.lightColor}`}}>Узнать больше</button>
													<button className="accRed__btn" style={{border: `${el.border}`, color: `${el.lightColor}`}}>Купить пакет</button>
												</div>
											</div>
							})
						}	
					</div>		
				</div>
			</div>
		</div>
	);
};

export default AccordionRed;
