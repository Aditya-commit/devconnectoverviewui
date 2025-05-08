'use client';

import { useState , useEffect } from 'react';


import NetworkNotifier from '../components/network_notifier';
import ExclamationCircle from '../icons/exclamation_circle';






export const useGetData = (url) => {

    const [loading , setLoading] = useState(true);
    const [data , setData] = useState([]);
    const [error , setError] = useState(null);




    const resetError = () => setError(null);


    const fetchData = () => {

        fetch(`${process.env.NEXT_PUBLIC_REMOTE_BACKEND_URL}/${url}` , {
            method : 'get',
            credentials : 'include'
        })
        .then(res => {
            const statusCode = res.status;
            const contentType = res.headers.get('Content-Type');

            switch(statusCode){

                case 200:

                    return res.json().then(data => ({statusCode : statusCode , 'data' : data})).catch(error => ({statusCode : 500 , 'error' : 'Oops! Something went wrong' }))

                    break;

                default:

                    if(/text\/plain/.test(contentType)){

                        return res.text().then(msg => ({statusCode : statusCode , 'error' : msg })).catch(error => ({statusCode : 500 , 'error' : "Oops! Something went wrong"}));
                    }
                    else{

                        return { statusCode : 500 , 'error' : "Oops! Something went wrong"};
                    }
            }
        })
        .then(({statusCode , data , error}) => {

            switch(statusCode){
                
                case 200:

                    setData(data);

                    break;

                default:
                    setError({status : statusCode , error : error})
                }
                
            })
        .catch(error => {
                
            setError({status : statusCode , error : error})
        
        })
        .finally(() => setLoading(false));
    }



    useEffect(()=> fetchData(),[]);


    return {
        loading,
        data,
        error,
        fetchData
    }
}