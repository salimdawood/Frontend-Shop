import React,{useContext} from 'react'
import FooterStyle1 from '../components/shopComponent/FooterStyle1';
import FooterStyle2 from '../components/shopComponent/FooterStyle2';
import FooterStyle3 from '../components/shopComponent/FooterStyle3';
import { SideBarContext } from '../context/SideBarState'
import Button from '../components/Button'

const FooterPage = ({Data}) => {

  const {sideBar:{favoritesArray},showSideBar} = useContext(SideBarContext)

  if(typeof(Data) === "undefined")
  {
    Data = favoritesArray.filter(data=>data.type==="footer")
  }

  return (
    <>
    {
      Data 
      &&
      Data.map((footer)=>
      {
        const {id,className,style} = footer;
        switch(style){
          case"f1":
            return  <div key={id} className="display-box flex-full">
                      <FooterStyle1 className={className}/>
                      <Button/>
                    </div>
          case"f2":
            return  <div key={id} className="display-box flex-full">
                      <FooterStyle2 className={className}/>
                      <Button/>
                    </div>
          case"f3":
          return  <div key={id} className="display-box flex-full">
                    <FooterStyle3 className={className}/>
                    <Button/>
                  </div>
          default:
            return  <div key={id} className="display-box flex-full">
                      <FooterStyle1 className={className}/>
                      <button onClick={(e)=>showSideBar(e)}>Get the src code</button>
                    </div> 
        }
      })
    }
    </>
  )
}

export default FooterPage
