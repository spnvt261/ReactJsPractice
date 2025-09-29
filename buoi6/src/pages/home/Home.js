import DemoClassComponent from "../../components/DemoClassComponent";
import DemoLifeCycle from "../../components/lifecycle/DemoLifeCycle";
import Sidebar from "../../components/sidebar/Sidebar";
import Wrapper from "../../components/wrapper/Wrapper";
import "./Home.css"
const Home = props => {
    return (
        <div className="home-page">
            {/* <h1>Home Page</h1> */}
            {/* <DemoLifeCycle/> */}
            {/* <DemoClassComponent/> */}
            <Sidebar/>
            <Wrapper/>
        </div>
    )
}

export default Home;