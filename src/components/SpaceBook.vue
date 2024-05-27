<template>
  <section class="align-self-start col-12 section-book" id="space-book">
    <div class="content">
      <h1 class="mb-4">Clear Space</h1>
      <p>
        Clear space is the area surrounding the global signature and Icon that must be kept free of
        any elements, including text, graphics, borders, or other logos. The minimum clear space
        required for the preferred global signature is equal to “x”, or the height and width of the
        Guberman Icon.
      </p>
      <div class="space-1 mx-auto">
        <img src="../assets/space.png" alt="space 1" />
      </div>
      <div class="space-2 mb-50 mx-auto">
        <img src="../assets/space2.png" alt="space 2" />
      </div>
    </div>

    <div class="bg-img">
      <svg
        width="487"
        height="381"
        viewBox="0 0 487 381"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M295.392 217.732C294.07 212.12 302.492 202.304 315.037 199.35C327.582 196.395 338.713 196.92 343.531 201.237C350.497 207.478 335.481 218.179 322.936 221.133C310.391 224.087 297.598 227.1 295.392 217.732Z"
        />
        <path
          d="M68.6604 137.323C-22.5402 234.453 33.5132 374.239 145.706 368.605C244.64 360.458 234.97 214.667 287.083 198.287C370.756 171.988 514.258 100.907 433.484 33.7957C356.608 -30.0772 142.839 58.3226 68.6604 137.323Z"
        />
      </svg>
    </div>
  </section>
</template>
<style scoped>
#space-book {
  padding-top: 220px;
  padding-bottom: 220px;
}
.bg-img {
  top: 0px;
}

.space-1 {
  width: 173px;
  height: 189px;
  margin-top: 100px;
  margin-bottom: 200px;
}
.space-2 {
  width: 542px;
  height: 295px;
}
.space-1 img,
.space-2 img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media screen and (max-width: 1200px) {
  #space-book {
    padding-top: 50px;
    padding-bottom: 0px;
  }
}
@media screen and (max-width: 992px) {
  #space-book {
    padding-top: 50px;
    padding-bottom: 0px;
  }

  .space-1 {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .space-2 {
    max-width: 100%;
    height: auto;
  }
}
</style>
