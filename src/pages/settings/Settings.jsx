import React, { useState } from 'react'
import userPic from '../../assets/images/user.png'
import { Icon } from '@iconify/react'
import Modal from '../../components/Common/Modal'
import EditUser from '../../components/Settings/EditUser'
function Settings() {
  const username = localStorage.getItem('name')
  const email = localStorage.getItem('email')
  const [openModal, setopenModal] = useState(false)
  const closeModal = () => {
    setopenModal(false)
  }
  const editData = {
    name: username,
    email: email
  }
  return (
    <>
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-sm p-6">
        <button className="absolute top-4 right-4 bg-gray-200 hover:bg-blue-600 text-gray-700 cursor-pointer hover:text-white rounded-full p-2 transition duration-200 shadow-md" onClick={() => setopenModal(true)}>
          <Icon icon="material-symbols:edit-outline" width="20" height="20" />
        </button>
        <div className="flex justify-center mb-4">
          <img
            src={userPic}
            alt="User"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>

        <div className="text-center">
          <h1 className="text-xl font-semibold text-gray-800">{username}</h1>
          <h3 className="text-gray-600">{email}</h3>
        </div>
      </div>
      <Modal isOpen={openModal} onClose={closeModal}>
        <EditUser
          data={editData}
          closeModal={closeModal}

        />
      </Modal>
    </>

  )
}

export default Settings