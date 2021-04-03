import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Question from './Question';
import Administrator from './Administrator';

const App = () => {
    return(
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path='/'>
                        <Question />
                    </Route>
                    <Route path='/administrator'>
                        <Administrator />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;