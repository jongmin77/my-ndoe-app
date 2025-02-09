// test.js
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
};

const req = http.request(options, (res) => {
  let data = '';

  console.log(`상태 코드: ${res.statusCode}`);

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (data === '안녕하세요! Docker와 CI/CD를 이용한 Node.js 애플리케이션입니다.') {
      console.log('테스트 성공!');
      process.exit(0);
    } else {
      console.log('테스트 실패!');
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error(error);
  process.exit(1);
});

req.end();
