const connection = require('../config');

const kakaoCtrl = {
    getInfo: async(req, res)=>{

        const id = req.query.id;
        const password = req.query.password ? req.query.password : "";
        const name = '';
        const age = 0;
        const address1 = '';
        const address2 = '';
        const address3 = '';
        const score = 20;

        let sql = `SELECT * FROM member WHERE id = "${id}";`
        // INSERT는 if(!req.body.id){return ...} 리턴을 해줌으로써 오류응답을 서버와 클라이언트에서 2번하지않게해준다.
       
        connection.query(sql, (error, rows)=>{
            if(error) throw error;
            console.log('row: ', rows);
            if(rows.length === 0){
                sql = `INSERT INTO member(id, password, name, age, address1, address2, address3, score) VALUES("${id}", "${password}", "${name}", ${age}, "${address1}", "${address2}", "${address3}", ${score});`
                connection.query(sql, (error, rows)=>{
                    if(error) throw error;
                    res.send("<script>alert('카카오 회원가입 완료!!!!!!!!!!!'); location.href='/';</script>");
                })
            }else res.send("<script>alert('카카오 로그인 완료!!!!!!!!!!!'); location.href='/';</script>");
        })
}
}


module.exports = kakaoCtrl