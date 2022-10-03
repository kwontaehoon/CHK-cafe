const connection = require('../config');

const commentCtrl = {
    insertInfo: async(req, res)=>{
        if(req.params.id !== undefined){
            // 댓글정보를 불러올때 borde_number와 path가 id와 같은것만 get

            const id = req.params.id;
            const sql = `SELECT * FROM comment WHERE board_number = "${id}";`
            connection.query(sql, (error, rows)=>{
                if(error) throw error;
                res.send(200, {"rows": rows, "length": rows.length});
            })
        }else{
        // 여기는 쿼리스트링으로 parans가 없을 때 실행
        
        const id = req.query.id;
        console.log('id: ', id);
        const writer = req.cookies.key;
        console.log('writer: ', writer);
        const {content} = req.body; // 구조분해할당

        switch(true){
            case writer === undefined : res.send("<script>alert('로그인부터 하시죠??'); location.href='/login';</script>"); break;
            case content === '' : res.send(`<script>alert('내용을 입력해주세요'); location.href='/membership/faq/view/${id}';</script>`); break;
            case writer !== undefined && content !== '' :
        
        
        const sql = `INSERT INTO comment(board_number, content, writer) VALUES("${id}", "${content}", "${writer}");`+
        `UPDATE member SET score = score + 5 WHERE id = "${writer}";`

        connection.query(sql, (error, rows)=>{
            if(error) throw error;
            res.send(`<script>location.href='/membership/faq/view/${id}';</script>`);
          }); break;
        }
    }
    },
    getInfo: async(req, res)=>{
        const id = req.params.id;
        const sql = `SELECT * FROM comment;`
        connection.query(sql, (error, rows)=>{
            if(error) throw error;
            res.send(200, {"rows": rows, "length": rows.length});
        })
}
}

module.exports = commentCtrl