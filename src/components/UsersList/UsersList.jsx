import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../Common/Modal'
import AddUsers from './AddUsers'
import { SetUserLists } from '../../redux/reducers/slices/usersSlice'

function UsersList({ isLoading, data }) {
    const usersData = useSelector((state) => state?.users?.users)
    const [openAddModal, setopenAddModal] = useState(false)
    const [searchVal, setsearchVal] = useState('')
    const [sortAsc, setSortAsc] = useState(true);
    console.log("===usersData===", usersData)
    const dispatch = useDispatch()
    const closeModal = () => {
        setopenAddModal(false)
    }
    const searchChangeHandler = (e) => {
        const { value } = e.target
        setsearchVal(value)

    }
    const searchHandler = () => {
        const filteredData = usersData?.filter((user) =>
            user.name.toLowerCase().includes(searchVal.toLowerCase())
        );
        dispatch(SetUserLists(filteredData));
    };
    const resetHandler = () => {
        setsearchVal('')
        dispatch(SetUserLists(data))
    }
    const sortHandler = () => {
        const sortedUsers = [...usersData]?.sort((a, b) => {
            return sortAsc
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        });
        dispatch(SetUserLists(sortedUsers));
        setSortAsc(!sortAsc);
    }
    return (
        <>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-white p-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h2 className="text-xl font-semibold mb-2 md:mb-0">Users</h2>
                    <div className="flex flex-col sm:flex-row gap-2 sm:items-center w-full sm:w-auto float-end">
                        <div className="flex flex-col sm:flex-row items-center gap-2">
                            <input
                                id="search"
                                type="text"
                                value={searchVal}
                                onChange={searchChangeHandler}
                                placeholder="Search by name"
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            />
                            <button
                                onClick={searchHandler}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                            >
                                Search
                            </button>
                            <button
                                onClick={resetHandler}
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300"
                            >
                                Reset
                            </button>
                            <button
                                onClick={sortHandler}
                                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                            >
                                Sort by Name {sortAsc ? '↑ A-Z' : '↓ Z-A'}
                            </button>
                        </div>

                        <button
                            className="bg-[#fe766a] text-white rounded-lg px-4 py-2 cursor-pointer transition duration-300 hover:bg-[#fc5e4e]"
                            onClick={() => setopenAddModal(true)}
                        >
                            Add +
                        </button>
                    </div>
                </div>



                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-[#13097d] text-white">
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading
                            ? Array.from({ length: 5 }).map((_, i) => (
                                <tr key={i} className="border-b">
                                    <td className="px-4 py-3">
                                        <Skeleton height={20} width={`80%`} />
                                    </td>
                                    <td className="px-4 py-3">
                                        <Skeleton height={20} width={`90%`} />
                                    </td>
                                    <td className="px-4 py-3">
                                        <Skeleton height={20} width={`70%`} />
                                    </td>
                                </tr>
                            ))
                            : usersData?.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100 border-b">
                                    <td className="px-4 py-2">{item.name}</td>
                                    <td className="px-4 py-2">{item.email}</td>
                                    <td className="px-4 py-2">{item.company.name}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <Modal isOpen={openAddModal} onClose={closeModal}>
                <AddUsers closeModal={closeModal} />
            </Modal>
        </>

    )
}

export default UsersList
