import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-black md:rounded-b-[48px]">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
