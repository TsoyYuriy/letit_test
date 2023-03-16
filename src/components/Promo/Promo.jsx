import React from "react";
import "./promo.css";
import PromoImg from '../../assets/images/promo-img.png'

const Promo = () => {
	return (
		<div className="promo">
			<div className="container">
				<div className="promo__row">
					<div className="promo__col">
						<h1 className="promo__title">ТОКЕНЫ LETIT</h1>

						<p className="promo__subtitle">
							<span>LIVE!</span> идёт третий раунд пресейла!
						</p>

						<p className="promo__text">
							Залетай на третий пресейл токенов LETIT, это уникальный
							крипто-актив, развернутый на BNB chain. Наша крипта открывает
							доступ ко всем возможностям экосистемы, листай дальше или сразу
							инвестируй в LETIT на пресейлах, а после листинга на биржах следи
							за курсом! ( ‾́ ◡ ‾́ )
						</p>

						<button className="btn-buy-token">купить токены</button>
					</div>

					<div className="promo__col">
						<img className="promo__img" src={PromoImg} alt="Promo img" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Promo;
