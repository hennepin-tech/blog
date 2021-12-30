<script context=module>
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ url, params, fetch, session, context }) {
    const { slug } = params
    const res = await fetch(`/${slug}.json`);
  
  if (res.ok) {
    return {
      props: {
         singlePost: await res.json()
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
  import PortableText from '@portabletext/svelte'
  import Button from '@hennepin-tech/htc-svelte/Button.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import Link from '$lib/Link.svelte'
  import Seo from 'svelte-seo'

  export let singlePost
  
  let post

  $: ({ post } = singlePost)
</script>
 
<Seo
title={post.title}
openGraph={{
  title: post.title,
  description: post.exerpt,
  type: "article",
  url: `https://blog.hennepintech.edu/${post.slug.current}`,
  article: {
    publishedTime: post.publishedAt,
    modifiedTime: post._updatedAt,
    authors: [
      `https://hennepintech.edu/directory/${post.author.name.toLowerCase().split(' ').reverse().join('-')}.html`,
    ],
  },
  images: [
    {
      url: urlFor(post.mainImage.image).width(850).height(650).url(),
      width: 850,
      height: 650,
      alt: post.mainImage.alt,
    },
  ],
}}

/>

<article class="container">
  <Hero props={post} style={`grid-area: hero; margin: 0;`}/>
  <section>
    <PortableText 
      blocks={post.body}
      serializers={{
        types: {
          image: ImageBlock,
        },
        marks: {
          link: Link
        }
      }}
    />
  </section>
  <aside>
    {#if post.relatedProgram}
      <div style="grid-area: interest;">
        {#if post.relatedProgram.image}
        <div class="aside-image">
          <img 
          src={urlFor(post.relatedProgram.image.image).width(600).url()} 
          alt={post.relatedProgram.image.alt}
          style="height: 260px"
          >
        </div>
        {/if}
        <h4>Interested in {post.relatedProgram.programName}?</h4>
        <Button props={{
          behavior: 'link',
          layout: 'block',
          text: 'Learn More',
          type: 'primary',
          size: 'm',
          style: 'margin: 0; width: 100%; text-align: center; margin-bottom: 10px;',
          url: post.relatedProgram.pageLink,
        }}/>
      </div>
    {/if}
    
    <div 
      class="filter-bg"
      style="
        grid-area: questions;
        background: url(https://htc-prod.azurewebsites.net/_files/img/ev-bg2.jpg);
        background-size: cover;
        background-position: center;
      ">
      <div class="filter-bg-inside">
        <h4>Have Questions?</h4>
        <p>Contact OneStop today!</p>
        <Button props={{
          behavior: 'link',
          layout: 'block',
          text: 'Contact',
          type: 'primary',
          size: 'm',
          style: 'margin: 0; width: 100%; text-align: center;',
          url: 'mailto:onestop@hennepintech.edu',
        }}/>
      </div>
    </div>
    <div
      class="filter-bg"
      style="
        grid-area: apply;
        background-image: url(https://hennepintech.edu/_images/excellence.jpg);
        background-size: cover;
        background-position: center;
      ">
      <div class="filter-bg-inside">
        <h4>Ready to Apply?</h4>
        <p>Don't wait! Registration is open for spring.</p>
        <Button props={{
          behavior: 'link',
          layout: 'block',
          text: 'Apply Now',
          type: 'primary',
          size: 'm',
          style: 'margin: 0; width: 100%; text-align: center;',
          url: 'https://eservices.minnstate.edu/adm/public/studentWelcome?campusId=204',
        }}/>
      </div>
    </div>
    
  </aside>
</article>

<style>
  .filter-bg {
    position: relative;
  }
  .filter-bg:before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    border-radius: var(--radius);
    background: linear-gradient(to top, rgba(0, 108, 167, 0.82), rgba(0, 108, 167, 0.62));
  }
  .filter-bg-inside {
    position: relative;
  }
  
  article {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
      "hero"
      "content" 
      "aside"
    ;
  }
  section {
    padding: clamp(10px, calc(2vw + 1rem), 2rem);
    padding-bottom: 0;
    grid-area: content;
    margin: 0;
  }
  :global(p) {
    font-family: 'Open Sans', sans-serif;
    font-size: clamp(1rem, calc(2vw + .5rem), 1.2rem);

  }
  aside {
    grid-area: aside;
    padding: 0.75rem;
    height: min-content;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
      "interest" 
      "questions" 
      "apply"
    ;
    gap: 1rem;
  }
  aside > div {
    border-radius: var(--radius);
    background-color: var(--blue);
    color: var(--white);
    padding: 35px 15px 10px;
  }
  aside > div * {
    margin: 0;
    margin-bottom: 10px;
  }
  .aside-image {
    width: 100%; 
    max-width: 300px; 
    max-height: 250px; 
    overflow: hidden; 
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
  }
  
  @media screen and (min-width: 450px) {
    aside {
      padding: 1.5rem;
    }
  }

  @media screen and (min-width: 500px) {
    aside {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: 
        "interest interest" 
        "questions apply"
      ;
    }
  }

  @media screen and (min-width: 700px) {
    aside {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: 
        "interest questions"
        "interest apply"
      ;
    }
  }

  @media screen and (min-width: 800px) {
    article {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: 
        "hero hero"
        "content aside"
      ;
    }
    aside {
      grid-template-columns: 1fr;
      grid-auto-rows: min-content;
      grid-template-areas: 
        "interest" 
        "questions"
        "apply"
      ;
    }
  }
</style>