import React,{useContext,useState} from 'react'
import ButtonPage from '../homePages/ButtonPage'
import CardPage from '../homePages/CardPage'
import FooterPage from '../homePages/FooterPage'
import FormPage from '../homePages/FormPage'
import SideBar from '../components/SideBar'
import Filter from '../components/Filter'
import { SideBarContext } from '../context/SideBarState'


const MyCss = () => {
  
  const {sideBar:{toggle}} = useContext(SideBarContext)
  const[dataType,setDataType]=useState('button')

  return (
    <>
      <div className="home-page">
        <Filter
        dataType={dataType} 
        setDataType={setDataType}
        />
        <div className="home-show">
          {dataType==='button' && <ButtonPage/>}
          {dataType==='card' && <CardPage/>}
          {dataType==='form' && <FormPage/>}
          {dataType==='footer' && <FooterPage/>}
        </div>
      </div>
      {toggle && <SideBar/>}
    </>
  )
}

export default MyCss