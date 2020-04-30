import {connect} from 'react-redux'
import Navbar from './Navbar';
import {addFriends,updateNewNameText} from '../../redux/sidebarReducer'



const mapStateToProps=(state)=>{
    return{
        sidebar:state.sidebar
      }
}

const mapDispatchToProps=(dispatch)=>{
    return{
      addFriends:()=>{
        dispatch(addFriends()) 
      },
      updateNewName:(newName)=>{
        dispatch(updateNewNameText(newName))
      }
    }
}


const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar)

export default NavbarContainer;