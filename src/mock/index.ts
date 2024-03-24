/**
 * 此文件用来做 mock 数据
 * 官网： http://mockjs.com/
 */
import Mock from 'mockjs';

/**
 * 创建失败返回结果
 * 用于接口响应 200，但数据不符合预期的场景
 * @param {string} type 错误类型
 * @param {string} message
 * @returns
 */
function createErrorResult(type: String, message: String) {
  return {
    error: {
      type,
      message,
    },
  };
}

Mock.mock('/getUserInfo', 'post', function (options) {
  const { username } = JSON.parse(options.body);
  // 模拟登录成功与失败
  if (username === 'admin') {
    return {
      name: 'admin',
      id: '1',
    };
  } else if (username === 'oyyl') {
    return {
      name: '-D调定义之崽崽',
      id: '2',
    };
  } else {
    return createErrorResult('UNAUTHENTICATED', '用户名/密码错误');
  }
});
