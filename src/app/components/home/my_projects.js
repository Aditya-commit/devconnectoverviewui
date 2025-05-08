import PropTypes from 'prop-types';
import ProjectCard from '../project_card';




import { useGetData } from '@/app/customHooks/useGetData';





const MyProjectList = () => {

    const { loading , data , error} = useGetData('projects/my_projects?recent=true');

    return(

        <>
            <div className='mt-10 w-full overflow-x-auto overflow-y-hidden px-4 min-[700px]:px-10' style={{whiteSpace : 'nowrap'}}>
                <ol className='flex overflow-x-auto w-full gap-x-2 min-[700px]:gap-x-3 gap-y-3 editor_scroll max-[640px]:editor_scroll-mozilla'>

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
                                <li className='w-full min-[700px]:w-[600px] shrink-0' key={row.id}><ProjectCard data={row} /></li>
                            ))}
                        </>
                        }
                    </>
                    }
                </ol>
            </div>
        </>
    )
}
export default MyProjectList;