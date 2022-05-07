const ModalRaducer = (state,action)=>{
  var outerIndex
  var innerIndex
  var newPropertiesArray

  switch(action.type){
    case 'ADD_SHEET':
      return [...state,{
        name:action.sheet.name,
        properties:[]
      }]
    case 'REMOVE_SHEET':
      return state.filter(sheet=>sheet.name !== action.sheet.name)
    case 'ADD_PROPERTY_TO_SHEET':
      outerIndex = state.findIndex(sheet=>sheet.name === action.sheet.name)
      newPropertiesArray = [...state[outerIndex].properties]

      action.sheet.property.forEach(propertyText => {
        innerIndex = state[outerIndex].properties.findIndex(property=>property===propertyText)
        if(innerIndex === -1)
        {
          newPropertiesArray.push(propertyText)
        }
      });
      
      state[outerIndex].properties = [...newPropertiesArray]
      return [...state]
    case 'REMOVE_PROPERTY_FROM_SHEET':
      
      outerIndex = state.findIndex(sheet=>sheet.name === action.sheet.name)
      state[outerIndex].properties = state[outerIndex].properties.filter(prop=>prop[0] !== action.sheet.property[0])

      return  [...state]
    default:
      return state;
  }
}

export default ModalRaducer