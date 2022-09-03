import Head from 'next/head'
import StitchesLogo from 'components/StitchesLogo'
import { styled } from 'stitches.config'
import { NextPageWithLayout } from './_app'
import Layout from 'components/Layout'

const Box = styled('div', {})

const Text = styled('p', {
  fontFamily: '$gotham',
  color: '$hiContrast',
})

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$purple600',
})

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
})

const Home: NextPageWithLayout = () => {
  return (
    <Box css={{ paddingY: '$6' }}>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <Container size={{ '@initial': '1', '@bp1': '2' }}>
        <StitchesLogo />
        <Text as="h1">Hello, from Stitches.</Text>
        <Text>
          For full documentation, visit{' '}
          <Link href="https://stitches.dev">stitches.dev</Link>.
        </Text>
      </Container>
    </Box>
  )
}

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Home
