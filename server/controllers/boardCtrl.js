const connection = require('../config');
const today = new Date();
const year = today.getFullYear();
const month = ('0' + (today.getMonth() + 1)).slice(-2);
const day = ('0' + today.getDate()).slice(-2);
const date = year + '-' + month  + '-' + day; // 2021-07-01

const boardCtrl = {
    insertInfo: async(req, res)=>{
        if(req.query.modify !== undefined){ // 수정 눌렀을 때
            const id = req.query.id;
            const {title, content} = req.body;
            const sql = `UPDATE board SET title = "${title}", content = "${content}" WHERE id = ${id};`

            connection.query(sql, (error, rows)=>{
                if(error) throw error;
                res.send("<script>alert('수정완료!!'); location.href='/membership/faq/board/1';</script>");
            })
        }

        else if(req.query.modify === undefined){

        let writer = '';
        if(req.query.kakao !== 'null'){
            writer = req.query.kakao;
        }else{
            writer = req.cookies.key;
        }
        let image = '';
        if(req.file === undefined){
            image = '/';
        }else {
            image = '/uploads/' + req.file.filename;
        }
        const {title, content} = req.body; // 구조분해할당
        const sql = `INSERT INTO board(title, content, writer, date, image) VALUES("${title}", "${content}", "${writer}", "${date}", "${image}");`+
        `UPDATE member SET score = score + 20 WHERE id = "${writer}";`
        
        switch(true){
          case !req.body.title: return res.send("<script>alert('제목을 입력해주세요.'); location.href='/membership/faq/write';</script>");
          case !req.body.content: return res.send("<script>alert('내용을 입력해주세요.'); location.href='/membership/faq/write';</script>");
      }
        connection.query(sql, (error, rows)=>{
          if(error) throw error;
          res.send("<script>alert('게시판 등록 완료!!'); location.href='/membership/faq/board/1';</script>");
        })
        }
    },
    getInfo: async(req, res)=>{
        if(req.query.delete !== undefined){ // 삭제 눌렀을 때
            const id = req.query.id;
            const sql = `DELETE FROM board WHERE id = ${id};`+
            `DELETE FROM comment WHERE board_number = ${id};`+
            `ALTER TABLE board AUTO_INCREMENT=1;`+
            `SET @COUNT = 0; `+
            `UPDATE board SET id = @COUNT:=@COUNT+1;`;
            
 
            connection.query(sql, (error, rows)=>{
                if(error) throw error;
                res.send("<script>alert('삭제완료!!'); location.href='/membership/faq/board/1';</script>");
              })
        }
        
        else if(req.query.delete !== true){
        const sql = `SELECT * FROM board`;
        connection.query(sql, (error, rows)=>{
            if(error) throw error;
            res.send(200, {"rows": rows, "length": rows.length});
            // 여러개의 데이터를 뿌려줄 때
        })
    }
}
}

module.exports = boardCtrl