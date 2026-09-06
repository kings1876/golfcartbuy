export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>Page Not Found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
        <a href="/" className="btn btn-primary">Back to Home</a>
      </div>
    </div>
  )
}
