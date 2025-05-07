'use client';

import { useState , useEffect } from "react";
import { useRouter , usePathname } from "next/navigation";



import Logo from "../icons/logo";
import { nunito_sans } from "../fonts/nunito_sans";
import ExclamationTriangle from "../icons/exclamation_triangle";



const AppWrapper = ({children}) => {

    const [loading , setLoading] = useState(true);
    const [userId , setUserId] = useState(null);
    const [error , setError] = useState(null);


    const router = useRouter();
    const pathname = usePathname();


    useEffect(()=>{


        fetch(`${process.env.NEXT_PUBLIC_REMOTE_BACKEND_URL}/auth/authenticate`,{
            method : 'get',
            credentials : 'include'
        })
        .then(res => {
        
            const statusCode = res.status;
            const contentType = res.headers.get('Content-Type');

            if(statusCode === 200){

                return res.json()
                .then(data => ({contentType : contentType , msg : data.userId , statusCode : statusCode}))
                .catch(error => ({ 'msg' : 'Oops! Something went wrong' , statusCode : 500 }));
            }
            else{

                if(/text\/plain/.test('text/plain')){

                    return res.text()
                    .then(msg => ({contentType : contentType , 'msg' : msg , 'statusCode' : statusCode }))
                    .catch(error => ({ 'msg' : 'Oops! Something went wrong' , statusCode : 500 }))
                }
                else {

                    return { contentType : contentType , 'msg' : 'Oops! Something went wrong' , statusCode : 500 }
                }
            }
        })
        .then(({statusCode , msg}) => {

            switch(statusCode){

                case 400:
                case 405:
                case 404:
                case 504:

                    setError({msg});
                    break;

                case 401:

                    router.replace('/auth/signin');
                    break;

                case 200:

                    setUserId(msg);
                    setError(null);
                    
                    if(pathname === '/auth/signin' || pathname === '/auth/signin'){
                        router.replace('/');
                    }
                    
                    break;
                    
                default:
                    
                    setError(msg);  
            }
        })
        .catch(error => {
            setError('Oops! Something went wrong');
        })
        .finally(()=>{
            setLoading(false);
        });

    },[]);


    return(
        <>
            {loading
            ?
            <div className='h-screen w-full flex justify-center items-center gap-x-3'>
                <Logo style='text-6xl text-yellow-600' />
                <h1 className={`${nunito_sans.className} text-2xl font-[700] text-black`}>DevToConnect</h1>
            </div>
            :
            <>
                {error
                ?
                <div className={`w-full h-screen flex justify-center items-center`}>
                    <div className={`w-[80vw] sm:w-1/2 h-1/2 border border-gray-200 drop-shadow rounded-sm flex justify-center items-center`}>
                        <ExclamationTriangle style='text-3xl text-red-600' />
                        <h3>Oops! Something went wrong please try again</h3>
                    </div>
                </div>
                :
                <>
                    {children}
                </>
                }
            </>
            }
        </>
    )
}
export default AppWrapper;