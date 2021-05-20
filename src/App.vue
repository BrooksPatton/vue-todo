<template>
  <div>
    <mwc-top-app-bar>
      <div slot="title">Vue Todo</div>
      <mwc-icon-button slot="actionItems"
        ><list-icon></list-icon
      ></mwc-icon-button>
    </mwc-top-app-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import "@material/mwc-top-app-bar";
import "@material/mwc-icon-button";
import "./assets/reset.css";
import ListIcon from "./components/ListIcon";

export default {
  components: {
    "list-icon": ListIcon,
  },
};
</script>
