import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-icon.svg";
import Star from "../../../assets/icons/acc-orange-icon1.svg";
import Brackets from "../../../assets/icons/acc-orange-icon2.svg";
import Exclamation from "../../../assets/icons/acc-orange-icon3.svg";
import Qr from '../../../assets/images/acc-qr-img.png'
import kitten from "../../UI/Animation/kitten.json";
import Lottie from "react-lottie";
import "./accordion-orange.css";

const cards = [
	{
		icon: Star,
		title: "SEED",
		subtitle: "end",
		token: "10 000 000",
		price: "$0.04",
		start: "01.05.22",
		end: "23.06.22",
		sale: "6 198 540",
		all: "61.9%",
	},

	{
		icon: Brackets,
		title: "PRIVATE",
		subtitle: "sold out",
		token: "10 000 000",
		price: "$0.06",
		start: "18.08.22",
		end: "21.09.22",
		sale: "10 000 000",
		all: "100%",
	},

	{
		icon: Exclamation,
		title: "PUBLIC",
		subtitle: "13,67%",
		token: "30 000 000",
		price: "$0.08",
		start: "10.10.22",
		end: "---",
		sale: "4 198 540",
		all: "13.9%",
	},
];

const title = [
	{
		icon: Star,
		title: "SEED",
		subtitle: "end",
	},
	{
		icon: Brackets,
		title: "PRIVATE",
		subtitle: "sold out",
	},
	{
		icon: Exclamation,
		title: "PUBLIC",
		subtitle: "13,67%",
	}
]

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: kitten,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

const AccordionOrange = ({ background }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className={`accordion ${background}`}>
			<div className="container">
				<div
					className="accordion__header"
					onClick={() => setIsActive(!isActive)}
				>
					<h2 className="accordion__title">ИТОГИ РАУНДОВ</h2>

					<Arrow
						className={
							isActive ? "accordion__arrow-up" : "accordion__arrow"
						}
					/>
					<div className="accordionOrange__header-info">
						<div
							className={
								isActive
									? "accordionOrange__header-row close"
									: "accordionOrange__header-row  open"
							}
						>

							{
								title.map( (el, i) => {
									return <div className="accordionOrange__header-col" key={i}>
													<div className="accordionOrange__header-icon">
														<img src={el.icon} alt="Star" />
													</div>
													<p className="accordionOrange__header-title accordionOrange__header-title__resp">{el.title}</p>
													<p className="accordionOrange__header-subtitle accordionOrange__header-subtitle__resp">{el.subtitle}</p>
												</div>
								})
							}
						</div>
						<p
							className={
								isActive ? "accordionOrange__header__title-open open" : "close"
							}
						>
							ПРЕСЕЙЛЫ ДО ОФИЦИАЛЬНОГО ЛИСТИНГА
						</p>
					</div>
				</div>

				<div className={isActive ? "show__orange" : "accordion__body"}>
				
						<div className="mobile-block">
							<div className="back-block" onClick={() => setIsActive(!isActive)}>
								<Arrow className="mobile-block__arrow" />
								<p>Назад</p>
							</div>

							<div className="mobile-block__header">
								<div className="mobile-block__header-info">
									<p className="mobile-block__title">ИТОГИ РАУНДОВ</p>
									<p className="mobile-block__text mobile-block__text-orange">
										ПРЕСЕЙЛЫ ДО ОФИЦИАЛЬНОГО ЛИСТИНГА
									</p>
								</div>
							</div>
						</div>
					<div className="accordionOrange__body-row">
						{
							cards.map((el, i) => {
								return (
									<div className="accordionOrange__body-col" key={i}>
										<div className="accordionOrange__header-col accordionOrange__body-title">
											<img src={el.icon} alt="Star" />
											<p className="accordionOrange__header-title">{el.title}</p>
											<p className="accordionOrange__header-subtitle">{el.subtitle}</p>
										</div>

										<div className="accordionOrange__body-info">
											<div className="accordionOrange__info-row">
												<p>токенов</p>
												<p>{el.token}</p>
											</div>

											<div className="accordionOrange__info-row">
												<p>цена</p>
												<p>{el.price}</p>
											</div>

											<div className="accordionOrange__info-row">
												<p>старт</p>
												<p>{el.start}</p>
											</div>

											<div className="accordionOrange__info-row">
												<p>конец</p>
												<p>{el.end}</p>
											</div>

											<div className="accordionOrange__info-row">
												<p>выкуплено</p>
												<p>{el.sale}</p>
											</div>

											<div className="accordionOrange__info-row">
												<p>{el.all}</p>
											</div>
										</div>
									</div>
								);
							})
						}
					</div>

					<div className="accordionOrange__footer">
						<img src={Qr} alt="QR" />

						<div className="accordionOrange__footer-content">
							<div className="accordionOrange__footer-info">
								<p className="red">Всего 85 678 держателей токенов LETIT</p>
								<div className="kitten kitten__mobile">
									<Lottie options={defaultOptions} />
								</div>
								<p className="accordionOrange__footer-text">подписчики @Letit_app узнают инфу по сейлам раньше всех</p>
							</div>

							<div className="kitten">
								<Lottie options={defaultOptions} />
							</div>

							<a href="#" className="subsribe-btn">подписаться</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccordionOrange;
