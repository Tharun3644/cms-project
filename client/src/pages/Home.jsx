import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
			<div className="relative z-10 max-w-screen-sm mx-auto p-10 bg-white rounded-xl shadow-2xl border border-blue-100">
				
				<h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-gray-900 drop-shadow">
					<br />
					<span className="text-blue-600">Zamata</span>
				</h1>
				<p className="text-lg text-gray-700 mb-8">
					<span className="text-red-500 font-semibold inline-block animate-typing border-r-2 border-blue-700 ml-1">
						enjoy ur  snacks
					</span>
				</p>
				<div className="flex gap-4">
					
				</div>
			</div>
		</div>
	);
}