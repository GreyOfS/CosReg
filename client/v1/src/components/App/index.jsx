import { useEffect, useState } from 'react';
import { Client as Notion } from '@notionhq/client';
import { Paper } from '@mui/material';
import LoadingModal from '../LoadingModal';
import './style.scss';

function App() {

  const [isPageLoading, setIsPageLoading] = useState(true);

  const notion = new Notion({ auth: process.env.REACT_APP_NOTION_TOKEN });

  useEffect(() => {
    setTimeout(() => {setIsPageLoading(false)}, 500);
  }, []);

  return (
    <>
      <LoadingModal isDisplay={!isPageLoading} fullscreen/>
      <Paper className='body' square elevation={0}>

      </Paper>
    </>
  );
}

export default App;
