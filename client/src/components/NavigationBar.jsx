import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const NavigationBar = () => {
    const navigate = useNavigate();
    const [logsVis, setLogsVis] = useState('');
    const [transactionVis, setTransactionVis] = useState('');
    return (
        <div className='bg-watch-pattern min-h-screen'>
            {/* NAVIGATION BAR */}
            <div className='flex p-10 justify-between items-center text-white bg-black'>
                <div className='font-bold text-2xl'>HyperWatches.</div>
                <div className=''>
                    <ul className='flex flex-grow text-lg'>
                        <li className='px-4 cursor-pointer ' onClick={() => navigate('/transfer')}>Transfer</li>
                        <li className='px-4 cursor-pointer ' onClick={() => navigate('/search')}>Search</li>
                        <li className='px-4 cursor-pointer ' onClick={() => navigate('/')}>Search All</li>
                        <li className='px-4 cursor-pointer ' onClick={() => navigate('/create')}>New</li>
                    </ul>
                </div>

                <div>
                    <button className='bg-[#D87456] text-white rounded-lg mx-4'>
                        <p className='px-8 py-2' onClick={() => setLogsVis(logsVis === '' ? 'hidden' : '')}>{logsVis === 'hidden' ? 'Show Logs' : 'Hide Logs'}</p>
                    </button>
                    <button className='bg-[#D87456] text-white rounded-lg mx-4'>
                        <p className='px-8 py-2' onClick={() => setTransactionVis(transactionVis === '' ? 'hidden' : '')}>{transactionVis === 'hidden' ? 'Show History' : 'Hide History'}</p>
                    </button>
                </div>

            </div>
            <div>

                <div className='px-20 py-10 flex justify-around'>
                    {/* <div className={`w-1/3 bg-blue-50 h-2/3 ${logsVis}`}>Logs</div> */}
                    <div className="mx-4 p-4">
                        <div className="border-4 border-black rounded-lg p-4 bg-white">

                            <Outlet />
                        </div>
                        {/* <div className={`w-1/3 bg-blue-50 h-2/3 ${transactionVis}`}>History</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
