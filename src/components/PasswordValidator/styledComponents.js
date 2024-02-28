import styled from 'styled-components'

export const BgContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color:#24263c;
    min-height: 100vh;

`
export const ValidateContainer = styled.div`
  
   width: 90%;
   flex-grow:1;
   margin:auto;
   display:flex;
   justify-content:center;
   align-items: center;


`
export const FormContainer = styled.div`
      
      width: 90%;
      max-width:350px;
      background-color:#475569;
      border-radius: 10px;
      padding: 25px 20px;
      border-radius:6px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
     @media (min-width:700px){
          max-width: 450px;
        height: 350px;
     }
  `

export const FormHeading = styled.h1`

    font-family: "Roboto";
    font-size:18px;
    color: white;
    @media (min-width:700px){
        font-size:30px;
    }
 
 `

export const Formdescription = styled.p`
     font-family: "Roboto";
     font-size:12px;
     color:  #edeeff;
     text-align:center;
    @media (min-width:700px){
       font-size:14px;
    }
`
export const InputFiled = styled.input`

   width : 90%;
   padding: 12px;
   margin-top: 20px;
   outline:none;


 `

export const ErrorMessage = styled.p`
   
     font-family: "Roboto";
     font-size: 12px;
     margin-top:6px;
     color: #ef4444;
 
 `
