import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getSampleData } from './../../utils';

const Television = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('Search Parameters', searchParams.get('screen'),  searchParams.get('curved')); 
  const { name, type } = params;

  const televisionData = getSampleData(name, type, searchParams.get('screen'));

  return (
    <div>
      <h1> Television Data</h1>
          <>
          <h2>Name: {televisionData.name}</h2>
          <h2>Description: {televisionData.description}</h2>
          <h2>Warranty: {televisionData.warranty}</h2>
          <h2>Type: {televisionData.type}</h2>
          <h2>{televisionData.screen ? `Screen: ${televisionData.screen}` : null}</h2>
          </>  
    </div>
  );
};

export default Television;
