<script>

</script>

<header>
  <div class="container">
    <span class="logo">
      <img src="./images/logo.png" alt="Hennepin Technical Colleges' Logo">
      <p>Blog</p>
    </span>
    <nav>
      <ul>
        <li><a class="block__link" sveltekit:prefetch href="/">Blog Home</a></li>
        <li><a class="block__link" href="https://hennepintech.edu">HTC Home</a></li>
      </ul>
    </nav>
  </div>
</header>

<style>
  @font-face {
    font-family: "Intruding Cat";
    src: url("/fonts/IntrudingCat.otf") format("opentype");
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .logo > p {
    font-family: 'Intruding Cat', sans-serif;
    font-size: clamp(1.2rem, 5vw, 1.9rem);
    max-width: 10%;
    margin-left: 0px;
    color: var(--blue);
    line-height: 1;
    margin-bottom: 0;
  } 

  img {
    max-width: 90%;
  }
  header {
    margin: 0;
    padding: clamp(.5rem, calc(.5vw + .5rem), 1.25rem) clamp(1.2rem, calc(1vw + .5rem), 2rem);
    font-size: 1.2rem;
    box-shadow: var(--bottom-shadow);
    z-index: 1000;
    position: fixed;
    min-height: 100px;
    width: 100%;
    background-color: var(--white);
    top: 0;
  }
  header > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.4rem;
  }
  a {
    font-size: clamp(1rem, calc(1vw + 1rem), 1.2rem);
  }

  @media screen and (min-width: 800px){
    header {
      padding: 2rem;
    }
    header > div {
      justify-content: space-between;
      flex-direction: row;
      margin-top: 0;
    }
    img {
      width: clamp(200px, 76% ,400px);
    }
  }
</style>