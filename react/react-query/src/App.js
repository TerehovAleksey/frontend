import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {SuperHeroesPage} from "./components/SuperHeroes.page";
import {RQSuperHeroesPage} from "./components/RQSuperHeroes.page";
import {HomePage} from "./components/Home.page";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/super-heroes'>Traditional Super Heroes</Link>
                            </li>
                            <li>
                                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path='/super-heroes'>
                            <SuperHeroesPage/>
                        </Route>
                        <Route path='/rq-super-heroes'>
                            <RQSuperHeroesPage/>
                        </Route>
                        <Route path='/'>
                            <HomePage/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default App;
