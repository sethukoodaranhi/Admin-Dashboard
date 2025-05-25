import React from 'react'
import CardTiles from '../Common/CardTiles'

function Tiles() {
    const tilesData = [
        {
            title: 'User Count',
            value: 120,
            icon: 'ph:users-three'
        },
        {
            title: 'Active Sessions',
            value: 45,
            icon: 'carbon:prompt-session'
        },
        {
            title: "Pending Requests",
            value: 8,
            icon: 'charm:git-request'
        }
    ]
    return (
        <>
            <CardTiles data={tilesData} />

        </>
    )
}

export default Tiles
