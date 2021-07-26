<template>
  <!-- <div class="layout"> -->
    <div class="layout sticky-header">
      <header class="header sticky" data-v-7e33895e="">
        <div class="container" data-v-7e33895e="">
          <div class="left" data-v-7e33895e=""><g-link to="/" aria-current="page" class="home-link active--exact active"
              data-v-7e33895e=""><img src="/logo.svg" alt="Nichlas W. Andersen" class="logo"
                data-v-7e33895e=""></g-link></div>
          <nav class="nav right" data-v-7e33895e=""><g-link to="/journals" class="nav__link" data-v-7e33895e="">Journal</g-link><g-link
              to="/contact" class="nav__link" data-v-7e33895e="">Say Hi!</g-link></nav>
        </div>
      </header>
      <slot/>
      <footer class="footer" data-v-07acb5f8="">
      <div class="container" data-v-07acb5f8=""><span data-v-07acb5f8="">Copyright © 2021</span></div>
    </footer>
  </div>


  

</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.g-image--loading {
      display: none;
    }
</style>
