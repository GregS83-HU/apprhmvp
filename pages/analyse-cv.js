'use client'

import { useState } from 'react'

export default function AnalyseCV() {
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const text = await file.text()

    setLoading(true)
    const res = await fetch('/api/analyse-cv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })

    const data = await res.json()
    setResult(data.analysis)
    setLoading(false)
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Analyse de CV</h1>
      <input type="file" accept=".txt,.pdf,.doc,.docx" onChange={handleFileChange} />
      {loading && <p>Analyse en cours…</p>}
      {result && (
        <div>
          <h2>Résultat :</h2>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  )
}