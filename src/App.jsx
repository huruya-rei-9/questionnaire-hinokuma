import {BrowserRouter, Switch, Route, HashRouter} from 'react-router-dom';
import Question from './Question';
import Administrator from './Administrator';

const App = () => {
    return(
        <>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path='/'>
                        <Question />
                    </Route>
                    <Route path='/administrator'>
                        <Administrator />
                    </Route>
                </Switch>
            </HashRouter>
        </>
    )
}

export default App;