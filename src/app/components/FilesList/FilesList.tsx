"use client";

import {useEffect, useState} from 'react';
import { Document, Page } from 'react-pdf';
import styles from './FilesList.module.css'
import { pdfjs } from 'react-pdf';
import {useGetFilesByID} from "@/redux/api/ApplicationApi";
import Image from "next/image";
import {FileInfo, FilesInfo} from "@/dtos/FilesInfo";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const MainFile = ({source}: {source: string}) => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: {numPages: number}) {
        setNumPages(numPages);
    }

    return (
        <div style={{backgroundColor: 'var(--gray)',
            borderRadius: '12px',
            padding: '20px',
            height: '770px'}}>
            <h3 style={{color: 'white', marginBottom: '6px'}}>Page {pageNumber} of {numPages}</h3>
            <Document className={styles.main_doc} file={{data: base64ToArrayBuffer(source)}} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.apply(null, Array(numPages))
                    .map((x, i) => i+1)
                    .map((page) => {
                        return <Page
                            key={page}
                            pageNumber={page}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    })}
            </Document>
        </div>
    );
}

export const base64ToArrayBuffer = (base64: string) => {
    const binaryString = window.atob(base64); // Comment this if not using base64
    const bytes = new Uint8Array(binaryString.length);
    return bytes.map((byte, i) => binaryString.charCodeAt(i));
}

export const FilesList = () => {
    let {data, isLoading} = useGetFilesByID(1);
    const [activeDoc, setActiveDoc] = useState(0);

    if (isLoading || !data) return null;

    const files = data;

    return <div>
        <h2 style={{marginBottom: '10px'}}>Документы по заявке</h2>
        <div style={{
            width: '1000px',
            display: 'flex',
            gap: '20px',
        }}>
            <List files={files} onChange={(v: number) => setActiveDoc(v)}/>
            <MainFile source={files[activeDoc].content}/>
        </div>
    </div>
}

const List = ({files, onChange}: {files: FilesInfo; onChange: (v: number) => void}) => {
    return <div style={{
        width: '300px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        height: '770px',
        borderRadius: '12px',
        border: '1px solid var(--green)',
        overflow: "scroll",
    }}>
        {files.map((i, index) => {
                if (i.type === 'PDF')
                    return <Document className={styles.list__item}
                                     onClick={() => onChange(index)}
                                     key={index}
                                     file={{data: base64ToArrayBuffer(i.content)}}>
                        <Page
                            height={300}
                            width={250}
                            pageNumber={1}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    </Document>
                // return <Image src={{da}} alt={}
            }
        )}
    </div>
}