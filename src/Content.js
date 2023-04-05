import React from 'react'
import Dash from './components/Dash'
import Voters from './components/Voters'
import BoothMangement from './components/BoothMangement'
import Campaigns from './components/Campaigns'
import Birthdays from './components/Birthdays'
import Settings from './components/Settings'
import './Content.css'
const Content = ({ itemSelected }) => {

    return (
        <div className='itemSelected'>{itemSelected === 'dashboard' && <Dash />}
        {itemSelected ==='votersdata' && <Voters />}
        {itemSelected === 'boothagentmanagement' && <BoothMangement />}
        {itemSelected === 'ecampaigns' && <Campaigns />}
        {itemSelected === 'birthdays' && <Birthdays />}
        {itemSelected === 'settings' && <Settings/>}
        </div>
    )
}

export default Content