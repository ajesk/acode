import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import doc from './ajeskie-resume-3-25-2021.pdf';
import './Resume.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};


const Resume = () => {
  return (
    <div className="resume">
      <Document file={doc} options={options}>
        <Page
          key={`page_1`}
          pageNumber={1}
        />
      </Document>
    </div>
  );
}

export default Resume;
