'use client';

import { useGetData } from "@/app/customHooks/useGetData";



import FeedbackList from "./list";
import { useEffect } from "react";




const FeedbackListContainer = ({id , count , updateCount}) => {


    const { loading , data , error } = useGetData(`feedback/${id}${count === true ? '?count=true' : ''}`);

    useEffect(()=>{

        if(count && !loading){   
            if(data){
                data.length === 0 ? updateCount(0) : data[0]?.fcounts && updateCount(data[0].fcounts);
            }
        }
    
    },[loading , data])

    return(
        <>
            {loading
            ?
            <span>Loading...</span>
            :
            <>
                {error
                ?
                <span>Error occured</span>
                :
                <>
                    {data.map((row , index) => (
                        <FeedbackList key={index} data={row} />
                    ))}
                </>
                }
            </>
            }
        </>
    )
}
export default FeedbackListContainer;