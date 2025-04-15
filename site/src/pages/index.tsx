import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home() {
  // This will ensure a redirect to /intro
  return <Redirect to="/intro" />;
}