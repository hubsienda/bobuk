import { ButtonLink } from '@/components/ButtonLink'

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <p className="eyebrow">404</p>
        <h1>This page seems to have gone missing.</h1>
        <p>The trail ends here, but the rest of the site is still where it should be.</p>
        <ButtonLink href="/">Return home</ButtonLink>
      </div>
    </div>
  )
}
