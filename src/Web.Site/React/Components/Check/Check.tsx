import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { AxiosResponse, AxiosError } from 'axios';
import HomeContainer from '../HomeContainer/HomeContainer';
import FileNotFound from '../FileNotFound/FileNotFound';
import MyAxios from '../../Utils/MyAxios';
import Loading from '../Loading/Loading';
import Document from './Document';

interface IParams {
  id: string,
  language: string,
}

export default (): React.ReactElement => {
  const params = useParams<IParams>();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [pdf, setPdf] = useState<string | undefined>(undefined);

  useEffect((): void => {
    const url: string = `api/show/${params.id}/${params.language}/report.pdf`;

    MyAxios().get(url)
      .then(async (): Promise<void> => {
        setPdf(`/${url}`);
        setSuccess(true);
        setLoading(false);
      })
      .catch((ex: AxiosError): void => {
        if (ex.response?.data.includes('System.IO.FileNotFoundException')) {
          setSuccess(false);
          setLoading(false);
        }
      });
  }, []);

  return (
    <HomeContainer>
      {
        (loading) ? <Loading /> : (
          <>
            {
              (success) ? <Document href={pdf} /> : <FileNotFound />
            }
          </>
        )
      }
    </HomeContainer>
  );
};
