import DemoLifeCycle from "../../components/lifecycle/DemoLifeCycle";
import Sidebar from "../../components/sidebar/Sidebar";
import Wrapper from "../../components/wrapper/Wrapper";

const Home = props => {
    return (
        <div>
            {/* <h1>Home Page</h1>
            <DemoLifeCycle /> */}
            <Sidebar />
            <Wrapper />
        </div>
    )
}

export default Home;