import React from 'react'
import style from './Settings.module.css'
import { Progress } from 'antd';

const Setting = () => {
    return (
        <div>
            
            <Progress type="circle" percent={75} />
            <Progress type="circle" percent={70} status="exception" />
            <Progress type="circle" percent={100} />
        </div>
    );
}

export default Setting