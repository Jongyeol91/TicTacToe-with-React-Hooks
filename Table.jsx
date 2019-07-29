import React from 'react';
import Tr from './Tr';

const Table = ({onClick, tableData}) => { 
    return (
        <table onClick={onClick}>
            <tbody>
                { Array(tableData.length).fill().map((tr, i) => (<Tr rowIndex={i} rowData={tableData[i]} />)) }
            </tbody>
        </table>
    );
};

// 0번 index의 tr이 만들어지면 => 0번 rowIndex의 td들이 만들어짐 (0 0, 0 1, 0 2) => 
// 1번 index의 tr이 만들어지면 => 1번 rowIndex의 td들이 만들어짐 (1 0, 1 1, 1 2) =>
// 2번 index의 tr이 만들어지면 => 2번 rowIndex의 td을이 만들어짐 (2 0, 2 1, 2 2) 

export default Table;