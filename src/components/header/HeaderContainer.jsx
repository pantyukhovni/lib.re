import {connect} from "react-redux";
import Header from "./Header";


const HeaderContainer = (props)=>{
    return(
        <>
            <Header />
        </>
    )
}



export default connect()(HeaderContainer);