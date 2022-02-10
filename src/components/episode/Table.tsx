import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { EpisodesResult, EpisodesParams } from '../common/interface/episodes.interface'
import { GET_EPISODES } from '../common/queries/episodes'
import  Pagination from '../common/includes/Pagination'
import  TableInfo from '../common/includes/TableInfo'
import Details from './Details'
import moment from 'moment'

const Table = () => {
        const [page, setPage] = useState(1);
        const handlePages = (updatePage: number) => setPage(updatePage);

        const [showDetails, setDetailsModal] = useState<boolean>(false);
        const modalHandler = (isShow:boolean) => setDetailsModal(isShow)

        const [epId, setEpId] = useState<number>(0);
        const epIdHandler = (epId:number) => {
            setDetailsModal(true)
            setEpId(epId)
        }

        const { loading, error, data  } = useQuery<EpisodesResult, EpisodesParams>(GET_EPISODES, { variables: { page: page } });

        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return <div><table className="table caption-top">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Air Date</th>
                                    <th scope="col">episode</th>
                                    <th scope="col">Creation Date</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.episodes.results.map(( episode ) => (
                                <tr key={episode.id}>
                                    <td>{episode.id}</td>
                                    <td>{episode.name}</td>
                                    <td>{episode.air_date}</td>
                                    <td>{episode.episode}</td>
                                    <td>{moment(episode.created).format("DD.MM.YYYY")}</td>
                                    <td><button className='btn btn-outline-primary' onClick={()=>epIdHandler(episode.id)}>View</button></td>
                                </tr>
                                ))}
                            </tbody>
                    </table>
                    <div className='row'>
                        <div className='col-md-6'>
                            <TableInfo  totalPages={data?.episodes.info.count} />
                        </div>
                        <div className='col-md-6'>
                            <Pagination
                                next={data?.episodes.info.next}
                                prev={data?.episodes.info.prev}
                                page={page}
                                totalPages={data?.episodes.info.count}
                                handlePagination={handlePages}
                            />
                        </div>
                    </div>
                    {epId > 0 &&
                    <Details id={epId} isShow={showDetails} onCloseModal={modalHandler} />
                    }
                </div>
}

export default Table

