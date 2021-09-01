<template>
  <div>
    <el-row justify="center">
      <el-col :span="11">
        <div class="center">
          <el-card shadow="hover">
            <el-form ref="form" :model="loginForm" label-width="80px">
              <el-form-item :label="item.label" label-width="auto" v-for="(item, index) in loginItem" :key="index">
                <el-input v-model="loginForm[item.modelValue]"></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      loginForm:{
        username: "",
        password: "",

      },
      loginItem:[
        {
          label: "尊姓大名：",
          modelValue: "username"
        },
        {
          label: "尊姓大名：",
          modelValue: "password"
        },
        {
          label: "尊姓大名：",
          modelValue: ""
        },{
          label: "尊姓大名：",
          modelValue: ""
        },{
          label: "尊姓大名：",
          modelValue: ""
        },{
          label: "尊姓大名：",
          modelValue: ""
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.center {
  padding: 20px 10px;
}
</style>