<script>
  import {urlFor} from '$lib/sanityClient'
  export let image
  export let maxWidth = 1200
  export let alt = undefined
  export let hero = false

  $: dimensions = image?.asset?._ref?.split('-')[2]
  $: [width, height] = dimensions.split('x').map(Number)
  $: aspectRatio = width / height
</script>
{#if image}
  <img
    loading="lazy"
    src={urlFor(image).width(maxWidth).fit('fillmax')}
    alt={alt || image.alt || ''}
    style="aspect-ratio: {aspectRatio}; {hero ? '' : 'max-width: 100%'}"
  />
{/if}
