'use client';

import { useState } from 'react';


import FeedbackListContainer from "./list_container"
import CommentBox from "./comment_box"


import { nunito_sans } from "@/app/fonts/nunito_sans"


const ProjectFeedbackContainer = ({id}) => {

    const [refreshKey ,setRefreshKey] = useState(0);

    const refreshList = () => setRefreshKey(refreshKey+1);

    const [count , setCount] = useState(null);

    const updateCount = fcount => setCount(fcount);

    return(
        <div className='w-full max-[799px]:max-h-screen min-[800px]:h-[calc(100vh-130px)] sticky min-[800px]:top-[100px] min-[800px]:px-6 min-[800px]:pt-4 max-[799px]:z-10'>
            <div className='grid grid-rows-[max-content_1fr_max-content] gap-y-2 border-2 border-gray-500 h-full min-[800px]:rounded-xl overflow-hidden'>
                <header className='min-[800px]:sticky min-[800px]:top-0 grid grid-cols-[1fr_max-content] items-center gap-x-2 px-6 py-3 bg-black border-b border-gray-300 bg-[#fbfbfb]'>
                    <h4 className={`${nunito_sans.className} text-lg font-[700] text-white`}>Feedbacks</h4>
                    <span className={`text-yellow-600 ${nunito_sans.className} font-[700] text-[17px]`}>{count}</span>
                </header>
                <ol className="overflow-y-auto flex flex-col gap-y-3 py-2 editor_scroll mr-1">
                    <FeedbackListContainer key={refreshKey} id={id} count={true} updateCount={updateCount} />
                </ol>


                {/* TEXT EDITOR */}
                <div className='min-[800px]:px-2 flex flex-col py-2'>
                    <CommentBox id={id} refreshList={refreshList} />
                </div>
                {/* TEXT EDITOR */}

            </div>
        </div>
    )
}
export default ProjectFeedbackContainer;