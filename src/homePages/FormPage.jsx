import React,{useContext} from 'react'
import FormStyle1 from '../components/shopComponent/FormStyle1';
import FormStyle2 from '../components/shopComponent/FormStyle2';
import FormStyle3 from '../components/shopComponent/FormStyle3';
import { SideBarContext } from '../context/SideBarState'
import Button from '../components/Button'

const FormPage = ({Data}) => {

  const {sideBar:{favoritesArray}} = useContext(SideBarContext)

  if(typeof(Data) === "undefined")
  {
    Data = favoritesArray.filter(data=>data.type==="form")
  }

  return (
    <>
    {
      Data 
      &&
      Data.map((form)=>
      {
        const {id,className,style} = form;
        switch(style){
          case"fo1":
            return  <div key={id} className="display-box">
                      <FormStyle1 className={className}/>
                      <Button/>
                    </div>
          case"fo2":
            return  <div key={id} className="display-box">
                      <FormStyle2 className={className}/>
                      <Button/>
                    </div>
          case"fo3":
           return  <div key={id} className="display-box">
                     <FormStyle3 className={className}/>
                     <Button/>
                   </div>          
          default:
            return  <div key={id} className="display-box">
                      <FormStyle1 className={className}/>
                      <Button/>
                    </div> 
        }
      })
    }
    </>
  )
}

export default FormPage
