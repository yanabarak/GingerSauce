<template>
  <section class="align-self-start col-12 section-book" id="brand-archetype">
    <div class="content">
      <h1 class="mb-4">Brand Archetype</h1>
      <p>
        The brand archetype is the character of a brand: a live representation that is created
        taking into consideration all the nuances of the target audience and the brand’s concept. A
        character that the audience can relate to. Once the archetype is defined, you will now know
        how people will see, and comprehend the brand. You will know what the brand will sound,
        look, and behave in certain situations. You will understand its values, and views on life.
        Knowing an archetype allows you to create a full-fledged personality, and structure further
        brand strategy.
      </p>
    </div>
    <div class="archetype-wrapper">
      <ArchetypeBlock
        img="themagician"
        title="The Magician"
        text="It is a smart and intelligent archetype, aiming to make all the wishes come true. The Magician brands oftentimes convert their groundbreaking knowledge into innovative technology. Audiences of this type need to be provided with a solution to their problem, or to be in on the secret information."
        sample="Think of Nikola Tesla, Disney or Apple."
      />
      <ArchetypeBlock
        img="thecreator"
        title="The Creator"
        text="The Creator are nonconformists, driven by a desire for the self-expression. They have their own vision, and try to create something truly unique. With their project, they aim at uncovering the true potential and creativity of their audience."
        sample="Think of Pharrell Williams, Adobe or Lego."
      />
    </div>
    <div class="bg-img left-0 top-0">
      <svg
        width="444"
        height="553"
        viewBox="0 0 444 553"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M125.391 481.069C240.299 605.154 433.96 556.48 443.441 419.58C447.59 298.42 252.977 289.988 239.147 224.495C216.942 119.339 144.442 -64.5981 43.3309 24.12C-52.9016 108.557 31.9297 380.145 125.391 481.069Z"
        />
      </svg>
    </div>
    <div class="bg-img bg-img2 right-0 top-0">
      <svg
        width="563"
        height="567"
        viewBox="0 0 563 567"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M581.209 404.305C729.802 256.636 668.283 11.083 502.5 0.7948C355.835 -2.91839 348.266 244.58 269.204 263.004C142.261 292.586 -79.33 387.116 29.391 514.504C132.866 635.746 460.35 524.411 581.209 404.305Z"
          fill="#F2F2F2"
        />
      </svg>
    </div>
  </section>
</template>
<script setup>
import ArchetypeBlock from './ArchetypeBlock.vue';
</script>
