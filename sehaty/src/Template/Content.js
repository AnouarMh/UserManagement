import { useState } from 'react';
import {
  Paper,
  AppBar,
  Toolbar,
  Grid,
  TextField,
  Button,
  Tooltip,
  IconButton,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import TipList from '../component/TipList';
import AddTip from '../component/addTip';
export default function Content() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
            <Button variant="contained" sx={{ mr: 1 }} onClick={toggleForm}>
                Add Tips
              </Button>
              <Tooltip title="Reload">
                <IconButton onClick={() => setShowForm(false)}>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
      {showForm ? (
          <AddTip onCancel={toggleForm} />
        ) : (
          <TipList />
        )}         
      </Typography>
    </Paper>
  );
}
