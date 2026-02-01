import { NextRequest, NextResponse } from 'next/server'

// For production, you'll connect to a real database
// Options: Vercel Postgres, Supabase, Railway Postgres, etc.

interface Subscriber {
  email: string
  source: string
  project: string
  timestamp: string
}

// In-memory storage for demo (replace with real DB)
const subscribers: Subscriber[] = []

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'unknown' } = await request.json()

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    const projectSlug = process.env.PROJECT_SLUG || 'unknown'

    // TODO: Replace with real database insert
    // Example with Vercel Postgres:
    /*
    import { sql } from '@vercel/postgres'
    
    await sql`
      INSERT INTO landing_subscribers (email, project_slug, source)
      VALUES (${email.toLowerCase()}, ${projectSlug}, ${source})
      ON CONFLICT (email, project_slug) DO NOTHING
    `
    */

    // Example with Railway/external Postgres:
    /*
    import { Pool } from 'pg'
    const pool = new Pool({ connectionString: process.env.DATABASE_URL })
    
    await pool.query(
      `INSERT INTO landing_subscribers (email, project_slug, source)
       VALUES ($1, $2, $3)
       ON CONFLICT (email, project_slug) DO NOTHING`,
      [email.toLowerCase(), projectSlug, source]
    )
    */

    // For now, just log and store in memory
    const subscriber: Subscriber = {
      email: email.toLowerCase(),
      source,
      project: projectSlug,
      timestamp: new Date().toISOString(),
    }
    
    subscribers.push(subscriber)
    console.log('New subscriber:', subscriber)

    return NextResponse.json({ 
      success: true,
      message: 'Successfully subscribed!'
    })

  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}

// GET endpoint to see subscribers (protect this in production!)
export async function GET(request: NextRequest) {
  // In production, add authentication here
  const authHeader = request.headers.get('authorization')
  const expectedToken = process.env.ADMIN_TOKEN
  
  if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({
    count: subscribers.length,
    subscribers: subscribers.slice(-50) // Last 50
  })
}
