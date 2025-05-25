import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import addUserSchema from '../../schema/addUsers'
import { useDispatch } from 'react-redux'
import { setAddUsers, SetUserLists } from '../../redux/reducers/slices/usersSlice'

function AddUsers({closeModal}) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(addUserSchema)
    })
    const dispatch = useDispatch()
    const addUserHandler = (data) => {
        const usersData = {
            name: data.name,
            email: data.email,
            company: {
                name: data.companyName
            }
        }
        dispatch(setAddUsers(usersData))
        closeModal()
    }
    return (
        <form onSubmit={handleSubmit(addUserHandler)}>
            <h2 className='text-xl font-semibold mb-4'>Add New User</h2>

            <div className="mb-4">
                <label>Name</label>
                <input
                    type='text'
                    {...register('name')}
                    className={`border ${errors?.name?.message ? 'border-red-600 focus:ring-red-600 focus:border-red-600' : 'border-gray-300 focus:ring-[#a0bed8] focus:border-[#a0bed8]'} rounded-md px-4 py-2 w-full bg-white focus:outline-none`}
                />
                <p className='text-red-600 text-left mt-1'>{errors?.name?.message}</p>
            </div>

            <div className="mb-4">
                <label>Email</label>
                <input
                    type='text'
                    {...register('email')}
                    className={`border ${errors?.email?.message ? 'border-red-600 focus:ring-red-600 focus:border-red-600' : 'border-gray-300 focus:ring-[#a0bed8] focus:border-[#a0bed8]'} rounded-md px-4 py-2 w-full bg-white focus:outline-none`}
                />
                <p className='text-red-600 text-left mt-1'>{errors?.email?.message}</p>
            </div>

            <div className="mb-4">
                <label>Company Name</label>
                <input
                    type='text'
                    {...register('companyName')}
                    className={`border ${errors?.companyName?.message ? 'border-red-600 focus:ring-red-600 focus:border-red-600' : 'border-gray-300 focus:ring-[#a0bed8] focus:border-[#a0bed8]'} rounded-md px-4 py-2 w-full bg-white focus:outline-none`}
                />
                <p className='text-red-600 text-left mt-1'>{errors?.companyName?.message}</p>
            </div>

            <button
                className="bg-[#13097d] text-white rounded-lg px-4 py-2 cursor-pointer transition duration-300 hover:bg-[#4e4efc]"
                type='submit'
            >
                Add +
            </button>
        </form>

    )
}

export default AddUsers