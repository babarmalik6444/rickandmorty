import { render, cleanup } from '@testing-library/react'
import Epiodes from '../components/episode/Episodes'
import { MockedProvider } from '@apollo/client/testing'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

afterEach(cleanup)

it("should render the Epiodes", async () => {
    const client = new ApolloClient({
      cache: new InMemoryCache()
    })
  
    const { debug } = render(
      <ApolloProvider client={client}>
        <Epiodes />
      </ApolloProvider>
    )
    debug()
})


test('Character Loading Test', async () => {

  const { debug } = render(
    <MockedProvider>
      <Epiodes />
    </MockedProvider>
  );

  debug()

});



test('Character Loading Data', async () => {

    const { debug } = render(
      <MockedProvider>
        <Epiodes />
      </MockedProvider>
    );
  
    debug()
    await Promise.resolve();
    debug()
  
  });