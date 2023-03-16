import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-icon.svg";
import Acc1 from "../../../assets/images/acc-5000.png";
import Acc2 from "../../../assets/images/acc-10000.png";
import Acc3 from "../../../assets/images/acc-20000.png";
import Acc4 from "../../../assets/images/acc-50000.png";
import flower from "../../UI/Animation/flower.json";
import Lottie from "react-lottie";
import "./accordion-blue.css";


const AccordionBlue = ({ background }) => {
	const [isActive, setIsActive] = useState(false);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: flower,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className={`accordionBlue ${background}`}>
			<div className="container">
				<div
					className="accordion__header"
					onClick={() => setIsActive(!isActive)}
				>
					<h2 className="accordion__title">ПРОГРАММЫ ЛОЯЛЬНОСТИ</h2>

					<Arrow className={isActive ? "accordion__arrow-up" : "accordion__arrow"  } />

					{
						isActive 
						? 
						null
						: 
						<p className="accordionBlue__header-text">
							скидки до 100% на подписку к торговому терминалу Letit
						</p>
					}
				</div>

				<div className={isActive ? "show" : "accordionBlue__body mobile"}>

					<div className="wrap">
						<div className="mobile-block">
							<div className="back-block" onClick={() => setIsActive(!isActive)}>
								<Arrow className="mobile-block__arrow" />
								<p>Назад</p>
							</div>

							<div className="mobile-block__header">
								<div className="mobile-block__header-info">
									<p className="mobile-block__title">ПРОГРАММЫ ЛОЯЛЬНОСТИ</p>
									<p className="mobile-block__text">
										скидки до 100% на подписку к торговому терминалу Letit
									</p>
								</div>

								<div className="mobile-block__flower">
									<Lottie options={defaultOptions} />
								</div>
							</div>
						</div>

						<div>

							<div className="accordion__body-row">
								<div className="accordion__body-col">
									<p className="acc__number">Brave</p>
									<p className="acc__number">Clever</p>
									<p className="acc__number">Wise</p>

									<p className="acc__forum-info">Форум</p>
								</div>
								<div className="accordion__body-col mobile-util">
									<div className="acc__img-wrap">
										<img src={Acc1} alt="Accordion img 1" className="acc__img" />
									</div>

									<p className="acc__number">-50%</p>
									<p className="acc__number">-30%</p>
									<p className="acc__number">-10%</p>

									<p className="acc__forum-info">без приоритета</p>
								</div>

								<div className="accordion__body-col mobile-util">
									<div className="acc__img-wrap">
										<img src={Acc2} alt="Accordion img 2" className="acc__img" />
									</div>

									<p className="acc__number acc__number--green acc__number--orange">
										-100%
									</p>
									<p className="acc__number">-50%</p>
									<p className="acc__number">-20%</p>

									<p className="acc__forum-info">низкий</p>
								</div>

								<div className="accordion__body-col mobile-util">
									<div className="acc__img-wrap img__util">
										<img src={Acc3} alt="Accordion img 3" className="acc__img" />
									</div>

									<p className="acc__number acc__number--green acc__number--orange">
										-100%
									</p>
									<p className="acc__number acc__number--green acc__number--orange">
										-100%
									</p>
									<p className="acc__number">-50%</p>

									<p className="acc__forum-info">средний</p>
								</div>

								<div className="accordion__body-col mobile-util">
									<div className="acc__img-wrap img__last img__util-last">
										<img src={Acc4} alt="Accordion img 4" className="acc__img" />
									</div>

									<p className="acc__number acc__number--green acc__number--white">
										-100%
									</p>
									<p className="acc__number acc__number--green acc__number--white">
										-100%
									</p>
									<p className="acc__number acc__number--green acc__number--white">
										-100%
									</p>

									<p className="acc__forum-info">высокий</p>
								</div>
							</div>
							<div className="acc__footer">
								<div className="acc__inner">
									<p>
										Для держателей 5000 и выше токенов сервисы Letit
										предоставляется без рекламы!
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flower">
						<Lottie options={defaultOptions} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccordionBlue;
