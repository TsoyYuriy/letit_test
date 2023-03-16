import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Instagram } from "../../assets/icons/insta.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/link.svg";
import { ReactComponent as YouTube } from "../../assets/icons/youtube.svg";
import { ReactComponent as Reddit } from "../../assets/icons/reddit.svg";
import "./footer.css";

const Footer = () => {
	return (
		<div className="footer-wrap">
			<footer className="footer">
				<div className="footer__container">
					<div className="footer__row">
						<NavLink to={"/"} className="footer__logo">
							<img src={Logo} alt="logo" className="footer__logo" />
						</NavLink>

						<div className="footer__nav">
							<Link className="footer__text footer__link">White paper</Link>
							<Link className="footer__text footer__link">White List</Link>
							<Link className="footer__text footer__link">Раунды пресейлов</Link>
							<Link className="footer__text footer__link">Курс “Хакни трейдинг”</Link>
							<Link className="footer__text footer__link">Лавка мерча и NFT</Link>
							<Link className="footer__text footer__link">Функционал терминала Letit</Link>
						</div>

						<div className="footer__faq">
							<Link className=" footer__text footer__link">FAQ</Link>
							<Link className=" footer__text footer__link">Криптословарь</Link>
							<a href="mailto:letit@letit.ap" className="footer__text email">
								letit@letit.ap
							</a>
						</div>

						<div className="footer__social-block">
							<div className="social footer__social">
								<Link to={"https://twitter.com"} className="social__link">
									<Twitter className="footer__social-icon" />
								</Link>

								<Link className="social__link">
									<Telegram className="footer__social-icon" />
								</Link>

								<Link className="social__link">
									<Instagram className="footer__social-icon" />
								</Link>

								<Link className="social__link">
									<LinkedIn className="footer__social-icon" />
								</Link>

								<Link className="social__link">
									<YouTube className="footer__social-icon" />
								</Link>

								<Link className="social__link">
									<Reddit className="footer__social-icon" />
								</Link>
							</div>

							<p className="footer__text">Подписывайтесь на открытые каналы <br /> Letit, каждый день что-то происходит</p>
						</div>

					</div>
				</div>
			</footer>

			<p className="footer__text container footer__copyright">
				Все права защищены, любое копирование или цитирование контента LETIT
				допустимо с разрешения
			</p>
		</div>
	);
};

export default Footer;
