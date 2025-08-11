import Mock from "mockjs";

// 模拟一个用户登录接口
Mock.mock("/api/login", "post", (options) => {
  const body = JSON.parse(options.body);
  if (body.username === "admin" && body.password === "123456") {
    return {
      code: 200,
      message: "登录成功",
      data: {
        token: Mock.Random.guid(),
        name: "管理员",
      },
    };
  } else {
    return {
      code: 401,
      message: "用户名或密码错误",
    };
  }
});

// 模拟获取用户列表接口
Mock.mock("/api/users", "get", {
  code: 200,
  message: "成功",
  "data|100-1000": [
    {
      "id|+1": 1,
      name: "@cname",
      age: "@integer(20, 40)",
      email: "@email",
    },
  ],
});
