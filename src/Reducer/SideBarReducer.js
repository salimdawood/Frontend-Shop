import ElementsJson from '../json/Elements.json'

const SideBarReducer = (state,action)=>{
  var index=-1
  switch(action.type){
    case 'SHOW_SIDEBAR':

      return {
        ...state,
        htmlDiv:action.element.outerHTML.replace(/src=".+?"/i,"src=\"photopath.extension\""),
        className:action.element.className,
        cssDiv : state.cssData.filter(styleProperty=>
          styleProperty[0].includes("."+action.element.className+" ") ||
          styleProperty[0].includes("."+action.element.className+":") ||
          styleProperty[0] === "."+action.element.className
          ),
        toggle:true
      };
    case 'HIDE_SIDEBAR':
      return {
        ...state,
        toggle:false
      };
    case 'ADD_FAVORITE':
      index = state.favoritesArray.findIndex(element=>element.className===state.className)
      if(index!==-1)
      {
        return state;
      }
      const element = ElementsJson.find(element=>element.className===state.className)
      return {
        ...state,
        favoritesArray:[...state.favoritesArray,element]
      };
    case 'REMOVE_FAVORITE':
      index = state.favoritesArray.findIndex(element=>element.className===state.className)
      return {
        ...state,
        favoritesArray:[...state.favoritesArray.slice(0, index), ...state.favoritesArray.slice(index + 1)]
      };
    default:
      return state;
  }
}

export default SideBarReducer