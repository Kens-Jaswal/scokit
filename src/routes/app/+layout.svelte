<script>
  import "../../app.css";
  import Header from "../../lib/components/Header.svelte";
  import LeftNav from "./LeftNav.svelte";
</script>

<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

  <!-- Side:RIGHT -->
  <div class="drawer-content">
    <!-- Page content here -->
    <Header />

    <div class="mx-auto mx-6 mt-6">
      <slot />
    </div>

  </div>

  <!-- Side:LEFT -->
  <div class="drawer-side">
    <div class="bg-slate-50 border border-slate-300 rounded-2xl m-2 w-72">
      <label for="my-drawer-2" class="drawer-overlay"></label>

      <LeftNav/>

    </div>
  </div>
</div>
