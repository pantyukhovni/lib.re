import c from './App.module.css';
import Content from "./components/mainContant/Contant";
import HeaderContainer from "./components/header/HeaderContainer";

const App = () => {
    return (
        <div className={c.wrapper}>
            <HeaderContainer/>
            <Content/>
        </div>
    );
}

export default App;
