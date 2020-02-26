<template>
  <div class="cart">
    <BaseWrapper>
      <ul v-if="cartItems" class='cart--item'>
        <!-- <li v-for="item in cartItems" :key="item.id" > -->
          <li v-for="item in cartItems" :key="item.id" >
          <BaseCard>
          <img :src=products[item].image_link>
          <h3>
            {{products[item].name}}
          </h3>
          <BaseButton
          @click="addToCart(item)"
          >
          Remove From Cart
          </BaseButton>
          </BaseCard>
        </li>
      </ul>
    </BaseWrapper>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseWrapper from '@/components/BaseWrapper.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseButton from '@/components/BaseButton.vue'
export default {
  name: 'Category',
  components: {
    BaseWrapper,
    BaseCard,
    BaseButton
  },
  created () {

  },
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
      products: 'products'
    })
    // itemCount () {
    //   return this.cartItems.map(item => {
    //     if (item.id) {

    //     }
    //   })
    // }
  },
  methods: {

  }

}
</script>

<style>
  .cart--item {
    display: grid;
  }

  .cart--item div {
    display: grid;
    grid-template-areas:
      "foto name count button"
      "foto name price button";
    align-items: center;
  }

  .cart--item img {
    grid-area: foto;
    width: 50%;
  }

  .cart--item h3 {
    grid-area: name;
  }

  li {

  }
</style>
