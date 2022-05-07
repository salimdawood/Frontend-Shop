import React,{useContext} from 'react'
import ButtonStyle1 from '../components/shopComponent/ButtonStyle1';
import ButtonStyle2 from '../components/shopComponent/ButtonStyle2';
import { SideBarContext } from '../context/SideBarState'
import Button from '../components/Button';

const ButtonPage = ({Data}) => {

  const {sideBar:{favoritesArray}} = useContext(SideBarContext)

  if(typeof(Data) === "undefined")
  {
    Data = favoritesArray.filter(data=>data.type==="button")
  }

  return (
    <>
    {
      Data 
      &&
      Data.map((card)=>
      {
        const {id,className,style} = card;
        switch(style){
          case"b1":
            return  <div key={id} className="display-box">
                      <ButtonStyle1 className={className}/>
                      <Button/>
                    </div>
          case"b2":
            return  <div key={id} className="display-box">
                      <ButtonStyle2 className={className}/>
                      <Button/>
                    </div>
          default:
            return  <div key={id} className="display-box">
                      <ButtonStyle1 className={className}/>
                      <Button/>
                    </div> 
        }
      })
    }
    </>
  )
}

export default ButtonPage
