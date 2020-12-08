<template>
  <div class="profile">
    <h2 class="title">用户登录</h2>
    
    <div class="input">
        <input type="text" placeholder="用户名" class="user">
        <input type="password" placeholder="密码" class="password">
    </div>
  
    <input type="submit" value="登录" class="submit">
  <div>
    <a href="#" class="forget">忘记密码</a>
    <a href="#" class="register">账号注册</a>
  </div>
 
  </div>
</template>

<script>
export default {
  name:'profile'
}
</script>

<style scoped>
.profile{
  height: 100vh;
  background-color: #eee;
  overflow: hidden;
  padding-top: 20px;
}
  .title{
    margin-bottom: 20px;
    color:rgb(9, 120, 172);
    position:relative;
    left: calc(50vw - 50px);
    padding-top: 20px; 
  }
  .user,.password{
    outline: rgb(9, 120, 172);
    border: none;
    border-bottom: solid rgb(8, 196, 230) 1px;
    padding: 5px;
    margin-left: 50px;
    background-color: #eee;
  }
  input::-webkit-input-placeholder{
    color: rgb(168, 49, 45);
  }
  .user {
    margin-bottom: 20px;
  }
  .submit{
    position: relative;
    width: 200px;
    height: 30px;
    margin-top: 20px;
    margin-left: 53px;
    background-color: rgb(9, 120, 172);
    display:block;
    color: #fff;
    outline: none;
    border-radius: 5px;
  }
  .submit:hover{
    background-color: rgb(7, 88, 126);
  }
  .forget{
    float: left;
    font-size: 10px;
    margin-left: 50px;
    margin-top: 10px;
    color: rgb(9, 120, 172);
  }
  .register{
    float: right;
    font-size: 10px;
    margin-right: 60px;
    margin-top: 10px;
    color: rgb(9, 120, 172);
  }
</style>