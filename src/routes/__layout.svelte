<script context=module>
  import {innerWidth} from '@hennepin-tech/htc-svelte'
</script>
<script>
  import '@hennepin-tech/htc-svelte/base.css'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  import data from '$lib/footerData'

  let localWidth
  $: innerWidth.set(localWidth)
</script>

<svelte:window bind:innerWidth={localWidth}/>

<Header />
  <main class="container">
    <slot/>
  </main>
<Footer props={data}/>

<style>
  main {
    z-index: 1;
    margin-top: 100px;
    margin-bottom: 100px;
    box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.08)
  }
</style> 