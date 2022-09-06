const kakao2Ctrl = require("../controllers/kakao2Ctrl");
const router = require('express').Router();

router.route('/')
    .get(kakao2Ctrl.getInfo)

module.exports = router;