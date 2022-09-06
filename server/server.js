const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); // 라우터에서 사용하기 때문에 쿠키등록
const session = require('express-session');
const multer = require('multer');

const app = express();
app.use(cookieParser()); // 쿠키 사용
// res.cookie('key', value, {
//     maxAge: 10000
// })
// board 컴포넌트에서 'loginid'로 하면 값을 찾을 수 없었는데
// 'key'로 이름을 바꾸니 찾아진다.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

try{
    fs.readdirSync('../public/uploads');
}catch(error){
    console.log('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('../public/uploads');
}


app.set('port', process.env.PORT || 4000);

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, '../public/uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024},
});

// app.post('/api/board', upload.single('image'), (req, res)=>{
//     console.log(req.file, req.body);
//     console.log('파일 업로드');
// });


// const cookieConfig = {
//     httpOnly: true, 
//     maxAge: 1000000,
//     signed: true 
// };

// app.use(session({
//     secret: '12345',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
// }));


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});


app.use('/api/login', require('./routes/topicRouter'));
app.use('/api/signup', require('./routes/signupRouter'));
app.use('/api/logout', require('./routes/logoutRouter'));
app.use('/api/board', upload.single('image'), require('./routes/boardRouter'));
app.use('/api/test', upload.single('image'), require('./routes/testRouter'));
app.use('/api/comment', require('./routes/commentRouter'));
app.use('/api/notice', require('./routes/noticeRouter'));
app.use('/api/kakao', require('./routes/kakaoRouter'));
app.use('/api/kakao2', require('./routes/kakao2Router'));

// app.get('/api/test2', (req, res) => {
//     console.log('aa');
//     res.send(200, {"rows": 123});  
// })