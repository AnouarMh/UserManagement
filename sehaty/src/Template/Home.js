import { Paper, Typography, Grid } from '@mui/material';
import hospitalImg from '../assets/hospital.png';
import doctorImg from '../assets/doctor.png';
import patientImg from '../assets/patient.png';

export default function Content() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={4}>
        <Grid item>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Hospital Management
          </Typography>
        </Grid>
        <Grid item container direction="row" justifyContent="center" alignItems="center" spacing={4}>
          <Grid item xs={12} sm={4}>
            <img src={hospitalImg} alt="Hospital" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            <Typography variant="h5" component="h2" gutterBottom>
              Manage Hospitals
            </Typography>
            <Typography variant="body1" gutterBottom>
              Add, edit or remove hospitals and their information such as location, contact details, and specialties.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img src={doctorImg} alt="Doctor" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            <Typography variant="h5" component="h2" gutterBottom>
              Manage Doctors
            </Typography>
            <Typography variant="body1" gutterBottom>
              Add, edit or remove doctors and their information such as name, specialty, and contact details.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img src={patientImg} alt="Patient" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            <Typography variant="h5" component="h2" gutterBottom>
              Manage Patients
            </Typography>
            <Typography variant="body1" gutterBottom>
              Add, edit or remove patients and their information such as name, age, gender, and contact details.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
