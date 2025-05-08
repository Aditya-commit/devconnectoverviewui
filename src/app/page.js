'use client';

import { useState , useEffect } from "react";
import { useRouter , useSearchParams } from "next/navigation";
import { validate } from 'uuid';



import Heading from "./components/heading";
import Explore from "./components/home/explore_container";
import MyProjectList from "./components/home/my_projects";
import ModalContainer from "./components/modal_container";
import Container from "./components/add_project/container";
import PopupFeedback from "./components/feedback/popup_view";



import Plus from "./icons/plus";



import { nunito_sans } from "./fonts/nunito_sans";





export default function Home() {

  const [addPopup , setAddPopup] = useState(false);
  const [feedbackId , setFeedbackId] = useState(null)


  const searchParams = useSearchParams();
  const router = useRouter();




  const toggleAddPopup = () => router.push('?add_project=true' , { scroll : false })


  useEffect(()=> {

    searchParams.get('add_project') === 'true' ? setAddPopup(true) : setAddPopup(false);

    (searchParams.get('feedback') && validate(searchParams.get('feedback'))) ? setFeedbackId(searchParams.get('feedback')) : setFeedbackId(null);

  }, [searchParams]);
  


  return (
    <>
      <div className='grid grid-cols-[1fr_max-content] items-center pr-2 min-[700px]:pr-20'>
        <Heading heading='Recent Projects' />
        <button className={`text-white bg-yellow-600 hover:bg-[#ee9700] rounded px-5 py-2.5 text-[13px] min-[700px]:text-[15px] mt-6 min-[700px]:mt-10 ${nunito_sans.className} font-[700] flex items-center gap-x-2 transition-color duration-200 ease-in-out`} onClick={toggleAddPopup}>
          <Plus style='text-[15px] text-white' />
          <span className='max-[699px]:hidden'>Add Project</span>
          <span className='min-[700px]:hidden'>Project</span>
        </button>
      </div>

      <MyProjectList />

      <Explore />

      {addPopup && (
        <ModalContainer heading='Add Project'>
          <Container />
        </ModalContainer>
      )}

      {feedbackId && (
        <ModalContainer heading='Feedbacks'>
          <PopupFeedback id={feedbackId} />
        </ModalContainer>
      )}
    </>
  );
}
