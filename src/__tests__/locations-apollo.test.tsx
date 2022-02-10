import { render, cleanup } from '@testing-library/react'
import Locations from '../components/locations/Locactions'
import { MockedProvider } from '@apollo/client/testing'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

afterEach(cleanup);

it("should render the Locations", async () => {
    const client = new ApolloClient({
      cache: new InMemoryCache()
    })
  
    const { debug } = render(
      <ApolloProvider client={client}>
        <Locations />
      </ApolloProvider>
    )
    debug()
})


test('Character Loading Test', async () => {

  const { debug } = render(
    <MockedProvider>
      <Locations />
    </MockedProvider>
  );

  debug()

});



test('Character Loading Data', async () => {

    const { debug } = render(
      <MockedProvider>
        <Locations />
      </MockedProvider>
    );
  
    debug()
    await Promise.resolve();
    debug()
  
  });
