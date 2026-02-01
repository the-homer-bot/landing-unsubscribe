'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check, Twitter, Linkedin, Copy, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const SHARE_TEXT = "Just joined the UnsubScribe waitlist - finally, someone fighting those impossible cancellation dark patterns! 🔥"
const PRODUCT_URL = "https://landing-unsubscribe.vercel.app"

export default function ThankYouPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(PRODUCT_URL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(PRODUCT_URL)}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PRODUCT_URL)}`

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-black flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-8"
        >
          <Check className="w-10 h-10 text-green-400" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          You&apos;re in! 🎉
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/60 text-lg mb-8"
        >
          Welcome to the fight against dark patterns.
          <br />
          <span className="text-primary">Your first 3 cancellations are on us.</span>
        </motion.p>

        {/* What's Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/[0.02] border border-white/5 rounded-xl p-6 mb-8 text-left"
        >
          <h2 className="text-white font-semibold mb-4">What happens next?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-white/60 text-sm">
              <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Check your inbox for a confirmation (no dark patterns, we promise)</span>
            </li>
            <li className="flex items-start gap-3 text-white/60 text-sm">
              <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span>We&apos;re building fast - expect early access within weeks</span>
            </li>
            <li className="flex items-start gap-3 text-white/60 text-sm">
              <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Reply to tell us which subscription has been your cancellation nightmare</span>
            </li>
          </ul>
        </motion.div>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-white/40 text-sm mb-4">Know someone stuck in subscription hell? Help them escape:</p>
          <div className="flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(twitterUrl, '_blank')}
              className="gap-2"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(linkedinUrl, '_blank')}
              className="gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="gap-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Link'}
            </Button>
          </div>
        </motion.div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to homepage
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
