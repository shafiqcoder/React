
import React from 'react';
import Graphs from './graphs';
import Pakistan from './pakistan';
export default function InfoPanel({ currentScreen }) {
    if (currentScreen === 0)
        return <Pakistan />
    else if (currentScreen === 1)
        return <Graphs />

    else return <Pakistan />
}