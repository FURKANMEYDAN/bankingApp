import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar';
const Home = () => {
    const loggedIn = {firstName : 'Furkan',lastName:'jsm',email:'contact@furkan.me'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName||'Guest'}
                    subtext="Access and managae your account and transactions effiecently."
                />
                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
            </header>
            Recent transactions
        </div>
        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance : 123.50},{currentBalance:500.50}]}
        />
    </section>
  )
}

export default Home