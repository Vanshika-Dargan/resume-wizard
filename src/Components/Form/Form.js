import Contact from './Contact'
import Education from './Education/Education';
import Work from './Work/Work';
import Skills from './Skills/Skills'
import InteractiveList from './Skills/Listitems'
import { useState } from 'react';
const Form=()=>{
        const [contact,setContact]=useState({
            firstName:'',
            lastName:'',
            profession:'',
            city:'',
            country:'',
            pincode:'',
            phoneNo:'',
            email:''
        });
        const [education,setEducation]=useState({
            school:'',
            location:'',
            degree:'',
            field:'',
            startYear:'',
            endYear:''
        });
        const [work,setWork]=useState({
            title:'',
            organization:'',
            city:'',
            country:'',
            startDate:'',
            endDate:''
        });
    return(
        <div>
            {/* <Contact contact={contact} setContact={setContact} /> */}
            {/* <Education education={education} setEducation={setEducation}/> */}
            <Work work={work} setWork={setWork}/>
            {/* <Skills/> */}
        </div>
    )
}
export default Form;