![Node_12](https://img.shields.io/badge/node.js-v12-green?logo=node.js)
![Node_12](https://img.shields.io/badge/npm-v6.13.4-red?logo=npm)
![Serverless-framework](https://img.shields.io/badge/Serverless_framework-v1.62.0-orange.svg?logo=serverless)
![Lambda](https://img.shields.io/badge/AWS_Lambda-latest-blue.svg)

# AWS Lambda + Serverless Framework 실습

### 0. 개요
- Aws Lambda 실습 프로젝트. Serverless Framework 기반의 개발환경 구축 및 node.js를 이용한 lambda 코드 작성
- daddyprogrammer.org에서 연재 및 소스 Github 등록
    - https://daddyprogrammer.org/post/series/lambda/

### 1. 개발환경
- node.js v12
- serverless framework 1.62.0
- vscode

### 2. 실행
- 로컬 테스트
    - $ sls invoke local -f hello
- 로컬 Gateway 환경 띄우기
    - $ sls offline start
    - 터미널에서 주소를 호출
        - curl -X POST \
            -H "Content-type: application/json" \
            -H "Accept: application/json" \
            -d '{"foo":"bar", "aws":"lambda"}' \
            "localhost:3000/user/10?isValid=true"
- 서버에 배포
    - $ sls deploy -s production
       
### 3. 목차
- aws lambda 개발하기(1) – 로컬 개발 환경 구축(node.js + serverless)
    - Document
        - https://daddyprogrammer.org/post/9131/aws-lambda-setup-develop-environment/
- aws lambda 개발하기(2) – hellolambda, Gateway 트리거
    - Document
        - https://daddyprogrammer.org/post/9168/aws-lambda-development-hellolambda-gateway/
- aws lambda 개발하기(3) – node package(모듈)설치 및 개발, 환경변수 적용
    - Document
        - https://daddyprogrammer.org/post/9266/aws-lambda-develop-node-init-env-variable/
- aws lambda 개발하기(4) – serverless로 트리거(trigger), 대상(destination), 실행역할(role), VPC 설정
    - Document
        - https://daddyprogrammer.org/post/9357/aws-lambda-develop-trigger-destination-vpc-role/
- aws lambda 개발하기(5) – serverless plugin (offline, prune plugin)
    - Document
        - https://daddyprogrammer.org/post/9418/aws-lambda-use-serverless-plugin/
