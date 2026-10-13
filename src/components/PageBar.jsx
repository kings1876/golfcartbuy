import Breadcrumbs from './Breadcrumbs'

// Dark title bar used at the top of listing and content pages.
export default function PageBar({ breadcrumbs, eyebrow, title, lead }) {
  return (
    <section className="page-bar">
      <div className="container">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {lead && <p className="page-lead">{lead}</p>}
      </div>
    </section>
  )
}
