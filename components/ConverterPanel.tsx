"use client"

import React, { useEffect, useState } from 'react'
import jsonToToon from '../lib/jsonToToon'
import toonToJson from '../lib/toonToJson'
import TokenStats from './TokenStats'
import { useToast } from './Toaster'
import CodeEditor from './CodeEditor'
import ExampleButtons from './ExampleButtons'

type Props = { initialJson?: string; onJsonChange?: (s: string) => void }

export default function ConverterPanel({ initialJson, onJsonChange }: Props) {
    const toast = useToast()
    const exampleA = `{
    "users": [
        { "id": 1, "name": "Alice", "role": "admin" },
        { "id": 2, "name": "Bob", "role": "user" }
    ]
}`

    const [jsonText, setJsonText] = useState(initialJson || exampleA)
    const [toonText, setToonText] = useState('')

    useEffect(() => { if (onJsonChange) onJsonChange(jsonText) }, [jsonText])

    function convertToToon() {
        try {
            const parsed = JSON.parse(jsonText)
            const t = jsonToToon(parsed)
            setToonText(t)
            toast('Converted to TOON', 'success')
        } catch (err) {
            toast('Invalid JSON: ' + (err as Error).message, 'error')
        }
    }

    function convertToJson() {
        try {
            const parsed = toonToJson(toonText)
            const s = JSON.stringify(parsed, null, 2)
            setJsonText(s)
            toast('Converted to JSON', 'success')
        } catch (err) {
            toast('TOON parse error: ' + (err as Error).message, 'error')
        }
    }

    async function copy(text: string) {
        try {
            await navigator.clipboard.writeText(text)
            toast('Copied to clipboard', 'success')
        } catch (err) {
            toast('Copy failed', 'error')
        }
    }


    return (
        <div className="grid md:grid-cols-2 gap-6">
            <div className="p-2">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">JSON Input</h3>
                    <ExampleButtons onLoad={s => setJsonText(s)} />
                </div>
                <CodeEditor label="JSON Input" value={jsonText} onChange={setJsonText} language="json" />
                <div className="flex gap-3 mt-3">
                    <button onClick={convertToToon} className="btn btn-primary">Convert to TOON</button>
                    <button onClick={() => copy(jsonText)} className="btn btn-ghost">Copy JSON</button>
                </div>
            </div>

            <div className="p-2">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">TOON Output</h3>
                </div>
                <CodeEditor label="TOON Output" value={toonText} onChange={setToonText} language="text" />
                <div className="flex gap-3 mt-3">
                    <button onClick={convertToJson} className="btn btn-primary">Convert to JSON</button>
                    <button onClick={() => copy(toonText)} className="btn btn-ghost">Copy TOON</button>
                </div>
            </div>

            <div className="md:col-span-2 mt-4">
                <div className="p-4 border rounded-lg bg-base-100">
                    <TokenStats jsonText={jsonText} toonText={toonText} />
                </div>
            </div>
        </div>
    )
}
