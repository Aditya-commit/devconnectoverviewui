'use client'


import { useEffect } from "react";


import BottomOption from "@/app/components/authform/bottom_option";
import AuthHeading from "@/app/components/authform/heading";
import AuthInput from "@/app/components/authform/input";
import InputContainer from "@/app/components/authform/input_container";
import SubmitButton from "@/app/components/authform/submit_button";


import UserFill from "@/app/icons/user_fill";
import User from "@/app/icons/user";
import Book from "@/app/icons/book";
import CloseEye from "@/app/icons/close_eye";




import { useFormSubmit } from "@/app/customHooks/useformSubmit";





const INITIAL_DATA = { username : '', name : '' , password : '' };



const SignUp = () => {

	const { loading , data , response , error , onChange , submitForm } = useFormSubmit('auth/signup' , INITIAL_DATA);
	
	
	useEffect(() => {
		response?.status === 200 && window.location.replace('/')
	} , [response]);

	return(
		<>
			<AuthHeading heading='Create Account' Icon={UserFill} />
			<InputContainer>
				<AuthInput type='text' name='username' placeholder='Enter username' Icon={User} value={data.username} onChange={onChange} />
				<AuthInput type='text' name='name' placeholder='Enter name' Icon={Book} value={data.name} onChange={onChange} />
				<AuthInput type='password' name='password' placeholder='Enter password' Icon={CloseEye} value={data.password} onChange={onChange} />
				<SubmitButton loading={loading} text='SignUp' submitFunc={submitForm} />
				<BottomOption text="Already have an account" url='/auth/signin' prettyText='Sign In' />
				{error}
			</InputContainer>
		</>
	);
}
export default SignUp;