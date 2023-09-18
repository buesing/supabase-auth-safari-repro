'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const handleSignUpFacebook = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      },
    })
    router.refresh()
  }

  return (
    <form>
      <button type='button' onClick={handleSignUpFacebook}>
        Log in with facebook
      </button>
      <button type='button' onClick={handleSignOut}>
        Logout
      </button>
    </form>
  )
}
