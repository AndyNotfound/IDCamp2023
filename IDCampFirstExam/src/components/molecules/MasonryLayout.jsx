import React from 'react'
import { useState, useEffect } from 'react';

function MasonryLayout(props) {
    const columnWrapper = {};
    const result = [];
    const [columns, setColumns] = useState(getColumns());

    useEffect(() => {
        function resize() {
            setColumns(getColumns())
        }

        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [window.innerWidth])


    function getColumns() {
        if (window.innerWidth <= 700) {
            return 1;
        } else if (window.innerWidth <= 1000) {
            return 2;
        } else if (window.innerWidth <= 1300) {
            return 4
        } else {
            return props.columns
        }
    }

    for (let i = 0; i < columns; i++) {
        columnWrapper[`column${i}`] = [];
    }

    for (let i = 0; i < props.children.length; i++) {
        const columnIndex = i % columns;
        columnWrapper[`column${columnIndex}`].push(
            <div key={i} style={{ marginBottom: `${props.gap}px` }}>
                {props.children[i]}
            </div>
        );
    }

    for (let i = 0; i < columns; i++) {
        result.push(
            <div
                key={i}
                style={{
                    marginLeft: `${i > 0 ? props.gap : 0}px`,
                    flex: 1,
                }}>
                {columnWrapper[`column${i}`]}
            </div>
        );
    }

    return (
        <div style={{ display: 'flex' }}>
            {result}
        </div>
    );

}

export default MasonryLayout;