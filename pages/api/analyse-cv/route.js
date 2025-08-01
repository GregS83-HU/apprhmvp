import { NextResponse } from 'next/server'

export async function POST(req) {
  const { text } = await req.json()

  const prompt = `
Tu es un recruteur RH. Analyse ce CV et extrait les éléments suivants :
- Nom complet (si présent)
- Expériences clés
- Compétences techniques
- Diplômes
- Langues
- Recommandation pour un poste de développeur web junior

CV :
${text}
`

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  const json = await response.json()
  const analysis = json.choices?.[0]?.message?.content || 'Erreur lors de l’analyse'

  return NextResponse.json({ analysis })
}