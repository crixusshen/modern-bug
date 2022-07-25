/*
 * @Author: shenzhiwei
 * @Date: 2022-07-14 16:13:24
 * @Company: orientsec.com.cn
 * @Description: Serverless BFF层 - 很薄的层，对底层微服务进行数据剪裁、映射、聚合和代理等操作，复杂情况下还可以访问数据存储（如数据库或缓存）
 */
//@ts-ignore
import { faker } from '@faker-js/faker';

export const get = async () => {
  const mockData = new Array(20).fill(0).map(() => {
    const firstName = faker.name.firstName();
    return {
      name: firstName,
      avatar: `https://api.multiavatar.com/${firstName}.svg`,
      email: faker.internet.email(),
    };
  });

  // 模拟中台接口延时响应
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, 2000);
  });

  return { code: 200, data: mockData };
};
