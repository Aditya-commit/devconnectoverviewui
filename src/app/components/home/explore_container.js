import { nunito_sans } from "@/app/fonts/nunito_sans";
import Heading from "../heading";
import ProjectCard from "../project_card";
import { useGetData } from "@/app/customHooks/useGetData";

const Explore = () => {

    const { loading , data , error }  = useGetData('projects/feed')


    return(
        <>
            <div className='px-5 min-[640px]:px-10'>
                <div className='border-t border-gray-400 min-[640px]:border-gray-200 mt-10 pt-5 min-[700px]:pt-10'></div>
            </div>

            <div className='grid grid-cols-[1fr_max-content] pr-2 min-[700px]:pr-14 items-center'>

                <Heading heading='Explore' />

                <div>
                    <input type='text' className={`outline-none border-2 border-gray-500 rounded-full px-3 py-1 min-[700px]:py-1.5 w-[200px] min-[700px]:w-[300px] bg-white focus:border-yellow-500 focus:shadow-[0_0_1px_4px_#ffe8b0] caret-yellow-500 ${nunito_sans.className} font-[500] text-gray-800 max-[699px]:text-[14px] mt-5`} placeholder="🔍 Search projects" />
                </div>

            </div>
            
            <ul className='grid grid-cols-1 min-[700px]:grid-cols-2 min-[700px]:gap-x-6 gap-y-6 px-4 min-[700px]:px-10 mt-6'>
                {loading
                ?
                <span>Loading...</span>
                :
                <>
                    {error
                    ?
                    <span>Oops! Something went wrong</span>
                    :
                    <>
                        {data.map(row => (
                            <ProjectCard key={row.id} data={row} />
                        ))}
                    </>
                    }
                </>
                }
            </ul>
        </>
    )
}
export default Explore;