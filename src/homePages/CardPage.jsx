import React,{useContext} from 'react'
import CardStyle1 from '../components/shopComponent/CardStyle1';
import CardStyle2 from '../components/shopComponent/CardStyle2';
import CardStyle3 from '../components/shopComponent/CardStyle3';
import CardStyle4 from '../components/shopComponent/CardStyle4';
import { SideBarContext } from '../context/SideBarState'
import Button from '../components/Button';
const CardPage = ({Data}) => {

  const {sideBar:{favoritesArray}} = useContext(SideBarContext)
  if(typeof(Data) === "undefined")
  {
    Data = favoritesArray.filter(data=>data.type==="card")
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
                case"c1":
                return  <div key={id} className="display-box">
                          <CardStyle1 className={className}/>
                          <Button/>
                        </div>
                case"c2":
                return  <div key={id} className="display-box">
                          <CardStyle2 className={className}/>
                          <Button/>
                        </div>
                case"c3":
                return  <div key={id} className="display-box">
                          <CardStyle3 className={className}/>
                          <Button/>
                        </div>
                case"c4":
                return  <div key={id} className="display-box">
                          <CardStyle4 className={className}/>
                          <Button/>
                        </div>
                default:
                return  <div key={id} className="display-box">
                          <CardStyle1 className={className}/>
                          <Button/>
                        </div>
              }
          })       
      }
  
    </>
  )
}

export default CardPage
