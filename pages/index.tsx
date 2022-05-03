import { Grid, Input, Page } from '@geist-ui/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Content from '../components/content'

const Home: NextPage = () => {
  const [url, setUrl] = useState("");

  return (
    <div>
      <Head>
        <title>12ft | Access articles behind paywall</title>
        <meta name="description" content="Acess articles behind paywalls" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="dashboard__wrapper p-4">
      <div className="flex flex-col">
        <div className="w-full flex flex-1">
          <Input
            clearable
            placeholder="enter your url"
            onChange={(e) => setUrl(e.target.value)}
            width="100%"
          />
        </div>
        <Page padding={0} margin={0}>
          <Content url={url} />
        </Page>
      </div>
      <Grid.Container gap={2} justify="center" className="border-box">
        <Grid xs={24} className="w-100"></Grid>
        <Grid xs={24}></Grid>
      </Grid.Container>
    </div>
    </div>
  )
}

export default Home
