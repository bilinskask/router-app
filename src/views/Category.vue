<template>
    <BaseWrapper>
      <ul v-if="items">
        <li v-for="item in items" :key="item.id">
          <BaseCard
          class="category--list"
          >
          <h2>
            {{item.brand}}
          </h2>
          <h3>
            {{item.price}}
          </h3>
          </BaseCard>
        </li>
      </ul>
    </BaseWrapper>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseWrapper from '@/components/BaseWrapper.vue'
import BaseCard from '@/components/BaseCard.vue'
export default {
  name: 'Category',
  components: {
    BaseWrapper,
    BaseCard
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

  }

}
</script>

<style>

</style>
