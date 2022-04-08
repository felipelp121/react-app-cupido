const amplifyConfig = {
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: process.env.POOLS_ID,
  aws_user_pools_web_client_id: process.env.POOLS_CLIENT_ID,
};

export default amplifyConfig;
