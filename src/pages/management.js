import React from 'react'

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


export default function Management() {
    return (
        <div>
            <div style={{textAlign: 'left', height: "25vh", position: 'relative', backgroundColor: "#F2CDCB"}}>
                <h1 style={{position: 'absolute', top: 0, marginLeft: '0.5em'}}>Olá Laura!</h1>
                <h4 style={{position: 'absolute', bottom: '1.5em', marginLeft: '1em'}}>Conta</h4>
                <h3 style={{position: 'absolute', bottom: 0, marginLeft: '1em'}}>R$ 200,00</h3>
            </div>
            <Divider style={{borderWidth: '0.5px', borderColor: "black"}}/>
            <div style={{textAlign: 'left', height: "25vh", position: 'relative'}}>
                <Button
                    variant="text"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        marginLeft: '1em',
                        color: "black",
                }}>
                    <h3>Crie um novo grupo</h3>
                </Button>
            </div>
            <Divider style={{borderWidth: '0.5px', borderColor: "black"}}/>
            <div style={{textAlign: 'left', height: "25vh", position: 'relative'}}>
                <Button
                    variant="text"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        marginLeft: '1em',
                        color: "black",
                }}>
                    <h3>Participe de um grupo existente</h3>
                </Button>
            </div>
            <Divider style={{borderWidth: '0.5px', borderColor: "black"}}/>
            <div style={{textAlign: 'left', height: "25vh", position: 'relative'}}>
                <Button
                    variant="text"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        marginLeft: '1em',
                        color: "black",
                }}>
                    <h3>Meus grupos</h3>
                </Button>
            </div>
        </div>
    );
}