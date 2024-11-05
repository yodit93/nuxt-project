<template>
    <div>
        <header>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/events">Events</NuxtLink>
          </header>
          <slot />
          <footer>
            <p>&copy; 2024</p>
          </footer>
    </div>
</template>