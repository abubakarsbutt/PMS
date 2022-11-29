import React from 'react'
import Profile from '../../components/workload-profile/index'
import Number from '../../components/workload-number'
import Graph from '../../components/workload-graph'

import style from './table.module.scss'

const Table = () => {
    return (
        <div className={style.container}>
            <table>
                <tbody>
                    <tr>
                        <td className={style.number}>
                            {
                                profileData.map(({ index }) => (
                                    <Profile index={index} />
                                ))
                            }
                        </td>
                        <td className={style.number}>
                            {
                                numberData.map(({ index, number }) => (
                                    <Number index={index} number={number} color={{ color: 'black' }} />
                                ))
                            }
                        </td>
                        <td className={style.number}>
                            {
                                numberData.map(({ index,number }) => (
                                    <Number index={index} number={number} color={{ color: '#676A6F' }} />
                                ))
                            }
                        </td>
                        <td className={style.number}>
                            {
                                numberData.map(({ index, number }) => (
                                    <Number index={index} number={number} color={{ color: '#5C9FDD' }} />
                                ))
                            }
                        </td>
                        <td className={style.number}>
                            {
                                numberData.map(({ index, number }) => (
                                    <Number index={index} number={number} color={{ color: '#2D9274' }} />
                                ))
                            }
                        </td>
                        <td className={style.number}>
                            {
                                graphData.map(({ index, first, second, third }) => (
                                    <Graph index={index} first={first} second={second} third={third} />
                                ))
                            }
                        </td>
                        <td className={style.number}>
                            {
                                graphData.map(({ index, first, second, third }) => (
                                    <Graph index={index} first={first} second={second} third={third} />
                                ))
                            }
                        </td>
                        <td className={style.number}>
                            {
                                graphData.map(({ index, first, second, third }) => (
                                    <Graph index={index} first={first} second={second} third={third} />
                                ))
                            }
                        </td>
                        <td className={style.number}>
                            {
                                graphData.map(({ index, first, second, third }) => (
                                    <Graph index={index} first={first} second={second} third={third} />
                                ))
                            }
                        </td>
                        <td className={style.number}>
                            {
                                graphData.map(({ index, first, second, third }) => (
                                    <Graph index={index} first={first} second={second} third={third} />
                                ))
                            }
                        </td>
                        <td className={style.number}>
                            {
                                graphData.map(({ index, first, second, third }) => (
                                    <Graph index={index} first={first} second={second} third={third} />
                                ))
                            }
                        </td>
                        <td>
                            {
                                graphData.map(({ index, first, second, third }) => (
                                    <Graph index={index} first={first} second={second} third={third} />
                                ))
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table

const graphData = [
    { index: "index", first: "05:00", second: "07:30", third: "06:00" },
    { index: "index", first: "05:00", second: "07:30", third: "06:00" },
    { index: "index", first: "05:00", second: "07:30", third: "06:00" },
    { index: "index", first: "05:00", second: "07:30", third: "06:00" },
    { index: "index", first: "05:00", second: "07:30", third: "06:00" },
    { index: "index", first: "05:00", second: "07:30", third: "06:00" },
    { index: "index", first: "05:00", second: "07:30", third: "06:00" },
    { index: "index", first: "05:00", second: "07:30", third: "06:00" },
    { index: "index", first: "05:00", second: "07:30", third: "06:00" },
    { index: "index", first: "05:00", second: "07:30", third: "06:00" },
    { index: "index", first: "05:00", second: "07:30", third: "06:00" },
    { index: "index", first: "05:00", second: "07:30", third: "06:00" }
]

const numberData = [
    { index: "index", number: "40:00" },
    { index: "index", number: "40:00" },
    { index: "index", number: "40:00" },
    { index: "index", number: "40:00" },
    { index: "index", number: "40:00" },
    { index: "index", number: "40:00" },
    { index: "index", number: "40:00" },
    { index: "index", number: "40:00" },
    { index: "index", number: "40:00" },
    { index: "index", number: "40:00" },
    { index: "index", number: "40:00" },
    { index: "index", number: "40:00" }
]

const profileData = [
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" }
]