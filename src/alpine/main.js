import Alpine from 'alpinejs'

Alpine.data('courseFilters', () => ({
  activeFilter: 'all',
  setFilter(filter) {
    this.activeFilter = filter
  },
  isActive(filter) {
    return this.activeFilter === filter
  },
}))

window.Alpine = Alpine
Alpine.start()
