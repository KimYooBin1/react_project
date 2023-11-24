import { server } from "./src/commons/mocks/index";
beforeAll(() => server.listen()); //테스트 전에 가짜 서버를 실행
afterAll(() => server.close());
