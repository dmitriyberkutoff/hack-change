'use client'

import Link from "next/link";
import {ApplicationInfo} from "@/dtos/ApplicationInfo";

export default function Home() {
    const Application = ({info}: {info: ApplicationInfo}) => {
        const date = new Date(Date.parse('1997-07-16T19:20:15'));
        return <Link href={'/application/1'} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid var(--green)',
            width: '400px'
        }}>
            <h3>{info.fullName}</h3>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <p>Создана: {date.getDay()}.{date.getMonth()}.{date.getFullYear()}</p>
                <p>Статус: {info.status}</p>
            </div>
        </Link>
    }

    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <Application info={{fullName: 'VASYA PUPKIN', status: 'NEW', changedAt: '014-04-07T13:58:10.104Z', id: 1}}/>
          <Application info={{fullName: 'VASYA PUPKIN', status: 'NEW', changedAt: '014-04-07T13:58:10.104Z', id: 1}}/>
          <Application info={{fullName: 'VASYA PUPKIN', status: 'NEW', changedAt: '014-04-07T13:58:10.104Z', id: 1}}/>
          <Application info={{fullName: 'VASYA PUPKIN', status: 'NEW', changedAt: '014-04-07T13:58:10.104Z', id: 1}}/>
      </div>
    );
}
