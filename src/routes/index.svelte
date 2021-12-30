<script context=module>
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const res = await fetch('/all.json'),
          featured = await fetch('/home.json')
          // categories = await fetch('/category.json')
  
  if (res.ok) {
    return {
      props: {
         posts: await res.json(),
         featured: await featured.json()
      }
    };
  }
  
  return {
    status: res.status,
      error: new Error(`Could not load url`)
    };
  }
</script>
<script>
  import Hero from '$lib/Hero.svelte'
  import { urlFor } from '$lib/sanityClient'
  import Seo from 'svelte-seo'

  export let posts
  export let featured

  let featuredPost

  $: ({ featuredPost } = featured)
</script>

<Seo 
  title="Hennepin Technical College Blog"
  openGraph={{
    title: 'Hennepin Technical College Blog',
    description: 'The official blog for HTC, highlighting students, faculty & staff',
    url: 'https://blog.hennepintech.edu',
    type: 'website',
  }}
/>

<Hero props={featuredPost} link={true}/>

<div class="container">
  
</div>

<div class="container card__grid">
  {#each posts as { excerpt, publishedAt, title, slug, mainImage: { image, alt } }}
    <article class="article">
      <a href={`/${slug.current}`}>
        <div class="article__img__wrap">
            <img 
              class="article__img"
              src={urlFor(image).width(200).height(150).quality(100).saturation(-100).url()} 
              alt={alt}
            >
          <div class="article__date">
            <span>{new Date(publishedAt).toLocaleString('default', {month: 'short'})}</span>
            <span>{new Date(publishedAt).getDay()}</span>
          </div>
        </div>
        <div class="article__info">
          <h2>{title}</h2>
          <p>{`${excerpt.slice(0,100)}...`}</p>
        </div>
      </a>
    </article>
  {/each}
</div>

<style>
  .article {
    margin-bottom: 7px;
  }
  .article > a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 15px;
  }
  .article > a:hover {
    text-decoration: none;
  }
  .article > a:hover h2 {
    text-decoration: underline;
  }
  .article__img__wrap {
    position: relative;
    width: 100%;
    max-height: 150px;
    overflow: hidden;
  }
  .article__img {
    filter: brightness(0.4);
    width: 100%;
  }

  .article__date {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: var(--white);
    font-size: 2.5rem;
  }
  .article__info h2 {
    font-size: clamp(1.2rem, calc(1vw + 1rem), 1.7rem);
    margin: 0;
    margin-bottom: 7px
  }
  .article__info p {
    font-size: clamp(0.9rem, calc(.5vw + 1rem), 1.2rem);
  }

  @media screen and (min-width: 768px) {
    .article {
      margin-bottom: 3px;
    }
    .article > a {
      flex-direction: row;
      max-height: 150px;
    }
    .article__img__wrap {
      max-width: 200px;
    }
    .article__img {
      max-width: 200px;
    }
    .article__info h2 {
      margin-top: 20px;
      margin-bottom: 7px
    }
    /* .article__info p {
      
    } */
  }
</style>