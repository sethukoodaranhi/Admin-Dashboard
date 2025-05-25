import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from 'react-redux'
import Modal from '../Common/Modal'
import AddUsers from './AddUsers'

function UsersList({ isLoading }) {
    const usersData = useSelector((state) => state?.users?.users)
    const [openAddModal, setopenAddModal] = useState(false)
    console.log("===usersData===",usersData)
    const closeModal=()=>{
        setopenAddModal(false)
    }
    return (
        <>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-white p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Users</h2>
                    <button
                        className="bg-[#fe766a] text-white rounded-lg px-4 py-2 cursor-pointer transition duration-300 hover:bg-[#fc5e4e]"
                        onClick={() => setopenAddModal(true)}
                    >
                        Add +
                    </button>

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
                <AddUsers closeModal={closeModal}/>
            </Modal>
        </>

    )
}

export default UsersList
