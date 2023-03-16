import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/icons/logo.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Instagram } from "../../assets/icons/insta.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/link.svg";
import { ReactComponent as YouTube } from "../../assets/icons/youtube.svg";
import { ReactComponent as Reddit } from "../../assets/icons/reddit.svg";
import { Link, NavLink } from "react-router-dom";
import BurgerIcon from "../../assets/icons/burger-icon.svg";

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<div className="header">
			<div className="header__container">
				<div
					className="burger-icon"
					onClick={() => setShowMobileMenu(!showMobileMenu)}
				>
					<img src={BurgerIcon} alt="Burger Icon" />
				</div>

				<NavLink to={"/"}>
					<img src={Logo} alt="logo" className="logo" />
				</NavLink>

				<div
					className={
						showMobileMenu
							? "header__mobile-wrap active"
							: "header__mobile-wrap"
					}
				>
					<div
						className="burger-icon"
						onClick={() => setShowMobileMenu(!showMobileMenu)}
					>
						<img src={BurgerIcon} alt="Burger Icon" />
					</div>

					<nav className="nav">
						<NavLink className="nav__link">White Paper</NavLink>
						<NavLink className="nav__link">Тарифы</NavLink>
						<NavLink className="nav__link">Магазин</NavLink>
						<NavLink className="nav__link">Школа</NavLink>
						<NavLink className="nav__link">Блог</NavLink>
						<NavLink className="nav__link">FAQ</NavLink>
					</nav>

					<div className="social">
						<Link to={"https://twitter.com"} className="social__link">
							<Twitter className="social__icon" />
						</Link>

						<Link className="social__link">
							<Telegram className="social__icon" />
						</Link>

						<Link className="social__link">
							<Instagram className="social__icon" />
						</Link>

						<Link className="social__link">
							<LinkedIn className="social__icon" />
						</Link>

						<Link className="social__link">
							<YouTube className="social__icon" />
						</Link>

						<Link className="social__link">
							<Reddit className="social__icon" />
						</Link>
					</div>

					<div className="lang">
						<p>EN</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
