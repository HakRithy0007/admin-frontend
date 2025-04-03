<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const handleSubmit = (event: Event) => {
  event.preventDefault()
  if (username.value === 'ADMIN1' && password.value === '123456') {
    router.push({ path: '/dashboard/home' })
  }else{
    alert('Invalid username of password')
  }
}
</script>

<template>
  <div class="flex flex-col gap-6 md:flex-row md:gap-12 justify-center">
    <Card class="overflow-hidden md:w-1/2 ">
      <CardContent class="grid p-0 md:grid-cols-1">
        <form @submit="handleSubmit" class="p-6 md:p-8">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center text-center">
              <h1 class="text-2xl font-bold">LOGIN</h1>
            </div>
            <div class="grid gap-2">
              <Label for="username">Username :</Label>
              <Input id="text" type="text" v-model="username" required />
            </div>
            <div class="grid gap-2">
              <div class="flex items-center">
                <Label for="password">Password :</Label>
              </div>
              <Input id="password" type="password" v-model="password" required />
              <a href="#" class="ml-auto text-sm underline-offset-2 hover:underline">
                Forgot your password?
              </a>
            </div>
            <Button type="submit" class="w-full">Login</Button>
            <div class="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border"></div>
            <div class="text-center text-sm">
              Don&apos;t have an account?
              <a href="#" class="underline underline-offset-4">Sign up</a>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
