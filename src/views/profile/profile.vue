<template>
  <div class="profile">
    <h3 class="title">用户登录</h3>

    <div class="input">
      <label >用户名</label>
      <input type="text" placeholder="请输入用户名" class="user" />
      <label >密码</label>
      <input type="password" placeholder="请输入密码" class="password" />
    </div>

    <input class="login" type="submit" value="登录" />
    <div class="go">
      <a href="#" class="forget">忘记密码</a>
      <a href="#" class="register">账号注册</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
};
</script>

<style lang='scss' scoped>
input::-webkit-input-placeholder{
  color:#ddd
}  
  .profile{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      font-size: 25px;
      margin-top: 45px;
    }
    .input{
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 25px;
      label{
        position: relative;
        right: 40%;
      }
      input{
        width: 90%;
        font-size: 15px;
        outline-style: none;
        border:0px;
        border-bottom:1px solid #ccc;
        padding:15px;
        margin-bottom: 25px;
      }
    }
    .login{
      outline-style: none;
      width: 80%;
      height: 40px;
      border-radius: 25px;
      background-color: rgb(79, 153, 250);
      color: #fff;
      letter-spacing :10px
    }
    .go{
      display: flex;
      width: 90%;
      justify-content: space-around;
      margin-top: 35px;
      .forget{
        font-size: 15px;
      }
    }
  }
</style>