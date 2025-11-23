import React from "react";
import Footer from "./student/Footer";
import { useClerk, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const About = () => {
	const { user } = useUser();
	const { openSignIn } = useClerk();
	
	return (
		<>
			<div className="w-full mx-auto px-6 py-12 bg-gradient-to-b from-cyan-100/40">
				<h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
					About NLS
				</h1>
				<p className="text-lg text-gray-600 text-center mb-8">
					Trao quyền cho học viên và giảng viên thông qua một trải nghiệm học tập trực tuyến mượt mà và hiệu quả.
				</p>

				{/* Section: Our Mission */}
				<div className=" p-8 rounded-lg shadow-lg mb-8">
					<h2 className="text-2xl font-semibold text-gray-700 mb-4">
						Sứ mệnh của chúng tôi
					</h2>
					<p className="text-gray-600">
						Tại NLS, chúng tôi nỗ lực làm cho giáo dục trở nên dễ tiếp cận và hấp dẫn với mọi người. Nền tảng của chúng tôi kết nối học viên và giảng viên bằng cách cung cấp các khóa học chất lượng cao, công cụ học tập tương tác và trải nghiệm người dùng trực quan.
					</p>
				</div>

				{/* Section: Why Choose Us */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="p-6 border rounded-lg shadow-md text-center">
						<h3 className="text-xl font-semibold text-gray-700">
							📚 Khóa học chất lượng
						</h3>
						<p className="text-gray-600 mt-2">
							Học từ các giảng viên chuyên gia thông qua các khóa học được cấu trúc tốt và hấp dẫn.
						</p>
					</div>
					<div className="p-6 border rounded-lg shadow-md text-center">
						<h3 className="text-xl font-semibold text-gray-700">
							🚀 Học tập tương tác
						</h3>
						<p className="text-gray-600 mt-2">
							Nền tảng của chúng tôi bao gồm theo dõi tiến trình theo thời gian thực, các bài kiểm tra và các dự án thực hành.
						</p>
					</div>
					<div className="p-6 border rounded-lg shadow-md text-center">
						<h3 className="text-xl font-semibold text-gray-700">
							🌍 Truy cập toàn cầu
						</h3>
						<p className="text-gray-600 mt-2">
							Học bất cứ lúc nào, bất cứ nơi đâu, trên bất kỳ thiết bị nào với trải nghiệm liền mạch.
						</p>
					</div>
				</div>

				{/* Section: Join Us */}
				<div className="mt-12 text-center">
					<h2 className="text-2xl font-semibold text-gray-700 mb-4">
						Tham gia NLS ngay hôm nay
					</h2>
					<p className="text-gray-600 mb-6">
						Dù bạn là học viên muốn nâng cao kỹ năng hay giảng viên muốn chia sẻ kiến thức, NLS là nền tảng hoàn hảo dành cho bạn.
					</p>

					{user ? (
						<Link to="/" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"> Get Startd</Link>
					) : (
						<button
							onClick={() => openSignIn()}
							className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
						>
							Get Started
						</button>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
