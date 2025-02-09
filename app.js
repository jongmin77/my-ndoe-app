// app.js
const express = require('express');
const app = express();
const port = 3000;

// 간단한 라우트 설정
app.get('/', (req, res) => {
  res.send('안녕하세요! Docker와 CI/CD를 이용한 Node.js 애플리케이션입니다.');
});

// 서버 시작
app.listen(port, () => {
  console.log(`앱이 http://localhost:${port} 에서 실행 중입니다.`);
});
