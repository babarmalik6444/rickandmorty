import Table from "./Table"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri:'https://rickandmortyapi.com/graphql'
});

const Characters = () => {

    return <ApolloProvider client={client}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="page-header">
                            <h1>Characters</h1>
                        </div>
                            <Table />
                        </div>

                    </div>
                </div>
            </ApolloProvider>

}

export default Characters