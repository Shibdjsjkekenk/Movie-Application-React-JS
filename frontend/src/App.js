import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TopRated from './components/TopRated'
import UpcomingMovie from './components/UpcomingMovie'
import SingleMovie from './components/SingleMovie'
import SearchResults from './components/SearchResults'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/toprated',
    element: <TopRated/>
  },
  {
    path: '/upcoming',
    element: <UpcomingMovie/>
  },
  {
    path: '/single/:id',
    element: <SingleMovie/>
  },
  {
    path: '/search-results',
    element: <SearchResults/>
  },

])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App