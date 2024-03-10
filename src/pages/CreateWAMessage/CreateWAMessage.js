import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './CreateWAMessage.css';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import ButtonBlank from '../../components/ButtonBlank/ButtonBlank';
import InputField from '../../components/InputField/InputField';
import TitleToggle from '../../components/TemplateBuilder/TitleToggle/TitleToggle';
import CaptionToggle from '../../components/TemplateBuilder/CaptionToggle/CaptionToggle';
import ButtonToggle from '../../components/TemplateBuilder/ButtonToggle/ButtonToggle';
import Phone from '../../components/Phone/Phone'
import MultiSelect from '../../components/MultiSelect/MultiSelect';
import Select from '../../components/Select/Select';
import TipTap from '../../components/TipTap/TipTap';



const test_options = [
    {'label':"First", 'value': 1},
    {'label':"Two", 'value': 2},
    {'label':"Three", 'value': 3},
    {'label':"Four", 'value': 4},
    {'label':"Five", 'value': 5},
    {'label':"Six", 'value': 6},
]



const CreateWAMessage = () => {

    const [templateTag, setTemplateTag] = useState([])
    const [channel, setChannel] = useState([])
    const [businessAccount, setBusinessAccount] = useState("")
    const [category, setCategory] = useState("")
    const [language, setLanguage] = useState("")
    const [type, setType] = useState("");


    const [isMsgBodyActive, setIsMsgBodyActive] = useState(false);
    const MsgBodyClick = () => {
        setIsMsgBodyActive(!isMsgBodyActive);
    }

    const [templateText, setTemplateText] = useState("");

    const templateTextChanged = (e) =>{
        const {name, value} = e.target;
        setTemplateText(value);
    }


    return(
        <div className='create-message-grid'>

            <div className='create-message-navbar'>
                <Navbar />
            </div>

            <form className='create-message-form'>

                <div className='header-section'>
                    
                    <div className='title-and-btns-section'>
                        <div className='title'>
                            <h2>Create WA Template</h2>
                        </div>
                        <div className='btns-box'>
                            <div className='save'>
                                <ButtonBlank title='Save as Draft' />
                            </div>
                            <div className='send'>
                                <Button title='Send to Moderation' />
                            </div>
                        </div>
                    </div>

                    <div className='template-settings-section'>
                        <div className='name-and-tag'>
                            <div className='title'>Template Name</div>
                            <div className='fields'>
                                <div className='input-1'>
                                    <InputField
                                        id='template_name' 
                                        type='text'
                                        className='template-name' 
                                        label='Template name'
                                    />
                                </div>
                                <div className='input-2'>
                                    <MultiSelect
                                        id='tag' 
                                        options={test_options} 
                                        value={templateTag}
                                        onChange={o => setTemplateTag(o)}
                                        title="Template tag"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='channels'>
                            <div className='title'>Select the channels</div>
                            <div className='fields'>
                                <div className='input-3'>
                                    <Select 
                                        id='business-account'
                                        options={test_options} 
                                        value={businessAccount}
                                        onChange={o => setBusinessAccount(o)}
                                        title='WA Business account'
                                    />
                                </div>
                                <div className='input-4'>
                                    <MultiSelect 
                                        id='channel'
                                        options={test_options} 
                                        value={channel}
                                        onChange={o => setChannel(o)}
                                        title="Channel"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='category-and-language'>
                            <div className='title'>Select language and category</div>
                            <div className='fields'>
                                <div className='input-5'>
                                    <Select 
                                        id='category'
                                        options={test_options} 
                                        value={category}
                                        onChange={o => setCategory(o)}
                                        title='Category'
                                    />
                                </div>
                                <div className='input-6'>
                                    <Select 
                                        id='language'
                                        options={test_options} 
                                        value={language}
                                        onChange={o => setLanguage(o)}
                                        title='Language'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='settings-section'>
                    <div className='msg-settings'>

                        <div className='msg-settings-flexbox'>
                        
                            <div className='title-section'>
                                <TitleToggle />
                            </div>

                            <div className='msg-body-section'>
                                <div className='msg-body-title'>
                                    <h3>Message Body</h3>
                                </div>
                                <div className='msg-body-textfield' onClick={MsgBodyClick}>
                                    <TipTap
                                        setTemplateText={setTemplateText}
                                    />
                                </div>
                            </div>

                            <div className='caption-section'>
                                <CaptionToggle />
                            </div>

                            <div className='buttons-section'>
                                <ButtonToggle />
                            </div>
                        </div>
    
                    </div>
                    <div className={`msg-preview ${isMsgBodyActive ? 'active' : ''}`}>
                        <div className='blank-container'>
                            <div className='blank-title'>
                                <h2>Template preview</h2>
                            </div>
                            <div className='blank-body'>
                                <h4>Start filling in the fields to get a preview of the template</h4>
                            </div>
                        </div>
                        <div className='phone-preview-container'>
                            <Phone templateText={templateText}/>
                        </div>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default CreateWAMessage;