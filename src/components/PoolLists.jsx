import React, { useState } from 'react'
import PoolList from './pool/PoolList'
import ethicon from "../assets/images/pools/eth.png";
import scrollIcon from "../assets/images/scroll.png";
import DepositCard from './pool/depositCard/DepositCard';
import Sidebar from './pool/Sidebar';
import WithdrawCard from './pool/withdrawCard/WithdrawCard';

const mockData = [
    {
        tokenAIcon: ethicon,
        tokenBIcon: ethicon,
        statusIcon: scrollIcon,
        tokenAName: 'ETH',
        tokenBName: 'USDT',
        status: 'Status',
        liquidity: '123,123,123',
        apr: '22.9%',
    },
    {
        tokenAIcon: ethicon,
        tokenBIcon: ethicon,
        statusIcon: scrollIcon,
        tokenAName: 'BTC',
        tokenBName: 'USDT',
        status: 'Status',
        liquidity: '234,234,234',
        apr: '33.3%',
    },
    {
        tokenAIcon: ethicon,
        tokenBIcon: ethicon,
        statusIcon: scrollIcon,
        tokenAName: 'BTC',
        tokenBName: 'USDT',
        status: 'Status',
        liquidity: '234,234,234',
        apr: '33.3%',
    },
    {
        tokenAIcon: ethicon,
        tokenBIcon: ethicon,
        statusIcon: scrollIcon,
        tokenAName: 'BTC',
        tokenBName: 'USDT',
        status: 'Status',
        liquidity: '234,234,234',
        apr: '33.3%',
    },
]

const PoolLists = () => {
    const [currentComponent, setCurrentComponent] = useState('PoolList');

    return (
        <div className='flex flex-row gap-2 justify-center items-center mt-20 min-h-screen'>
            <div>
                <Sidebar onSelectComponent={setCurrentComponent} />
            </div>
            <div className='w-3/4'>
                <div>
                    {currentComponent === 'DepositCard' && <DepositCard />}
                </div>
                <div>
                    <div className='justify-center items-center flex flex-col'>
                        {currentComponent === 'PoolList' && mockData.map((data, index) => (
                            <PoolList
                                key={index}
                                tokenAIcon={data.tokenAIcon}
                                tokenBIcon={data.tokenBIcon}
                                statusIcon={data.statusIcon}
                                tokenAName={data.tokenAName}
                                tokenBName={data.tokenBName}
                                status={data.status}
                                liquidity={data.liquidity}
                                apr={data.apr}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    {currentComponent === 'WithdrawCard' && <WithdrawCard />}
                </div>
            </div>
        </div>
    )
}

export default PoolLists