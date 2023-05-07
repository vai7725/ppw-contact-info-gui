import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DataCard from './DataCard';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';

const CardContainer = () => {
  const backendURI = 'https://ppw-backend.cyclic.app';

  const [info, setInfo] = useState({ contactInfo: [] });
  const [progress, setProgress] = useState(0);

  const fetchContactInfo = async () => {
    setProgress(30);
    try {
      setProgress(70);
      const { data } = await axios.get(`${backendURI}/contact-info`);

      return setInfo(data), setProgress(100);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (infoId) => {
    setProgress(0);
    try {
      setProgress(30);
      const res = await axios.delete(`${backendURI}/delete/${infoId}`);
      setProgress(70);
      console.log(res.data);
      fetchContactInfo();
      setProgress(100);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContactInfo();
  }, []);
  const contactCardData = info.contactInfo.map((info) => {
    return <DataCard key={info._id} {...info} handleDelete={handleDelete} />;
  });

  return (
    <>
      <LoadingBar
        color="#5a4bda"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Container className="card-container d-flex flex-wrap justify-content-center">
        {info.contactInfo.length > 0 ? (
          contactCardData
        ) : (
          <h2>Contact request area is empty!</h2>
        )}
      </Container>
      ;
    </>
  );
};

export default CardContainer;
