import React from 'react'
import { createContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './routes'
import { DefaultLayout, DefaultMobileLayout } from '~/layouts'
import { Fragment, useContext, useEffect, useReducer, useState } from 'react'
import { Store } from './Store'
import { useMediaQuery } from 'react-responsive'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getGameList } from '~/services/gameService'

const gamesInit = [
  { key: 'casinos', type: 'LC', dispatchType: 'GET_CASINOS' },
  { key: 'sports', type: 'SB', dispatchType: 'GET_SPORTS' },
  { key: 'slots', type: 'SL', dispatchType: 'GET_SLOTS' },
  { key: 'fishings', type: 'FH', dispatchType: 'GET_FISHINGS' },
  { key: 'eSports', type: 'ES', dispatchType: 'GET_E_SPORTS' },
  //{ key: 'boardGames', type: 'BG', dispatchType: 'GET_BOARD_GAMES' },
  { key: 'lotteries', type: 'LT', dispatchType: 'GET_LOTTERIES' },
  /* { key: 'kenos', type: 'KN', dispatchType: 'GET_KENOS' },
  { key: 'virtualSports', type: 'VS', dispatchType: 'GET_VIRTUAL_SPORTS' },
  { key: 'pokers', type: 'PK', dispatchType: 'GET_POKERS' },
  { key: 'cockFightings', type: 'CF', dispatchType: 'GET_COCK_FIGHTINGS' },
  { key: 'others', type: 'OT', dispatchType: 'GET_OTHERS' }, */
]

/* export const ActiveTabContext = createContext({
  activeTab : '',
  setActiveTab: ()=>''
})
 */
function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
  const basename = process.env.NODE_ENV === 'development' ? '/' : '/dev/react/html'

  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state

  const [activeTab, setActiveTab] = useState('')

  /* useEffect(() => {
    const fetchData = () => {
      gamesInit.forEach(async (item, index) => {
        const { data } = await getGameList(item.type)
        if (data) {
          ctxDispatch({ type: item.dispatchType, payload: data })
        }
      })
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) */

  return (
    <BrowserRouter basename={basename}>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let titleHeader
            let Layout = isMobile ? DefaultMobileLayout : DefaultLayout
            if (route?.layout) {
              if (isMobile) {
                titleHeader = route?.title
              }
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return (isMobile ?
              <Route key={index} path={route.path} element={
                <Layout title={titleHeader}>
                  <Page />
                </Layout>
              }
              >
                {
                  route.children ? route.children?.map((children, i) => {
                    const Children = children.component
                    return (
                      <Route key={i} path={`${children.path}`} element={<Children />} />
                    )
                  }) : null
                }
              </Route>
              :
              <Route key={index} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              }
              >
                {
                  route.children ? route.children?.map((children, i) => {
                    const Children = children.component
                    return (
                      <Route key={i} path={`${children.path}`} element={<Children />} />
                    )
                  }) : null
                }
              </Route>
            )
          })}
          {privateRoutes.map((route, index) => {
            const Page = route.component
            let titleHeader
            let Layout = isMobile ? DefaultMobileLayout : DefaultLayout
            if (route?.layout) {
              if (isMobile) {
                titleHeader = route?.title
              }
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return (isMobile ?
              <Route key={index} path={route.path} element={
                userInfo ? <Layout title={titleHeader}>
                  <Page />   
                </Layout>
                  : <Navigate to='/'></Navigate>
              }
              >
                {
                  route.children ? route.children?.map((children, i) => {
                    const Children = children.component
                    return (
                      <Route exact key={i} path={`${children.path}`} element={<Children />} />
                    )
                  }) : null
                }
              </Route>
              :
              <Route key={index} path={route.path} element={
                userInfo ? <Layout>
                  <Page />
                </Layout>
                  : <Navigate to='/'></Navigate>
              }
              >
                {
                  route.children ? route.children?.map((children, i) => {
                    const Children = children.component
                    return (
                      <Route exact key={i} path={`${children.path}`} element={<Children />} />
                    )
                  }) : null
                }
              </Route>)
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
