import NextLink from 'next/link'
import StitchesLogo from './StitchesLogo'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <header>
        <nav style={{ backgroundColor: 'red' }}>
          <StitchesLogo />
          <ul>
            <li>
              <NextLink href="/login">Login</NextLink>
            </li>
            <li>
              <NextLink href="/signup">SignUp</NextLink>
            </li>
          </ul>
        </nav>
      </header>
      <main style={{ flexGrow: 1 }}>{children}</main>
      <footer style={{ backgroundColor: 'red' }}>Footer</footer>
    </div>
  )
}

export default Layout
