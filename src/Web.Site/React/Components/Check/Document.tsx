import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import useStyles from './Styles';
// import Hosts from '../../Utils/Hosts';

interface IProps {
  href: string | undefined,
}

export default (props: IProps): React.ReactElement => {
  const { href } = props;
  const classes = useStyles({});

  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  // pdfjs.GlobalWorkerOptions.workerSrc = `//${Hosts(window.location.hostname)}/dist/vendors~pdfjsWorker.js`;
  pdfjs.GlobalWorkerOptions.workerSrc = '//pdf.ricardogaefke.com/dist/vendors~pdfjsWorker.js';

  return (
    <>
      <Document
        file={{
          url: href,
          withCredentials: true,
        }}
        className={classes.pdf}
      >
        <Page
          pageNumber={1}
        />
      </Document>
    </>
  );
};
