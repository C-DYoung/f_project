// pagenation을 담당하는 jsx..
import axios from "axios";
import React, { useCallback, useState, useEffect, useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";


const PaginationMain = () => {
	
    const [page, setPage] = useState(1); // 페이지의 상태
    const pageSize = 7; //각 페이지에 보여질 게시글 수

    function List() {
        const [data, setData] = useState([]);
        const [page, setPage] = useState(1);
        const pageSize = 5;

        const getListData = async () => {
            try {
                const resp = await axios.get(`/get/board?page=${page}&size=${pageSize}`, {
                    headers: new Headers()
                })
                setData(resp.data);
            }catch(error){
                console.log('리스트 fetch 실패 : ', error);
            }
        }
        
        // 페이지가 바뀔 때마다 re-rendering
        useEffect(() => {
            getListData();
        }, [page]);


    }

    const handlePrevPage = () => {
        if (page > 1) setPage(page-1);
    }

    const handleNextPage = () => {
        setPage(page + 1);
    }

    return(
        <div>
            <button onClick={handlePrevPage}>prev</button>
            <button onClick={handleNextPage}>next</button>

            
        </div>
    )

};


export default PaginationMain;
