<script setup lang="ts">
import { navLinks } from '../../data/portfolio'
import { Menu, X } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'"
  >
    <nav class="section-container flex items-center justify-between h-16 lg:h-20" aria-label="Main navigation">
      <a
        href="#hero"
        class="text-lg font-bold tracking-tight gradient-text"
        @click="closeMenu"
      >
        RY
      </a>

      <ul class="hidden lg:flex items-center gap-1">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="px-4 py-2 text-sm font-medium text-text-secondary rounded-lg transition-colors duration-200 hover:text-text-primary hover:bg-white/[0.05]"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <a href="#contact" class="hidden lg:inline-flex btn-primary text-sm !py-2.5 !px-5">
        Get in Touch
      </a>

      <button
        class="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/[0.05] transition-colors"
        :aria-expanded="isOpen"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <X v-if="isOpen" class="w-6 h-6" />
        <Menu v-else class="w-6 h-6" />
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="lg:hidden glass border-t border-white/[0.06]"
      >
        <ul class="section-container py-4 flex flex-col gap-1">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="block px-4 py-3 text-sm font-medium text-text-secondary rounded-lg transition-colors hover:text-text-primary hover:bg-white/[0.05]"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
          <li class="pt-2">
            <a href="#contact" class="btn-primary w-full" @click="closeMenu">
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
