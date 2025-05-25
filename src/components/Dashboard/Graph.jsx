import React from 'react'
import RegistrationStaticsChart from './Graphs/RegistrationStaticsChart'
import GraphCard from '../Common/GraphCard';
import RoleStaticsChart from './Graphs/RoleStaticsChart';

function Graph() {
    const registrationDataSets = [
        { month: 'Jan', registrations: 30 },
        { month: 'Feb', registrations: 45 },
        { month: 'Mar', registrations: 60 },
        { month: 'Apr', registrations: 40 },
        { month: 'May', registrations: 80 },
        { month: 'Jun', registrations: 70 }
    ];

    const activeUserData = [
        { role: "Admin", count: 5 },
        { role: "Editor", count: 12 },
        { role: "Viewer", count: 25 },
    ];

    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 p-4'>
            <GraphCard title="Registration Statistics">
                <RegistrationStaticsChart data={registrationDataSets} />
            </GraphCard>
            <GraphCard title="Active Users">
                <RoleStaticsChart data={activeUserData} />
            </GraphCard>
        </div>
    )
}

export default Graph