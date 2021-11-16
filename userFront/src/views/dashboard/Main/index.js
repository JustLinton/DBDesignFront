import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';


// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

import HomieCard from './HomieCard';
import NewPostCard from './NewPostCard';
import UserFeeCard from './UserFeeCard';
import UserExtraCardDark from './UserExtraCardDark';
import UserExtraCardLight from './UserExtraCardLight';

// ==============================|| DEFAULT DASHBOARD ||============================== //


// const SuperDashboard =(props) =>{
// 	return (
// 		<Grid item xs={12}>
// 		<Grid container spacing={gridSpacing}>
// 		    <Grid item xs={12} md={8}>
// 			  <TotalGrowthBarChart isLoading={props.isLoading} />
// 		    </Grid>
// 		    <Grid item xs={12} md={4}>
// 			  <PopularCard isLoading={props.isLoading} />
// 		    </Grid>
// 		</Grid>
// 	  </Grid> 
// 	);
// }

// const WaterDashboard = (props) =>{
// 	return (
//    	<Grid item xs={12}>
//                 <Grid container spacing={gridSpacing}>
//                     <Grid item lg={4} md={6} sm={6} xs={12}>
//                         <EarningCard isLoading={props.isLoading} />
//                     </Grid>
//                     <Grid item lg={4} md={6} sm={6} xs={12}>
//                         <TotalOrderLineChartCard isLoading={props.isLoading} />
//                     </Grid>
//                     <Grid item lg={4} md={12} sm={12} xs={12}>
//                         <Grid container spacing={gridSpacing}>
//                             <Grid item sm={6} xs={12} md={6} lg={12}>
//                                 <TotalIncomeDarkCard isLoading={props.isLoading} />
//                             </Grid>
//                             <Grid item sm={6} xs={12} md={6} lg={12}>
//                                 <TotalIncomeLightCard isLoading={props.isLoading} />
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
// 	);
// }

const UserDashboard = (props) =>{
    return (
        <Grid container spacing={gridSpacing}>

            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    
                  <Grid item lg={7} md={7} sm={12} xs={12}>
                            <NewPostCard isLoading={props.isLoading} />
                  </Grid>

                  <Grid item lg={5} md={5} sm={12} xs={12}>

			<Grid container spacing={gridSpacing}>


					<Grid item sm={6} xs={6} md={6} lg={6}>
                              	<UserExtraCardLight isLoading={props.isLoading} />
                            	</Grid>

					<Grid item sm={6} xs={6} md={6} lg={6}>
                                	<UserExtraCardDark isLoading={props.isLoading} />
                        	</Grid>
				
					<Grid item lg={12} md={12} sm={12} xs={12}>
                        		<HomieCard isLoading={props.isLoading} />
                    		</Grid>

					<Grid item lg={12} md={12} sm={12} xs={12}>
						<UserFeeCard isLoading={props.isLoading} />
					</Grid>

					
					  
			</Grid>

                    </Grid>

                </Grid>
            </Grid>
	</Grid>	
    );
}

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
	// <WaterDashboard isLoading={isLoading} />
	     <UserDashboard isLoading={isLoading} />
    );
};

export default Dashboard;
