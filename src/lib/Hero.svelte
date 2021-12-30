<script>
  import Button from '@hennepin-tech/htc-svelte/Button.svelte'
  import SanityImage from '$lib/SanityImage.svelte'
  export let props
  export let link = undefined
  export let style
</script>

<section class="container blog__hero" style={style}>
  <div class="blog__hero__text">
    <h2>{props.title}</h2>
    <span>{new Date(props.publishedAt).toDateString()} by {props.author.name}</span>
    {#if link}
      <Button props={{
        behavior: 'link',
        layout: 'block',
        url: props.slug.current,
        size: 's',
        style: 'margin-left: 0;',
        text: 'Read More',
        type: 'primary'
      }}/>
    {/if}
  </div>
  <div 
    class="blog__hero__img__wrap"
    
  >
  <!-- hiding -->
  <!-- style={`
    background-image: url(${urlFor(props.mainImage.image).width(1000).url()});
    background-size: cover;
    background-position: center;
  `} -->
  <!-- hiding -->
    <!-- <img 
      class="blog__hero__img" 
      src={urlFor(props.mainImage.image).width(800).url()} 
      alt={props.mainImage.alt}
      style={`opacity: 0%`}
    > -->
    <SanityImage 
      image={props.mainImage.image}
      alt={props.mainImage.alt}
      maxWidth={780}
      hero={true}
    />
  </div>
</section>

<style>
  .blog__hero {
    height: 500px;
    display: flex;
    flex-direction: column-reverse;
    /* margin-top: 100px; */
  }
  .blog__hero__img__wrap {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 500px;
    width: 100%;
    position: relative;
  }
  .blog__hero__text {
    padding: 1.2rem;
    background-color: var(--grey-100);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .blog__hero__text h2 {
    margin-top: 0;
    font-size: clamp(1.5rem, calc(3vw + 1rem), 2.3rem);
  }
  .blog__hero__text span {
    font-size: clamp(1rem, calc(1vw + 1rem), 1.3rem);
  }

  @media screen and (min-width: 800px){
    .blog__hero {
      height: 350px;
      flex-direction: row;
    }
    .blog__hero__text {
      max-width: 400px;
    }
    .blog__hero__img__wrap {
      max-height: 100%;
    }
  }
</style>