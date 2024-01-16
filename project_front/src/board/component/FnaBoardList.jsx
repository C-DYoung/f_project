// 고객센터 부분에서 목록 내용을 표시하는 페이지. 
// icon 적용 시키기

import axios from 'axios'
import React, { useCallback, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const FnaBoardList = () => {
    return (
        <div>
            <h2>test - FnaBoardList page</h2>


            {/* 숫자 버튼으로 페이지를 넘어감. */}
            <div className="col-lg-12" >
                <div className="pageination">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <i className="ti-angle-double-left"></i>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <i className="ti-angle-double-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* 끝 부분 */}
        </div>
    )
}

export default FnaBoardList