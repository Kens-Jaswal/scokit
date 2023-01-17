<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
  import IconMagnifyingGlass from "../assets/svg/IconMagnifyingGlass.svelte";
  import IconUser from "../assets/svg/IconUser.svelte";
  import IconBar3 from "../assets/svg/IconBar3.svelte";
  import IconRightOnRectangle from "../assets/svg/IconRightOnRectangle.svelte";
</script>

<header class="flex justify-between w-full bg-white border-b border-slate-100 py-2 px-4">
  <div>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
      <IconBar3/>
    </label>
  </div>

  <nav>
    <ul class="flex space-x-4">
      <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
        <div class="dropdown dropdown-end">
          <div class="flex">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <IconRightOnRectangle/>
            </label>
          </div>

          <ul tabindex="0" class="dropdown-content menu shadow bg-base-100 rounded-box w-52">
            <li><a href="/">Sign Out</a></li>
          </ul>
        </div>


      </li>
    </ul>
  </nav>
</header>
