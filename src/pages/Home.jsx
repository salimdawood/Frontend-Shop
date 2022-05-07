import React,{useState,useEffect,useContext} from 'react'
import Filter from '../components/Filter'
import DataFile from '../json/Elements.json'
import ButtonPage from '../homePages/ButtonPage'
import CardPage from '../homePages/CardPage'
import FooterPage from '../homePages/FooterPage'
import FormPage from '../homePages/FormPage'
import SideBar from '../components/SideBar'
import {SideBarContext}  from '../context/SideBarState'



const Home = () => {

  const{sideBar:{toggle}} = useContext(SideBarContext)
  const[filtered,setFiltered] = useState([])
  const[dataType,setDataType]=useState('button')

  useEffect(() => {
    const shopData = DataFile
    switch(dataType){
      case"button":
        setFiltered([...shopData.filter(data=>data.type==="button")])
        return;
      case"card":
        setFiltered([...shopData.filter(data=>data.type==="card")])
        return;
        case"footer":
        setFiltered([...shopData.filter(data=>data.type==="footer")])
        return;
      case"form":
        setFiltered([...shopData.filter(data=>data.type==="form")])
        return;
      default:
        return;
    } 
  }, [dataType])

  return (
    <>
      <div className="home-page">
        <Filter
        dataType={dataType} 
        setDataType={setDataType}
        />
        <div className="home-show">
          {dataType==='button' && <ButtonPage Data={filtered}/>}
          {dataType==='card' && <CardPage Data={filtered}/>}
          {dataType==='form' && <FormPage Data={filtered}/>}
          {dataType==='footer' && <FooterPage Data={filtered}/>}
        </div>
      </div>
      {toggle && <SideBar/>}
    </>
  )
}

export default Home