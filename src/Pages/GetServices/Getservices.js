import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/UseAuth/UseAuth';


const Getservices = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`https://guarded-reaches-63811.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    const handleClick = () => {

        service.email = `${user?.email}`
        delete service._id
        fetch('https://guarded-reaches-63811.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    window.alert("Added Successfully")
                }
            })
    }




    return (
        <div className="grid lg:grid-cols-2">
            <div>

                <h1 className="text-5xl py-10 text-center font-bold text-blue-600">{service.title}</h1>
                <img className="lg:pl-10 pb-20" src={service.detaiImg} alt="" />
                <h2 className="text-center text-4xl py-10 font-bold text-red-600">Contact Us</h2>
                <h2 className="text-5xl text-center font-bold text-blue-600 pb-10">{service.contact}</h2>
                <div className="text-2xl font-semibold lg:pl-10 pl-5">
                    <h1> <span className="text-4xl text-red-400 font-bold">DAY-1</span> <br />{service.day1}</h1>
                    <h1 className="pt-10 pb-10 "><span className="text-4xl text-red-400 font-bold">DAY-2</span> <br /> {service.day2}</h1>
                </div>
            </div>
            <div className=" pt-44">
                <h2 className="text-6xl font-semibold ml-20 mb-10 text-red-600">Please Checkout <br /> By clicking Confirm</h2>

                {/* <div className="pb-40 grid justify-center align-center">
                    <form >
                        <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20"{...register("firstName", { required: true, maxLength: 20 })} placeholder="Name" />
                        <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" {...register("email")} placeholder="Email" />
                        <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" type="number" {...register("phone", { min: 18, max: 99 })} placeholder="Phone" />
                        <input type="submit" />
                    </form>
                </div> */}
                <button onClick={handleClick} className="bg-blue-700 text-white rounded-lg mt-3 ml-44   p-3 mb-3">Confirm</button>
            </div>
        </div>
    );
};

export default Getservices;