<script context=module>
  import {innerWidth} from '@hennepin-tech/htc-svelte'

</script>
<script>
  import { Header, Footer, styles } from '@hennepin-tech/htc-svelte'
  import headerData from '../data/headerData.js'

  let localWidth
  $: innerWidth.set(localWidth)

  $: console.log($innerWidth)

  const headerProps = {
    banner: {
        bannerProps: {
            message: 'Masks Required on Campus. Click here for more info!',
            link: 'https://hennepintech.edu/covid_21.html'
        },
        display: true
    },
    data: headerData
}

</script>

<svelte:window bind:innerWidth={localWidth}/>

<Header props={headerProps}/>
  <slot/>
<Footer />
<style global={styles}>

</style>