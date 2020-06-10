import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

interface IProps {
  href: string | undefined,
}

export default (props: IProps): React.ReactElement => {
  const { href } = props;
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down('md'));

  const width = (): number => {
    if (mediaQuery) {
      return 296;
    }

    return 584;
  };

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <>
      <Document
        file={{
          url: href,
          withCredentials: true,
        }}
        width={width()}
      >
        <Page
          pageNumber={1}
          width={width()}
        />
      </Document>
    </>
  );
};
