<script>
  import Counter from "../lib/components/Counter.svelte";
  import welcome from "$lib/images/svelte-welcome.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";
  import Login from "../lib/components/Login.svelte";
</script>

<svelte:head>
  <title>ScoKit - A complete school tracking app </title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <Login />
</section>