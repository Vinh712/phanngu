import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

import SocialIcons from "../SocialIcons";

const Footer = () => {
	// Added subscription state
	const [subscribeEmail, setSubscribeEmail] = useState("");

	// Added subscription handler
	const handleSubscribe = () => {
		// Replace this with your subscription API integration if needed
		console.log("Subscribed with:", subscribeEmail);
		alert(`Subscribed with: ${subscribeEmail}`);
		setSubscribeEmail("");
	};

	return (
		<footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
			<div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
				<div className="flex flex-col md:items-start items-center w-full">
					<img src={assets.logo_dark} alt="logo" />
					<p className="mt-6 text-center sm:flex sm:flex-row sm:justify-center  md:text-left text-sm text-white/80">
						Chúng tôi mang đến trải nghiệm học tập dễ tiếp cận và đầy hứng thú
						kết nối học viên với giảng viên thông qua các khóa học chất lượng
						công cụ tương tác hiện đại và giao diện trực quan.
					</p>
				</div>
				
			</div>
			<p className="py-4 text-center text-xs md:text-sm text-white/60">
				Copyright 2023 © NLS. All Right Reserved.
			</p>
		</footer>
	);
};

export default Footer;
