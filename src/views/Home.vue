<template>
  <div class="home">
    <BaseWrapper>
    <BaseSpinner
      v-if="isLoading"
    >
    Preparing for Makeup...
    </BaseSpinner>
    <template v-if='categories && !isLoading'>
      <ul>
        <li v-for="category in categories" :key="category">
          <BaseCard
          class="category--list"
          @click.native="handleCatClick(category)"
          >
          {{category}}
          </BaseCard>
        </li>
      </ul>
    </template>
    </BaseWrapper>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapGetters, mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import BaseWrapper from '@/components/BaseWrapper.vue'
import BaseSpinner from '@/components/BaseSpinner.vue'
import BaseCard from '@/components/BaseCard.vue'

export default {
  name: 'Home',
  components: {
    BaseWrapper,
    BaseSpinner,
    BaseCard
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
      categories: 'categories'
    })
  },
  methods: {
    // ...mapActions({
    //   routeToCategory: 'routeToCategory'
    // }),
    // async handleCatClick (category) {
    //   await this.routeToCategory(category)
    //   this.$router.push({ name: 'Category', params: { id: category } })
    // }
    handleCatClick (category) {
      this.$router.push({ name: 'Category', params: { id: category } })
    }
  }
}
</script>

<style scoped>
  .home {
    display: grid;
    background-color: pink;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
    list-style-type: none;
    padding: 0;
  }

  .category--list {
    min-width: 120px;
    min-height: 120px;
  }
</style>
