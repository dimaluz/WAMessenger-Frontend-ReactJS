import React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_WA_MESSAGES } from '../../apollo/WAMessages';
import LoadingPage from '../LoadingPage/LoadingPage';
// import Tab from '../../components/Tab/Tab';
import MsgTab from '../../components/MsgTab/MsgTab';
import Button from '../../components/Button/Button';
import Pagination from '../../components/Pagination/Pagination';
import Navbar from '../../components/Navbar/Navbar';
import './AllMessages.css';


const AllMessages = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [messagesPerPage] = useState(2);


    const { loading, error, data } = useQuery(ALL_WA_MESSAGES);
    if (loading) {
        return (
            <div><LoadingPage /></div>
        )
    }
    if (error){
        return <h1>Error...</h1>
    }

    const lastMessageIndex = currentPage * messagesPerPage;
    const firstMessageIndex = lastMessageIndex - messagesPerPage;
    const currentMessagesPage = data.allWaMessages.slice(firstMessageIndex, lastMessageIndex);
    const totalOfPages = Math.ceil(data.allWaMessages.length/messagesPerPage);

    

    return (
        <main className='grid-container'>
            <div className="navbar-container">
                <Navbar />
            </div>
            <div className="message-container">
                <div className="message-plate">

                    <div className='title-plate-container'>
                        <h2>Messages</h2>
                    </div>
                    
                    <div className='button-plate-container'>
                        <Button title='Create'/>
                    </div>
                

                    <div className='message-control-container'>
                        <div className='message-control-wrapper'>
                            
                            <div className='checkbox-place'>

                            </div>

                            <div className='item message-title-place'>
                                <span>Message Title</span>
                            </div>

                            <div className='item status-place'>
                                <span>Status</span>
                            </div>

                            <div className='item createdon-place'>
                                <span>Created On</span>
                            </div>

                            <div className='item updatedon-place'>
                                <span>Updated On</span>
                            </div>
                            
                        </div>
                    </div>

                    <div className='message-wrapper'>
                        {currentMessagesPage.map((message)=>(
                            <div className="tab-container">
                                <MsgTab key={message.id} 
                                    title={message.title}
                                    status={message.status}
                                    createdOn={message.createdOn}
                                    messageBody={message.messageBody}
                                    // isActive={currentlyActive === message.id}
                                    // onClick={() => handleAccordionClick(message.id)} 
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div className='pagination-container'>
                
                <Pagination pages={totalOfPages} setCurrentPage={setCurrentPage} />
                
            </div>
        
        </main>
    )
}

export default AllMessages;