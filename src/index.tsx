import ReactDOM from "react-dom";
import UserSearch from "./classes/UserSearch";


const App = () =>{
    return( <div>
        <UserSearch/>
    </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));
