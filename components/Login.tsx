'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUpFacebook = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
      options: {
        redirectTo: process.env.NEXT_PUBLIC_URL,
      },
    })
    router.refresh()
  }

  return (
    <form>
      <button type='button' onClick={handleSignUpFacebook}>
        Log in with facebook
      </button>
    </form>
  )
}
