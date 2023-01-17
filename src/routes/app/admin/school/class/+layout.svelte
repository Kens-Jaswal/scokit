<script>
  import H1PageTitle from "../../../../../lib/components/H1PageTitle.svelte";
  import IconUser from "../../../../../lib/assets/svg/IconUser.svelte";
  import IconDocumentMagnifying from "../../../../../lib/assets/svg/IconDocumentMagnifying.svelte";
</script>

<H1PageTitle
  title="Classes" />

<div class="card w-72 bg-base-100">
  <div class="card-body">
    <small class="text-neutral-content">class</small>
    <div class="flex justify-between">
      <h2 class="card-title">Nursery-A</h2>
      <div>
        <a href="/">
          <IconDocumentMagnifying />
        </a>
      </div>
    </div>

    <div class="mt-2 flex">
      <small class="text-warning font-bold">Cathrin Julia <small class="text-neutral-content"> | Class Teacher</small></small>
    </div>

    <div class="card-actions border-t border-slate-200 flex flex-col mt-2 pt-3">
      <div><p>Total Students: <span class="font-bold">45</span></p></div>
      <div class="flex justify-between w-full">
        <p>Present:<span class="font-bold text-success">44 </span></p>
        <p class="text-right">Absent:<span class="font-bold text-warning">1 </span></p>
      </div>
    </div>
  </div>
</div>


<!--<slot />-->