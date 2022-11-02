import { Card, CardMedia, Grid, Paper } from "@mui/material";

const Dashboard = () => {
    return <Paper
    style={{ display:"flex" , justifyContent:"center" , height: "100%",overflowY:"scroll" , backgroundColor:"#e0bfff" }}>
        <Card elevation={21} sx={{
            height:"70%",
            width:"40%",
            alignSelf:"center",
            borderRadius:12
        }}>
        <CardMedia 
        src="https://media.tenor.com/g-wLEB6Mt4AAAAAC/anime-ash.gif"
        component={"img"}
        />
        </Card>
    </Paper>
}

export default Dashboard;

