CREATE TABLE IF NOT EXISTS users ( -- 유저 보드
	email VARCHAR(50) NOT NULL, -- 이메일(PK)
    user_name VARCHAR(50) NOT NULL, -- 이름
    pwd VARCHAR(200) NOT NULL, -- 비밀번호
    address VARCHAR(400) NOT NULL, -- 주소
    phone VARCHAR(12) NOT NULL, -- 휴대폰 번호
    isadmin CHAR(1) NOT NULL DEFAULT 'N', -- 관리자 권한
    createAt DATETIME NULL DEFAULT now(), -- 가입 시간
    PRIMARY KEY (email) -- 인식방법
);

CREATE TABLE IF NOT EXISTS faqboard ( -- 자주묻는 질문 (고객센터)
    faq_id INT NOT NULL AUTO_INCREMENT, -- 글 번호 자동 생성(PK)
    title VARCHAR(100) NOT NULL, -- 글 제목
	picture VARCHAR(2048) NULL, -- 사진
    content VARCHAR(1024) NOT NULL, -- 내용
    cnt INT NULL DEFAULT 0, -- 조회수 
    createAt DATETIME NULL DEFAULT now(), -- 작성시간
    PRIMARY KEY (faq_id) -- 인식방법
);

CREATE TABLE IF NOT EXISTS notice_board ( -- 고객센터 
    notice_id INT NOT NULL AUTO_INCREMENT, -- 글 번호 자동 생성(PK)
    email VARCHAR(50) NOT NULL,  -- 사용자 아이디(Foreign Key)
    title VARCHAR(100) NOT NULL, -- 글 제목
    content VARCHAR(1024) NOT NULL, -- 내용
    cnt INT NULL DEFAULT 0, -- 조회수 
    createAt DATETIME NULL DEFAULT now(), -- 작성시간
    PRIMARY KEY (notice_id), -- 인식방법
    FOREIGN KEY (email) REFERENCES users(email) 
);

-- CREATE TABLE IF NOT EXISTS category (
--     tag VARCHAR(100) NOT NULL, -- 태그(PK)
--     createAt DATETIME NULL DEFAULT now(), -- 작성시간
--     PRIMARY KEY (tag) -- 인식방법
-- );

SELECT * FROM users;

SELECT * FROM notice_board;

drop table notice_board;
drop table users;


INSERT INTO users (email, user_name, pwd, address, phone) VALUE ('user1@com', 'user1', '1234', '서울', '0101111111');
INSERT INTO users (email, user_name, pwd, address, phone) VALUE ('user2@com', 'user2', '1234', '서울', '01011111111');
INSERT INTO users (email, user_name, pwd, address, phone, isadmin) VALUE ('admin@com', 'admin', '1234', '서울', '01011111111', 'Y');


INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'notice 1번째', '첫번째 notice 게시글 입니다...');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'notice 2번째', '두번째 notice 게시글 입니다...');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'notice 3번째', '세번째 notice 게시글 입니다...');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'notice 4번째', '네번째 notice 게시글 입니다...');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test5', 'test8');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test6', 'test8');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test7', 'test8');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test8', 'test8');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test9', 'test8');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test10', 'test8');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test11', 'test8');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test12', 'test8');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test13', 'test8');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test14', 'test8');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test15', 'test8');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test16', 'test16');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test17', 'test17');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test18', 'test18');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test19', 'tes198');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test20', 'test20');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test21', 'test21');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test22', 'test21');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test23', 'test21');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test24', 'test21');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test25', 'test21');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test26', 'test21');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test27', 'test21');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test28', 'test21');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test29', 'test21');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test30', 'test21');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test31', 'test21');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test32', 'test21');
INSERT INTO notice_board (email, title, content) VALUE ('admin@com', 'test33', 'test21');

SELECT * from notice_board ORDER BY notice_id DESC limit 0,7;
SELECT * from notice_board limit 7,7;
