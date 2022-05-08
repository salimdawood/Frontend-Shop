import React,{createContext,useState,useReducer,useEffect,useContext} from 'react'
import {SideBarContext} from '../context/SideBarState'
import ModalReducer from '../Reducer/ModalReducer';


export const ModalContext = createContext(false);

export const ModalProvider = ({children}) => {

  const[modalIsOpen,setModalisOpen] = useState(false);

  const[sheets,dispatch] = useReducer(ModalReducer,[],()=>{
      const localData = localStorage.getItem('sheets');
      return localData? JSON.parse(localData) : [] 
  });

  const {sideBar:{cssDiv}} = useContext(SideBarContext)

  useEffect(()=>{
    try{
      localStorage.setItem('sheets',JSON.stringify(sheets))
    }catch(e){
      if(e.code===2)
      {
        window.alert('Changes can\'t be saved  due to full storage, please delete some sheets or properties...')
      }
    }
  },[sheets])

  //methods
  const toggleModal = ()=>{
    setModalisOpen(!modalIsOpen)
  }
  const getSheets = ()=>{
    var sheetArray = []
    sheets.forEach(sheet=>{
      sheetArray = [...sheetArray,{name:sheet.name,number:sheet.properties.length}]
    })
    sheetArray.sort(function(a, b){
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (nameA < nameB)
       return -1;
      if (nameA > nameB)
       return 1;
      return 0;
     });
    return sheetArray
  }
  const sheetArray = ()=>{
    const sheetArray = sheets
    sheetArray.sort(function(a, b){
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (nameA < nameB)
       return -1;
      if (nameA > nameB)
       return 1;
      return 0;
     });
    return sheetArray
  }
  const addSheet = (Sheetname)=>{
    dispatch({type:"ADD_SHEET",sheet:{name:Sheetname}})
  }
  const removeSheet = (Sheetname)=>{
    dispatch({type:"REMOVE_SHEET",sheet:{name:Sheetname}})
  }
  const updateSheet = (Sheetname)=>{
    dispatch({type:"ADD_PROPERTY_TO_SHEET",sheet:{name:Sheetname,property:[...cssDiv]}})
  }
  const removeFromSheet = (Sheetname,property)=>{
    dispatch({type:"REMOVE_PROPERTY_FROM_SHEET",sheet:{name:Sheetname,property:property}})
  }

  return (
    <ModalContext.Provider value={
      {toggleModal,modalIsOpen,getSheets,addSheet,removeSheet,updateSheet,removeFromSheet,sheetArray}
      }>
      {children}
    </ModalContext.Provider>
  )
}