import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";

const GroupLinks = styled.div`
    a{
        color: #fff;
        text-decoration:none;
        display:block;
        padding: 5px 10px;
        &:hover{
            color:orange;
        }
        &.active{
            color:blue;
        }
    }
`
const CustomLinks = props =>{
    // console.log(props);
    
    return(
        <GroupLinks>
            {
                props.menuLinks.map((item,index)=>{
                    // console.log(props.location.pathname);
                    let active = false;
                    if(props.location.pathname == item.path){
                        active = true;
                    }
                    return(
                        <Link key={index} to={item.path} 
                            className={active?'active':''}
                        >
                            <span>{item.text}</span>
                        </Link>
                    )
                })
            }
        </GroupLinks>
    )
}
// export default CustomLinks ;
export default withRouter(CustomLinks) ;