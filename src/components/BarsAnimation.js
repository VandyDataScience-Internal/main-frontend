import React, { useState, useEffect } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    useColorModeValue,
    Text,
} from '@chakra-ui/react';

function BarsAnimation(totalBars, barMedian) {
    const [bars, setBars] = useState([]);
    const orderBars = [1, 2, 5, 3, 4, 6, 8, 7, 9, 10, 11, 12,
        13, 15, 14, 16, 18, 17, 19, 20, 21, 22, 23, 24, 26, 27, 25, 28, 30, 29];
    useEffect(() => {
        let newBars = [];
        let median = (totalBars / 2) + barMedian;
        for (let i = 0; i < totalBars; i++) {
            newBars.push({
                id: i,
                height: (totalBars + 9) - Math.abs(i - median) * 2,
            });
        }
        setBars(newBars);
    }, [totalBars]);

    return (
        <>
            {orderBars.map((order) => {
                const bar = bars.find(b => b.id === order - 1);
                return bar ?
                    <div key={bar.id} className='bar' style={{
                        height: `${bar.height}vh`,
                        animationDelay: `${2 + (bar.id * .03)}s`,
                        backgroundColor: 'black',
                        filter: 'brightness(0.90)',
                    }} />
                    : null;
            })}
        </>
    );

}

export default BarsAnimation;