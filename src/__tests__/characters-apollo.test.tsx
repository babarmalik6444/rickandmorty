import { render, cleanup } from '@testing-library/react'
import Characters from '../components/character/Characters'
import { MockedProvider } from '@apollo/client/testing'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

afterEach(cleanup)

it("should render the Characters", async () => {
    const client = new ApolloClient({
      cache: new InMemoryCache()
    })
  
    const { debug } = render(
      <ApolloProvider client={client}>
        <Characters />
      </ApolloProvider>
    )
    debug()
})


test('Character Loading Test', async () => {

  const { debug } = render(
    <MockedProvider>
      <Characters />
    </MockedProvider>
  );

  debug()

});



test('Character Loading Data', async () => {

    const { debug } = render(
      <MockedProvider>
        <Characters />
      </MockedProvider>
    );
  
    debug()
    await Promise.resolve();
    debug()
  
  });