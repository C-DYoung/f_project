import { Route, Routes } from 'react-router-dom'
import FaqBoardDetail from './component/FaqBoardDetail'
import FaqBoardInsert from './component/FaqBoardInsert'
import FaqBoardList from './component/FaqBoardList'
import FaqBoardUpdate from './component/FaqBoardUpdate'


const BoardMain = () => {
    return (
        <div>
            {/* <h2>test - Board Main</h2> */}
            <Routes>
                <Route path='/list' element={<FaqBoardList />} />
                {/* FnaBoardDetail에서 상세페이지, 삭제까지 */}
                <Route path='/detail/:id' element={<FaqBoardDetail />} />
                <Route path='/insert' element={<FaqBoardInsert/>} />
                <Route path='/update/:id' element={<FaqBoardUpdate/>} />
            </Routes>
        </div>
    )
}
export default BoardMain