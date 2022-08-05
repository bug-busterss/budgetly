const { Card } = require("@mantine/core");
const { IconTypography } = require("@tabler/icons");

return(
    <Card className="">
        <CardHeader title="Expence Manager" />
        <CardSection>
        <Typography align="Center" fontVariant={h5}>Total Balance $100</Typography>
        <Typograohy  variant="subtitle" style ={{lineheight:'2.5cm',margintop:'20px'}}> </Typography>
            <divider/>

        </CardSection>
        <CardContent className={classes.cardcontent }>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    Main

                </Grid>

                </Grid>
                 </CardContent>
    </Card>
);