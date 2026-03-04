import { use, useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
    const [order,setOrder]= useState<OrderItem[]>([]);

    const addItem = (item: MenuItem) => {
        
        const itemExists = order.find(orderItem => orderItem.id ===  item.id); 
        if(itemExists){
            const elementoExistente =  order.map(orderItem => orderItem.id === item.id 
                ? {...orderItem,quantity: orderItem.quantity + 1} : orderItem )

            setOrder(elementoExistente)
        }else{
            const newItem  = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
        

        console.log(order);
    }
    return{
        order,
        addItem,
        
    }
}