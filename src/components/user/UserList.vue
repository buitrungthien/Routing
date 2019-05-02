<template>
  <b-container>
    <b-row>
      <b-col :md="isShowUser ? 3 : 12">
        <router-link
          :to="{name: 'userList', params: {id: index+1}}"
          v-for="(user, index) in users"
          :key="index"
          tag="b-button"
          class="btn-success w-100 mb-2 pd-0"
        >
          <div @click="showUserDetail()">{{user.name}}</div>
        </router-link>
      </b-col>
      <b-col md="9" v-if="isShowUser">
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: "User1" },
        { name: "User2" },
        { name: "User3" },
        { name: "User4" },
        { name: "User5" }
      ],
      isShowUser: false
    };
  },
  methods: {
    showUserDetail() {
      this.isShowUser = true;
    }
  }
};
</script>

<style scoped>
.w-100 {
  width: 100%;
}
.mb-2 {
  margin-bottom: 2px;
}
.pd-0 {
  padding: 0;
}
</style>
