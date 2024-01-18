// 고객센터 부분에서 목록 내용을 표시하는 페이지. 
// icon 적용 시키기

import axios from 'axios'
import React, { useCallback, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const FaqBoardList = () => {
    return (
        <div>
            {/* <h2>test - FnaBoardList page</h2> */}

            {/* <!-- ================ contact section start ================= --> */}

            <section className="contact-section padding_top">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title">공지</h2>
                        </div>
                        <div className="col-lg-8">

                            {/* novalidate="novalidate" 아래에서 잠깐 주석처리 유효성 검사? */}

                            <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm"
                                >
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>타이틀</th>
                                                    <th>작성일</th>
                                                    <th>조회수</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>

                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* <!-- ================ contact section end ================= --> */}



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

export default FaqBoardList