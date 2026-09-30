import { useEffect, useRef } from 'react'
import type { Certificate } from '../data/content'
import { ExternalIcon } from './Icons'

interface Props {
  cert: Certificate
  onClose: () => void
}

/** Accessible image lightbox: Esc / backdrop / button to close, focus trapped, scroll locked. */
export default function CertificateLightbox({ cert, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab' || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button, a[href]')
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      previouslyFocused?.focus()
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/80 p-3 pb-16 pt-16 sm:p-6 sm:pb-16 sm:pt-16"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Official certificate"
        className="flex max-h-full max-w-full items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          autoFocus
          type="button"
          onClick={onClose}
          aria-label="Close certificate"
          className="btn-ghost fixed right-3 top-3 !px-3 sm:right-5 sm:top-5"
        >
          <span aria-hidden>✕</span>
        </button>
        {/* h-auto/w-auto + max constraints keep the original aspect ratio and stay inside the viewport */}
        <img
          src={cert.src}
          alt={cert.alt}
          className="h-auto max-h-[calc(100dvh-8rem)] w-auto max-w-full rounded bg-white object-contain shadow-2xl"
        />
        <a
          href={cert.src}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost fixed bottom-3 left-1/2 -translate-x-1/2 !min-h-[40px] sm:bottom-5"
        >
          <span>Open full size</span>
          <ExternalIcon />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  )
}
