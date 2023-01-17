<script>
  import IconCog8Tooth from "../../lib/assets/svg/IconCog8Tooth.svelte";
</script>

<div class="p-4">
  <div class="h-12 ">
    <a href="/" class="mx-auto w-full">
      <h1 class="font-bold text-2xl">ScoKit</h1>
    </a>
  </div>

  <div class="bg-slate-100 p-2 w-full rounded-2xl flex">
    <div class="avatar">
      <div class="w-10 h-10 rounded-full">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
      </div>
    </div>

    <span class="ml-2 flex-grow overflow-hidden">
      <p class="truncate">Smith Jonathan</p>
      <small class="font-bold">Principal</small>
    </span>

    <div class="items-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle btn-sm">
          <IconCog8Tooth />
        </label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="admin/profile/">Profile</a></li>
        </ul>
      </div>
    </div>
  </div>

  <ul class="menu mt-6">
    <li><a href="../app/admin/school/class">Classes</a></li>
    <li><a href="/school/staff">Staff</a></li>
    <li><a>Students</a></li>
    <li><a>Events</a></li>
    <li><a>Holidays</a></li>
  </ul>
</div>


