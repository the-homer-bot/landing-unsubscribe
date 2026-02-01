'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

interface EmailFormProps {
  source?: string
  buttonText?: string
  placeholder?: string
  className?: string
}

export function EmailForm({ 
  source = 'hero',
  buttonText = 'Get Early Access',
  placeholder = 'Enter your email',
  className = ''
}: EmailFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })

      if (res.ok) {
        setStatus('success')
        // Redirect to thank you page after brief delay
        setTimeout(() => {
          window.location.href = '/thank-you'
        }, 500)
      } else {
        const data = await res.json()
        setError(data.error || 'Something went wrong')
        setStatus('error')
      }
    } catch {
      setError('Failed to subscribe. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center gap-2 text-green-400 ${className}`}
      >
        <Check className="w-5 h-5" />
        <span>You&apos;re in! Redirecting...</span>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
        />
        <Button 
          type="submit" 
          size="lg"
          disabled={status === 'loading'}
          className="group"
        >
          {status === 'loading' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              {buttonText}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </div>
      {error && (
        <p className="text-red-400 text-sm mt-2">{error}</p>
      )}
      <p className="text-white/40 text-xs mt-3">
        No spam, ever. Unsubscribe anytime.
      </p>
    </form>
  )
}
