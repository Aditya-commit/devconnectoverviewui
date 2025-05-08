export default function UnauthenticatedLayout({children}){

	return(

		<div className='w-full h-screen flex justify-center items-center bg-[#ebe6e7]'>

			<div className='w-[350px] min-[500px]:w-[450px] min-[640px]:w-[500px] border-2 border-gray-200 rounded-lg bg-white pb-10'>
				{children}
			</div>

		</div>
	);
}