import{Routes,Route,Navigate} from 'react-router-dom'
import MapPage from '../pages/MapPage.jsx'
import FavoritesPages from '../pages/FavoritesPages.jsx'
import Layout from '../components/Layout.jsx'
import Header from '../components/Header.jsx'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<Layout/>}> 
        <Route path='/' element={<Navigate to="/map" replace />} />
        {/* 기본코드는/map으로 이동 하고 현재 경로를 map으로 설정 */}
        <Route path='/map' element={<MapPage/>}/>
        {/* 경로랑 실제 페이지랑 연결 */}
        <Route path='/favorites' element={<FavoritesPages/>}/>
        
      </Route>
      <Route path='*' element={<Navigate to="/map" replace />} />
      {/* 경로가 잘못된 경우 map으로 이동 */}
    </Routes>
  )
}
   

export default App
