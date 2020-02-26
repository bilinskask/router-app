<template>
    <BaseWrapper>
      <ul v-if="items" class='card'>
        <li v-for="item in items" :key="item.id" >
          <BaseCard>
          <img :src=item.image_link>
          <h3>
            {{item.name}}
          </h3>
          <BaseButton
          @click="addToCart(item.id)"
          >
          Add to cart {{item.price_sign}} {{item.price}}
          </BaseButton>
          </BaseCard>
        </li>
      </ul>
    </BaseWrapper>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    // console.log(this.$route.params.id)
    // this.loadProductData(this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      products: 'products'
    }),
    items () {
      return this.products.filter(item => item.product_type === this.$route.params.id)
    }
  },
  methods: {
    ...mapActions({
      addToCart: 'addToCart'
    })
  }

}
</script>

<style>
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    justify-content: center;
    align-content: space-between;
    text-align: center;
  }

  li {
    border-radius: 5px;
    background-color: white;
  }
</style>
