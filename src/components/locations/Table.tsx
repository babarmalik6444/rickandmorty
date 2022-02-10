import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { LocationResult, LocationsParams } from '../common/interface/locations.interface'
import { GET_LOCATIONS } from '../common/queries/locations'
import  Pagination from '../common/includes/Pagination'
import  TableInfo from '../common/includes/TableInfo'
import Details from './Details'
import moment from 'moment'


const Table = () => {
        const [page, setPage] = useState(1);
        const handlePages = (updatePage: number) => setPage(updatePage);

        const [showDetails, setDetailsModal] = useState<boolean>(false);
        const modalHandler = (isShow:boolean) => setDetailsModal(isShow)

        const [locId, setLocId] = useState<number>(0);
        const locIdHandler = (locId:number) => {
            setDetailsModal(true)
            setLocId(locId)
        }

        const { loading, error, data  } = useQuery<LocationResult, LocationsParams>(GET_LOCATIONS, { variables: { page: page } });

        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return <div><table className="table caption-top">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Dimension</th>
                                    <th scope="col">Creation Date</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.locations.results.map(( locations ) => (
                                <tr key={locations.id}>
                                    <td>{locations.id}</td>
                                    <td>{locations.name}</td>
                                    <td>{locations.type}</td>
                                    <td>{locations.dimension}</td>
                                    <td>{moment(locations.created).format("DD.MM.YYYY")}</td>
                                    <td><button className='btn btn-outline-primary' onClick={() => locIdHandler(locations.id)}>View</button></td>
                                </tr>
                                ))}
                            </tbody>
                    </table>
                    <div className='row'>
                        <div className='col-md-6'>
                            <TableInfo  totalPages={data?.locations.info.count} />
                        </div>
                        <div className='col-md-6'>
                            <Pagination
                                next={data?.locations.info.next}
                                prev={data?.locations.info.prev}
                                page={page}
                                totalPages={data?.locations.info.count}
                                handlePagination={handlePages}
                            />
                        </div>
                    </div>
                    {locId > 0 &&
                    <Details id={locId} isShow={showDetails} onCloseModal={modalHandler} />
                    }
                </div>
}

export default Table

