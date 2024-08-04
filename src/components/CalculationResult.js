import React, { useState } from 'react';
import { dijkstra } from '../algorithms/dijkstra_algo';

function CalculateResult({data}) {

    // Styling
    const format_style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
        },
        heading: {
            textAlign: 'center',
        }
    };

    const input_style = {
        label: {
            marginTop: '30px',
            marginBottom: '10px',
            fontSize: '18px',
        },
        input: {
            marginLeft: '10px',
            padding: '5px',
            fontSize: '16px',
        },
        button: {
            marginTop: '10px',
            marginBottom: '40px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#1e90ff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
        },
    };

    const table_style = {
        table: {
            borderCollapse: 'collapse',
            width: '100%',
            margin: '20px 0',
            marginBottom: '30px',
        },
        th: {
            border: '1px solid #ddd',
            padding: '8px',
            backgroundColor: '#f4f4f4',
            textAlign: 'center',
        },
        td: {
            border: '1px solid #ddd',
            padding: '8px',
            textAlign: 'center',
        },
        td_special: {
            border: '1px solid #ddd',
            padding: '16px',
            textAlign: 'center',
        },
    };

    const paragraph_style = {
        fontSize: '16px',
    };

    // Result and calculations
    const [input, setInput] = useState('');
    const [result_data, setCalculation] = useState({distances: {}, path: {}});

    const handleChange = (event) => {
        setInput(event.target.value.toUpperCase());
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const calculated_data = dijkstra(data, input); // Upon submitting, compute actual calculation
        setCalculation(calculated_data);
    }
    
    const { distances } =  result_data;
    const { path } = result_data;
    const isValid = Object.keys(distances)[0] !== 'distances' && Object.keys(distances)[1] !== 'path';

    const arrow_string = ' -> ';
    const formatPath = (pathArray) => pathArray.join(arrow_string);

    return (
        <div style={format_style.container}>
            <h2 style={format_style.heading} className="text-center">Calculation</h2>
            <label style={input_style.label}> 
            Start Vertex:
            <input
            style={input_style.input}
            type="text"
            value={input}
            onChange={handleChange}
            />
        </label>
        <button style={input_style.button} onClick={handleSubmit}>Calculate</button>
        <h4 style={format_style.heading}> Dijkstra Table </h4>
        <table style={table_style.table}>
            <thead>
            <tr>
                <th style={table_style.th}>Target Vertex</th>
                <th style={table_style.th}>Shortest Distance</th>
                <th style={table_style.th}>Previous Vertex</th>
            </tr>
            </thead>
            <tbody>
            {Object.keys(distances).length > 0 && isValid ? (
                Object.entries(distances).map(([target, { distance, previous }]) => (
                <tr key={target}>
                    <td style={table_style.td}>{target}</td>
                    <td style={table_style.td}>{distance}</td>
                    <td style={table_style.td}>{previous !== 'Infinity' ? previous : 'None'}</td>
                </tr>
                ))
            ) : (
                <tr>
                    <td style={table_style.td_special} colSpan="3"></td>
                </tr>
            )}
            </tbody>
        </table>
        <h4 style={{marginBottom : "20px"}}> Routes for Shortest Path </h4>
        {isValid && Object.entries(path).map(([key, pathArray]) => {
            const formattedPath = formatPath(pathArray);
            const reversedPath = formattedPath.split(' ').reverse().join(' ').replace('Infinity', 'None');
            return (
            <p style={paragraph_style} key={key}>
                <strong>{key}</strong>: {reversedPath} {arrow_string} {key}
            </p>
            );
        })}
        </div>
    );
}

export default CalculateResult;