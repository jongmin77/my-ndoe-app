# 베이스 이미지 선택 (Node.js 버전 14 사용)
FROM node:14

# 어플리케이션 디렉토리 생성
WORKDIR /app

# 패키지 파일 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# 소스 코드 복사
COPY . .

# 애플리케이션 실행 포트 설정
EXPOSE 3000

# 애플리케이션 실행 명령
CMD ["node", "app.js"]

