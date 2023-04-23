import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './styles.css'
import { TableItem } from '../TableItem';

export const InfoTable = ({list}) => {
    return (
        <div className='container-infoTable'>
            <TableContainer sx={{background: '#000', color: '#fff', borderRadius: 10}}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: '#fff' }} align="center">Date</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Category</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Title</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.length === 0 ? (
                            <tr>
                                <td style={{ textAlign: 'center', padding: 10 }}>Finances not Found!</td>
                            </tr>
                        ) : ( 
                            list.map(financa => (
                                <TableItem 
                                    key={financa.id} 
                                    categoria_id={financa.Categorium.descricao} 
                                    data={financa.data} 
                                    título={financa.titulo} 
                                    valor={financa.valor}/> 
                            ))
                        )}

                        
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}







