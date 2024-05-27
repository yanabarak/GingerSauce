<template>
  <section class="align-self-start col-12 section-book" id="values-book">
    <div class="content">
      <h1 class="mb-4">Core Values</h1>
      <p>
        Company values matter. Every successful company has a set of company values to assist their
        employees in achieving their goals as well as the company’s. They are the essence of the
        company’s identity and summarises the purpose of their existence. Company values are a guide
        on how the company should run and they are normally integrated in the company’s mission
        statement. Companies should try to establish their company values as a team instead of just
        the leader or management. By doing so, everyone in the company would feel belong and they
        would feel needed and not neglected.
      </p>
      <ul class="mt-60 mb-50">
        <li class="d-flex gap-4">
          <div class="icon flex-shrink-0 align-self-start">
            <svg class="icon icon-value_item" width="38" height="41">
              <use href="@/assets/icons/symbol-defs.svg#icon-value_item"></use>
            </svg>
          </div>
          <div class="text">
            <h3 class="fs-24 fw-light mb-2">Outsourcing with an In-house Feeling</h3>
            <p class="fs-12">
              Guberman is in close contact with its clients and provides integrative and advanced
              outsourcing solutions tailored to each client based on many years of experience in the
              field of outsourcing.
            </p>
          </div>
        </li>

        <li class="d-flex gap-4">
          <div class="icon flex-shrink-0 align-self-start">
            <svg class="icon icon-value_item" width="38" height="41">
              <use href="@/assets/icons/symbol-defs.svg#icon-value_item"></use>
            </svg>
          </div>
          <div class="text">
            <h3 class="fs-24 fw-light mb-2">Outsourcing with an In-house Feeling</h3>
            <p class="fs-12">
              Guberman is in close contact with its clients and provides integrative and advanced
              outsourcing solutions tailored to each client based on many years of experience in the
              field of outsourcing.
            </p>
          </div>
        </li>

        <li class="d-flex gap-4">
          <div class="icon flex-shrink-0 align-self-start">
            <svg class="icon icon-value_item" width="38" height="41">
              <use href="@/assets/icons/symbol-defs.svg#icon-value_item"></use>
            </svg>
          </div>
          <div class="text">
            <h3 class="fs-24 fw-light mb-2">Outsourcing with an In-house Feeling</h3>
            <p class="fs-12">
              Guberman is in close contact with its clients and provides integrative and advanced
              outsourcing solutions tailored to each client based on many years of experience in the
              field of outsourcing.
            </p>
          </div>
        </li>

        <li class="d-flex gap-4">
          <div class="icon flex-shrink-0 align-self-start">
            <svg class="icon icon-value_item" width="38" height="41">
              <use href="@/assets/icons/symbol-defs.svg#icon-value_item"></use>
            </svg>
          </div>
          <div class="text">
            <h3 class="fs-24 fw-light mb-2">Outsourcing with an In-house Feeling</h3>
            <p class="fs-12">
              Guberman is in close contact with its clients and provides integrative and advanced
              outsourcing solutions tailored to each client based on many years of experience in the
              field of outsourcing.
            </p>
          </div>
        </li>

        <li class="d-flex gap-4">
          <div class="icon flex-shrink-0 align-self-start">
            <svg class="icon icon-value_item" width="38" height="41">
              <use href="@/assets/icons/symbol-defs.svg#icon-value_item"></use>
            </svg>
          </div>
          <div class="text">
            <h3 class="fs-24 fw-light mb-2">Outsourcing with an In-house Feeling</h3>
            <p class="fs-12">
              Guberman is in close contact with its clients and provides integrative and advanced
              outsourcing solutions tailored to each client based on many years of experience in the
              field of outsourcing.
            </p>
          </div>
        </li>
      </ul>
      <DownloadBtn />
    </div>
    <div class="bg-img">
      <svg
        width="469"
        height="433"
        viewBox="0 0 469 433"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M428.788 226.167C430.835 230.351 440.661 231.932 449.443 227.057C458.224 222.183 464.437 215.909 465.074 210.658C465.995 203.068 451.888 204.463 443.106 209.337C434.325 214.212 425.37 219.183 428.788 226.167Z"
        />
        <path
          d="M140.352 342.627C38.5454 331.185 1.00713 214.609 69.1108 158.136C130.761 110.306 198.3 205.814 236.841 188.11C298.722 159.685 417.887 127.033 404.571 211.789C391.897 292.455 223.157 351.933 140.352 342.627Z"
        />
      </svg>
    </div>
  </section>
</template>
<script setup>
import DownloadBtn from './DownloadBtn.vue';
</script>
<style scoped>
#values-book {
  padding-bottom: 60px;
}
ul {
  list-style: none;
  padding: 0px;
}
ul li:not(:last-child) {
  margin-bottom: 50px;
}
ul .fs-12 {
  line-height: 1.7;
  margin-bottom: 0px;
}
</style>
