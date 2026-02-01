'use client'

import { motion } from 'framer-motion'
import { EmailForm } from '@/components/email-form'
import { Clock, Phone, MousePointer, Eye, ArrowRight, XCircle } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-black">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            FTC &quot;Click to Cancel&quot; Rule Now in Effect
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Stop wasting hours on
            <br />
            <span className="gradient-text">impossible cancellations.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
          >
            Companies hide cancel buttons. Force you to call. Make you navigate 17 screens.
            <strong className="text-white"> UnsubScribe handles the dark patterns for you.</strong>
          </motion.p>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-md mx-auto"
          >
            <EmailForm 
              source="hero" 
              buttonText="Join Waitlist"
              placeholder="you@email.com"
            />
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mt-8 text-white/40 text-sm"
          >
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500/60 to-orange-500/60 border-2 border-background" />
              ))}
            </div>
            <span>200+ frustrated subscribers on the waitlist</span>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Sound familiar?
            </h2>
            <p className="text-white/60 text-lg">
              These &quot;dark patterns&quot; cost Americans $2.6B/year in unwanted subscriptions.
            </p>
          </motion.div>

          {/* Problem cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { 
                icon: Phone, 
                title: "\"Please call to cancel\"", 
                desc: "You clicked 'Subscribe' in 10 seconds. But to cancel? 45 minutes on hold with retention specialists trained to keep you paying." 
              },
              { 
                icon: MousePointer, 
                title: "Hidden cancel buttons", 
                desc: "Buried 7 menus deep. Gray text on gray background. A tiny link that says 'Manage Plan' but never 'Cancel.'" 
              },
              { 
                icon: Eye, 
                title: "Guilt trip gauntlets", 
                desc: "\"Are you SURE?\" \"You'll lose EVERYTHING!\" \"Your pet will be sad!\" Emotional manipulation designed to make you give up." 
              },
              { 
                icon: XCircle, 
                title: "Cancellation... pending?", 
                desc: "You finally cancelled. Or did you? Check back in 30 days when they charge you again because the request \"didn't process.\"" 
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/20 transition-colors"
              >
                <item.icon className="w-8 h-8 text-red-400/80 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              One click. Actually cancelled.
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              UnsubScribe fights dark patterns so you don&apos;t have to. 
              Tell us what to cancel, and we handle the rest.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="space-y-6">
            {[
              { 
                num: "01", 
                title: "Get your time back", 
                desc: "Average cancellation takes 23 minutes of your time. With UnsubScribe, it's 23 seconds. We navigate the maze, sit on hold, and confirm the cancellation—you just move on with your life." 
              },
              { 
                num: "02", 
                title: "Stop paying for stuff you don't use", 
                desc: "The average American wastes $273/month on forgotten subscriptions. We'll cancel everything you're done with and give you a clear view of what's left." 
              },
              { 
                num: "03", 
                title: "Proof it's actually cancelled", 
                desc: "No more \"we didn't receive your request\" games. We document everything—screenshots, confirmation numbers, timestamps—so you have receipts if they try to charge you again." 
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <span className="text-4xl font-bold text-primary/30">{item.num}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-4 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Real frustration. Real relief.
            </h2>
            <p className="text-white/60 text-lg mb-12">
              We&apos;ve all been there.
            </p>
          </motion.div>

          {/* Testimonials */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { 
                quote: "I spent 2 hours trying to cancel my gym membership. They said I had to come in person. I moved states. This is insane.", 
                name: "Alex M.", 
                role: "Victim of Planet Fitness" 
              },
              { 
                quote: "NYT made me click through 6 different 'are you sure?' screens, each with different discount offers. Just let me leave!", 
                name: "Jessica T.", 
                role: "Former subscriber" 
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5 text-left"
              >
                <p className="text-white/80 mb-4">&quot;{item.quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500/60 to-orange-500/60" />
                  <div>
                    <p className="text-white font-medium text-sm">{item.name}</p>
                    <p className="text-white/40 text-xs">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to break free?
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Join the waitlist and be first to escape subscription hell.
              <br />
              <span className="text-primary">Early members get their first 3 cancellations free.</span>
            </p>

            <EmailForm 
              source="footer" 
              buttonText="Get Early Access"
              placeholder="your@email.com"
              className="max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center text-white/30 text-sm">
          © 2025 UnsubScribe. Fighting dark patterns so you don&apos;t have to.
        </div>
      </footer>
    </main>
  )
}
