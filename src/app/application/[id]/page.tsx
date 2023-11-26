'use client'

import {pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString()

import { Document, Page } from 'react-pdf';
import { useState } from "react";
import { FilesList } from "@/app/components/FilesList/FilesList";
import { Form } from '@/app/components/Form/Form';

export default function Home() {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', height: '100%'}}>
            <FilesList/>
            <Form/>
        </div>
    );
}
