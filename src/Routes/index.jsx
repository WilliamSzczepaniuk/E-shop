import { Switch , Route } from 'react-router-dom'
import CartPage from '../Pages/PageCart'
import PageHome from '../Pages/PageHome'


const Routes = () => {

    return(
        <Switch>
            <Route exact path='/'>
                <PageHome/>
            </Route>
            <Route exact path='/cart'>
                <CartPage/>
            </Route>
        </Switch>
    )

}
export default Routes