export default function UnauthenticatedLayout({children}){

	return(

		<div className='w-full h-screen flex justify-center items-center bg-gray-200'>

			<div className='w-[500px] border-2 border-gray-200 rounded-lg bg-white pb-10'>
				{children}
			</div>

		</div>
	);
}