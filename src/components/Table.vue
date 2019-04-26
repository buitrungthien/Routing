<template>
  <b-container fluid>
    <b-row>
      <b-col md="4" class="my-1">
        <b-input-group>
          <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
          <b-input-group-append>
            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-table
          id="my-table"
          hover
          :items="dataTable"
          :current-page="currentPage"
          :per-page="perPage"
        ></b-table>
      </b-col>
      <b-col md="6">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
        <p class="mt-3">Current Page: {{ currentPage }}</p>
      </b-col>
      <b-col md="2">
        <b-dropdown id="dropdown-1" :text="selected" class="m-md-2">
          <b-dropdown-item v-for="(item, index) in options" :key="index" @click="setPerPage(item)">{{item}}</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      filter: "",
      items: [],
      currentPage: 1,
      perPage: 5,
      options: [5, 10, 15, 20],
      selected: "5"
    };
  },
  methods: {
      setPerPage(item) {
          this.perPage = item;
          this.selected = item + "";
      }
  },
  computed: {
    dataTable() {
      let filteredData = this.items.filter(item => {
        return item.title.includes(this.filter.trim());
      });
      return filteredData;
    },
    rows() {
      return this.dataTable.length;
    }
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
      this.items = response.data;
    });
  }
};
</script>

<style>
</style>