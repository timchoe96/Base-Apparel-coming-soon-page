import React,{useState} from 'react';
import arrow from './images/icon-arrow.svg';
import error from './images/icon-error.svg';


const Email = () => {
    const [initial,setInitial] = useState({
        email:'',
        message:'',
        image:''
      })
      
      

      function emailType(event){
        const {value} = event.target; 
        setInitial({
            email:value,
            message:'',
            image:''
        })
          }
          


          const onSubmit = () => {
            if (initial.email.includes('@') === false || initial.email === ''){
              setInitial(prevValue =>{
                return {...prevValue,
                message:'Please provide a valid email',
                image:error
                }
            })
            }else{
              setInitial({
                email:'',
                message:'',
                image:''
              })
            }
          }

    return(
        <div>
  <div className='emailContainer'>
            <div className='inputText'>
            <input className='textField' value={initial.email} onChange={emailType} type='email' placeholder='Email Address'></input>
            </div>
            
            <input onClick={onSubmit} className='arrow' type='image' src={arrow} alt='arrow'/> 
            <img className='errorImage' src={initial.image} alt=''></img>
        </div>
        <p className ='errorMessage' style={{color:'hsl(0, 86%, 77%)'}}>{initial.message}</p>
        </div>
      
    )
}



export default Email;