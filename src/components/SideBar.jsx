import React,{useContext} from 'react'
import { SideBarContext } from '../context/SideBarState'
import { Star,Add,Close,Copy } from '../components/Svg'
import { ModalContext } from '../context/Modal'

const SideBar = () => {

  //side bar information and state
  const {sideBar,hideSideBar,addToFavorites,removeFromFavorites} = useContext(SideBarContext)
  //favorites button manage
  const settings = sideBar.favoritesArray.filter(element=>element.className===sideBar.className).length>0?
  {function:removeFromFavorites,bg:'btn btn-pressed'}:
  {function:addToFavorites,bg:'btn'}
  //sheets modal pop-up information and state 
  const {toggleModal} = useContext(ModalContext)

  return (
    <div className="side-bar-container">
      <div className="title">
            <p>Selected Element</p>
            <Close onClick={hideSideBar}/>
      </div>
      <div className="side-bar">
          <div className="code">
            <h3>Html code</h3>
            <code>{sideBar.htmlDiv}</code>
            <Copy text={sideBar.htmlDiv}/>
          </div>
          <div className="code">
            <h3>Css code</h3>
            <code className="css-code">
              {sideBar.cssDiv.map(cssClass=>{
                return <p>{cssClass}</p>
              })}
            </code>
            <Copy text={sideBar.cssDiv.flat().join('\n')}/>
          </div>
      </div>
      <div className="button-container">
            <button onClick={settings.function} className={settings.bg}>
              Favorites
              <Star/>
            </button>
            <button onClick={toggleModal} className="btn">
              Sheets
              <Add/>
            </button>
          </div>
    </div>
  )
}

export default SideBar
