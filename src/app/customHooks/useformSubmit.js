'use client'


import { useState } from 'react';


import LoginError from '../components/authform/login_error';

import ExclamationCircle from '../icons/exclamation_circle';



export const useFormSubmit = (url , initialData) => {

    const [loading , setLoading] = useState(false);
    const [response , setResponse] = useState(null);
    const [error , setError] = useState(null);



    const [data , setData] = useState(initialData);




    const onChange = ({target : { name , value }}) => setData(prevData => ({...prevData , [name] : value}));



    const submitForm = () => {

        const formData = new FormData();
        

        Object.keys(data).map(key => {

            formData.append(key , data[key]);
        });


        setLoading(true);

        fetch(`${process.env.NEXT_PUBLIC_REMOTE_BACKEND_URL}/${url}` , {
            method : 'post',
            body : formData,
            credentials : 'include'
        })
        .then(res => {

            const statusCode = res.status;
            const contentType = res.headers.get('Content-Type');

            if(statusCode === 200){

                return { contentType : contentType , 'msg' : 'Ok' , statusCode : statusCode }
            }
            else{

                if(/text\/plain/.test('text/plain')){

                    return res.text()
                    .then(msg => ({contentType : contentType , 'msg' : msg , 'statusCode' : statusCode }))
                    .catch(error => ({ 'msg' : 'Oops! Something went wrong' , statusCode : 500 }))
                }
                else{

                    return { contentType : contentType , 'msg' : 'Oops! Something went wrong' , statusCode : 500 }
                }
            }
        })
        .then(({statusCode , msg}) => {

            switch(statusCode){
                
                case 401:
                case 400:
                case 405:
                case 404:
                case 504:

                    setError(<LoginError bgColor='bg-yellow-100' Icon={<ExclamationCircle style='text-yellow-600 text-lg' />}><span className='text-yellow-600 text-[15px] font-semibold font-nunito-sans'>{msg}</span></LoginError>);
                    break;
                    
                case 200:

                    setResponse({status : statusCode , msg : msg});

                    setData(initialData); // RESET THE FORM UPON COMPLETION

                    break;
                    
                    
                default:
                    
                    setError(<LoginError bgColor='bg-red-100' Icon={<ExclamationCircle style='text-red-600 text-lg' />}><span className='text-red-600 text-[15px] font-semibold font-nunito-sans'>{msg}</span></LoginError>);  
            }
        })
        .catch(error => {
            setError(<LoginError bgColor='bg-red-100' Icon={<ExclamationCircle style='text-red-600 text-lg' />}><span className='text-red-600 text-[15px] font-semibold font-nunito-sans'>Oops! Something went wrong</span></LoginError>);
        })
        .finally(()=>{
            setLoading(false);
        });
    }

    return { 
        loading,
        response,
        data,
        error,
        onChange,
        submitForm
    }
}