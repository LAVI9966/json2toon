"use client"

import React, { useEffect, useState } from 'react'
import { Github, Twitter, BookOpen } from 'lucide-react'

export default function Header() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        try {
            const t = localStorage.getItem('theme')
            return (t === 'dark') ? 'dark' : 'light'
        } catch (e) { return 'light' }
    })

    useEffect(() => {
        try {
            document.documentElement.setAttribute('data-theme', theme)
            localStorage.setItem('theme', theme)
        } catch (e) { }
    }, [theme])

    return (
        <header className="app-header sticky top-0 z-30 bg-transparent">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold">JT</div>
                    <div>
                        <div className="text-sm font-semibold">JSON ⇄ TOON Converter</div>
                        <div className="text-xs text-gray-500">Convert JSON to a compact TOON format and back</div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <a className="inline-flex items-center gap-2 text-sm btn-flat" href="https://github.com" target="_blank" rel="noreferrer">
                        <Github size={16} />
                    </a>

                    <a className="btn btn-ghost btn-sm" href="#" aria-label="Tweet"><Twitter size={16} /></a>
                    <a className="btn btn-ghost btn-sm" href="#" aria-label="Docs"><BookOpen size={16} /></a>

                    <button
                        aria-label="Toggle theme"
                        onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
                        className="btn-flat text-sm"
                    >
                        {theme === 'dark' ? 'Light' : 'Dark'}
                    </button>
                </div>
            </div>
        </header>
    )
}
