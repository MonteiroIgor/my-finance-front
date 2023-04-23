import { TableCell, TableRow } from "@mui/material"


export const TableItem = ({data, categoria_id, título, valor}) => {
    let dataFormatada = data.split('-').reverse().join('-')
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell sx={{ color: '#fff' }} align="center">{dataFormatada}</TableCell>
            <TableCell 
                sx={categoria_id === 'Income' ? {color: '#008000'} : {color: 'red'}} 
                align="center">{categoria_id}
            </TableCell>
            <TableCell sx={{ color: '#fff' }} align="center">{título}</TableCell>
            <TableCell sx={categoria_id === 'Income' ? {color: '#008000'} : {color: 'red'}} align="center">R$ {valor}</TableCell>
        </TableRow>
    )
}