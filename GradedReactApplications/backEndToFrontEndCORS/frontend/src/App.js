import React, { useState } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

function App() {
  const [fact, setFact] = useState('');
  const [isTrue, setIsTrue] = useState(false);
  const [facts, setFacts] = useState([]);
  const [showFact, setShowFact] = useState(false); // Toggle state for random fact
  const [showFacts, setShowFacts] = useState(false); // Toggle state for all facts

  // Function to fetch and toggle a random fact
  const fetchRandomFact = async () => {
    if (showFact) {
      // If already showing, toggle off
      setShowFact(false);
    } else {
      try {
        const response = await axios.get('http://localhost:4000/fact');
        setFact(response.data.fact);
        setIsTrue(response.data.isTrue);
        setShowFact(true); // Toggle on
      } catch (error) {
        console.error('Error fetching the fact:', error);
      }
    }
  };

  // Function to fetch and toggle all facts
  const fetchFacts = async () => {
    if (showFacts) {
      // If already showing, toggle off
      setShowFacts(false);
    } else {
      try {
        const response = await axios.get('http://localhost:4000/facts');
        setFacts(response.data);
        setShowFacts(true); // Toggle on
      } catch (error) {
        console.error('Error fetching the facts:', error);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Facts API Demo
      </Typography>

      {/* Button to fetch and display or hide a random fact */}
      <Button variant="contained" color="primary" onClick={fetchRandomFact} style={{ marginBottom: '20px' }}>
        {showFact ? 'Hide Random Fact' : 'Get a Random Fact'}
      </Button>

      {/* Display the random fact if showFact is true */}
      {showFact && (
        <Typography variant="body1" style={{ color: isTrue ? 'green' : 'red', marginBottom: '20px' }}>
          {fact}
        </Typography>
      )}

      {/* Button to fetch and display or hide all facts */}
      <Button variant="contained" color="secondary" onClick={fetchFacts} style={{ marginBottom: '20px' }}>
        {showFacts ? 'Hide All Facts' : 'Load All Facts'}
      </Button>

      {/* Data table to display all facts if showFacts is true */}
      {showFacts && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Fact</TableCell>
                <TableCell align="right">Is True</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {facts.map((factObj, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" style={{ color: factObj.isTrue ? 'green' : 'red' }}>
                    {factObj.fact}
                  </TableCell>
                  <TableCell align="right">{factObj.isTrue ? 'True' : 'False'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default App;
