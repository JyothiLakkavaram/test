import React from 'react'

const Sidebar = ({handleMenu}) => {
  return (
    <main className="dashboard-menu">
    <ul>
      <li onClick={() => handleMenu('dashboard')}>Dashboard</li>
      <li onClick={() => handleMenu('votersdata')}>Voters Data</li>
      <li onClick={() => handleMenu('boothagentmanagement')}>Booth Agent Management</li>
      <li onClick={() => handleMenu('ecampaigns')}>E-Campaigns</li>
      <li onClick={() => handleMenu('birthdays')}>Birthdays</li>
      <li onClick={() => handleMenu('settings')}>Settings</li>
    </ul>
  </main>
  )
}

export default Sidebar