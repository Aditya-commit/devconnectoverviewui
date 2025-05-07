'use client'

import { useEffect } from 'react';


import BottomOption from "@/app/components/authform/bottom_option";
import AuthHeading from "@/app/components/authform/heading";
import AuthInput from "@/app/components/authform/input";
import InputContainer from "@/app/components/authform/input_container";
import SubmitButton from "@/app/components/authform/submit_button";


import Login from "@/app/icons/login";
import User from "@/app/icons/user";
import CloseEye from "@/app/icons/close_eye";




import { useFormSubmit } from "@/app/customHooks/useformSubmit";




const INITIAL_DATA = { username : '', password : '' };



const SignIn = () => {


	const { loading , data , response , error , onChange , submitForm } = useFormSubmit('auth/signin' , INITIAL_DATA);


	useEffect(() => {
		response?.status === 200 && window.location.replace('/')
 	} , [response])


	return(
		<>
			<AuthHeading heading='Welcome !' subHeading='Sign In to your account' Icon={Login} />
			<InputContainer>
				<AuthInput type='username' name='username' placeholder='Enter username' Icon={User} value={data.username} onChange={onChange}  />
				<AuthInput type='password' name='password' placeholder='Enter password' Icon={CloseEye} value={data.password} onChange={onChange} />
				<SubmitButton loading={loading} text='SignIn' submitFunc={submitForm} />
				<BottomOption text="Don't have an account" url='/auth/signup' prettyText='Sign Up' />
				{error}
			</InputContainer>
		</>
	)
}
export default SignIn;