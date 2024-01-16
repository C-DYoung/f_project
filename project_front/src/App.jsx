import { Routes, Route } from 'react-router-dom'

import BoardMain from './board/BoardMain'

const App = () => {
  return (
    <div>
      {/* Header와 footer는 공통적으로 작용 */}
      {/* <Header/> */}
      <Routes>
        <Route path='/board/*' element={<BoardMain />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
