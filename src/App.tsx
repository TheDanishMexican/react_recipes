import { Route, Routes } from 'react-router-dom'
import { Categories } from './recipes/Categories'
import Recipe from './recipes/Recipe'
import RecipeForm from './recipes/RecipeForm'
import Login from './security/Login'
import Layout from './Layout'
import Home from './Home'
import './App.css'
import RecipesLayout from './recipes/RecipesLayout'
import Logout from './security/Logout'
import RequireAuth from './security/RequireAuth'
import CategoryForm from './categories/CategoryForm'

export default function App() {
    //const auth = useAuth();
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories/" element={<Categories />} />
                <Route path="/recipes" element={<RecipesLayout />}>
                    <Route path=":id" element={<Recipe />} />
                </Route>
                <Route
                    path="/add"
                    element={
                        <RequireAuth roles={['USER']}>
                            <RecipeForm />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/create"
                    element={
                        <RequireAuth roles={['ADMIN']}>
                            <CategoryForm />
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<h2>Not Found</h2>} />
            </Routes>
        </Layout>
    )
}
