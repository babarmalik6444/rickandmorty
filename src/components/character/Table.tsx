import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { CharacterResult, CharacterParams, CharacterDetails }  from '../common/interface/characters.interface'
import {GET_CHARACTERS , GET_CHARACTER_DETAILS} from '../common/queries/characters'
import  Pagination from '../common/includes/Pagination'
import  TableInfo from '../common/includes/TableInfo'
import Details from "./Details";


const Table = () => {

  const [page, setPage] = useState<number>(1);
  const handlePages = (updatePage: number) => setPage(updatePage);

  const [showDetails, setDetailsModal] = useState<boolean>(false);
  const modalHandler = (isShow:boolean) => setDetailsModal(isShow)

  const [charId, setChatId] = useState<number>(0);
  const charIdHandler = (charId:number) => {
      setDetailsModal(true)
      setChatId(charId)
  } 

  const { loading, error, data  } = useQuery<CharacterResult, CharacterParams>(GET_CHARACTERS, { variables: { page: page } });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  
  return <div><table className="table caption-top">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Species</th>
                            <th scope="col">Type</th>
                            <th scope="col">Gender</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.characters.results.map(( char ) => (
                        <tr key={char.id}>
                            <td>{char.id}</td>
                            <td><img height={50} width={50} className='img-responsive' src={char.image} /></td>
                            <td>{char.name}</td>
                            <td>{char.status}</td>
                            <td>{char.species}</td>
                            <td>{char.type}</td>
                            <td>{char.gender}</td>
                            <td><button onClick={()=>charIdHandler(char.id)} className='btn btn-outline-primary' >View</button></td>
                        </tr>
                        ))}
                    </tbody>
            </table>
            <div className='row'>
                <div className='col-md-6'>
                    <TableInfo  totalPages={data?.characters.info.count} />
                </div>
                <div className='col-md-6'>
                    <Pagination
                        next={data?.characters.info.next}
                        prev={data?.characters.info.prev}
                        page={page}
                        totalPages={data?.characters.info.count}
                        handlePagination={handlePages}
                    />
                </div>
            </div>
            {charId > 0 &&
            <Details id={charId} isShow={showDetails} onCloseModal={setDetailsModal} />
            }
          </div>
}

export default Table
