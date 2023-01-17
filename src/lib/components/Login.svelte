<script lang="ts">
  import { page } from "$app/stores";

</script>

<div class="bg-base-200">
<div class="flex justify-center items-center h-screen">
  <div class="card w-96 bg-white border border-slate-100">
    <div class="card-body items-center text-center">
      <h2 class="card-title">Welcome to School!</h2>
      <div class="card-actions justify-end w-full">
        <div class="form-control w-full max-w-xs">
          <label class="label mx-auto mt-8">
            <span class="label-text">What is your Roll No/ ID?</span>
          </label>
<!--          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />-->

          <div class="dropdown dropdown-end mt-2">
            <label tabindex="0" class="btn btn-primary btn-block">Who are you ?</label>
            <ul class="flex dropdown-content menu p-2 shadow bg-white rounded-box w-full">
              <li aria-current={$page.url.pathname === '/app' ? 'page' : undefined}>
                <a href="/app/admin">Admin (principal)</a>
              </li>
              <li aria-current={$page.url.pathname === '/app' ? 'page' : undefined}>
                <a href="/app/hr">HR</a>
              </li>
              <li aria-current={$page.url.pathname === '/app' ? 'page' : undefined}>
                <a href="/app/parents">Parents</a>
              </li>
            </ul>
          </div>
        </div>

<!--        <button class="btn btn-primary btn-block">Login</button>-->
      </div>
    </div>
  </div>
</div>
</div>