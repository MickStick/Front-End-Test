import React, { Component } from 'react';
import PropTypes from 'prop-types';

const formatDate = (dateString) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date(dateString);   
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    let ampm = dateObj.getHours() > 12 ? "pm" : "am"; // Added time of day indicator to get am or pm if the hours are more than 12 or not
    const hours = dateObj.getHours() > 12 ? dateObj.getHours() - 12 : dateObj.getHours(); // Checked if getHours value is larger than 12 and use the difference of it and 12
    const minutes = String(dateObj.getMinutes()).padStart(2,'0'); // Padded the start of minutes with a 0
    return `${month} ${day}, ${year} - ${hours}:${minutes} ${ampm}`;
}

function OrdersTable({ data, actions }) {
    const { deleteOrder, selectOrder } = actions;
    return (
        <div>
            <h1>Customer Orders</h1>

            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(order => (
                            <tr key={order.id}>
                                <td>{order.customerName}</td>
                                <td>{formatDate(order.createdOn)}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="detailButton"
                                        onClick={() => selectOrder(order)}
                                    >
                                        Details
                                    </button>
                                    <button
                                        type="button" 
                                        className="deleteButton"
                                        onClick={() => {
                                            selectOrder(order)
                                            deleteOrder()
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

OrdersTable.propTypes = {
    data: PropTypes.array.isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default OrdersTable
