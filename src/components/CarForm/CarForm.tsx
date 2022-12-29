import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseYear, chooseMake, chooseModel, chooseColor } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    year: string;
    make: string;
    model: string;
    color: string;
}

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch(); 
    const store = useStore();
    const name = useSelector<CarState>(state => state.year);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseYear(data.year));
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(chooseColor(data.color));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="year">Car Year</label>
                    <Input {...register('year')} name="year" placeholder='Year'/>
                </div>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name="make" placeholder='Make'/>
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder='Model'/>
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input {...register('color')} name="color" placeholder='Color'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}