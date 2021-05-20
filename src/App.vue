<template>
  <div>
    <mwc-top-app-bar>
      <div slot="title">Vue Todo</div>
    </mwc-top-app-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import mwcTopAppBar from "@material/mwc-top-app-bar";
import "./assets/reset.css";

export default {
  components: {
    "mwc-top-app-bar": mwcTopAppBar,
  },
};
</script>
