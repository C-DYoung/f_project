import { Route, Routes } from 'react-router-dom'
import FnaBoardList from './component/FnaBoardList'
import FnaBoardDetail from './component/FnaBoardDetail'
import FnaBoardUpdate from './component/FnaBoardUpdate'
import FnaBoardInsert from './component/FnaBoardInsert,'

const BoardMain = () => {
    return (
        <div>
            <h2>test - Board Main</h2>
            <Routes>
                <Route path='/list' element={<FnaBoardList />} />
                {/* FnaBoardDetail에서 상세페이지, 삭제까지 */}
                <Route path='/detail/:id' element={<FnaBoardDetail />} />
                <Route path='/insert' element={<FnaBoardInsert/>} />
                <Route path='/update/:id' element={<FnaBoardUpdate/>} />
            </Routes>
        </div>
    )
}
export default BoardMain