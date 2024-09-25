import React, { useState } from 'react';
import TopBanner from '../global-components/TopBanner';
import { Button } from 'react-bootstrap';

const ContactUspage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'first_name') {
            setFirstName(value);  // Update firstName state
        } else if (id === 'last_name') {
            setLastName(value);   // Update lastName state
        } else if (id === 'email_address') {
            setEmail(value);   // Update email state
        } else if (id === 'phone_number') {
            setPhone(value);   // Update phone state
        }
    };

    // Handle form submission
    const handleSubmit = () => {
        console.log({
            firstName,
            lastName,
            email,
            phone
        });
        alert('Form submitted successfully!');
    };

    return (
        <div>
            <TopBanner header_text="Get in touch" sub_text="Our team would love to hear from you." />
            <div className='flex flex-row'>
                <div className='flex basis-[60%] flex-col p-[60px] justify-center'>
                    <div className='flex px-[60px] pb-[50px] justify-between'>
                        <div className='flex flex-col basis-[40%]'>
                            <div className='pb-[4px] font-[300]'>First Name</div>
                            <input
                                id="first_name"
                                type="text"
                                value={firstName}          // Controlled value
                                onChange={handleInputChange} // Event handler
                                className="h-[40px] border-b-[1px] border-solid border-gray-300 rounded focus:border-black focus:outline-none"
                            />
                        </div>
                        <div className='flex flex-col basis-[40%]'>
                            <div className='pb-[4px] font-[300]'>Last Name</div>
                            <input
                                id="last_name"
                                type="text"
                                value={lastName}          // Controlled value
                                onChange={handleInputChange} // Event handler
                                className="h-[40px] border-b-[1px] border-solid border-gray-300 rounded focus:border-black focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className='flex px-[60px] pb-[50px] flex-col justify-around'>
                        <div className='pb-[4px] font-[300]'>Email Address</div>
                        <input
                            id="email_address"
                            type="text"
                            value={email}          // Controlled value
                            onChange={handleInputChange} // Event handler
                            className="h-[40px] border-b-[1px] border-solid border-gray-300 rounded focus:border-black focus:outline-none"
                        />
                    </div>
                    <div className='flex px-[60px] flex-col justify-around'>
                        <div className='pb-[4px] font-[300]'>Phone Number</div>
                        <input
                            id="phone_number"
                            type="text"
                            value={phone}          // Controlled value
                            onChange={handleInputChange} // Event handler
                            className="h-[40px] border-b-[1px] border-solid border-gray-300 rounded focus:border-black focus:outline-none"
                        />
                    </div>
                    <div className="px-[60px] pt-[50px]">
                        <Button 
                            variant="primary" 
                            onClick={handleSubmit}  // Trigger form submission on click
                            className="w-40 h-[40px] text-white rounded"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
                <div className='bg-gray-400 flex basis-[40%]'>
                    <h4>Our Location</h4>
                </div>
            </div>
        </div>
    );
};

export default ContactUspage;