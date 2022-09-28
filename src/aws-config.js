/* eslint-disable */
// aws-configが更新されたら、.envを更新の上、このファイルも更新する

const awsmobile = {
    "aws_project_region": process.env.REACT_APP_aws_project_region,
    "aws_cognito_identity_pool_id": process.env.REACT_APP_aws_cognito_identity_pool_id,
    "aws_cognito_region": process.env.REACT_APP_aws_cognito_region,
    "aws_user_pools_id": process.env.REACT_APP_aws_user_pools_id,
    "aws_user_pools_web_client_id": process.env.REACT_APP_aws_user_pools_web_client_id,
    "oauth": {},
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL",
        "NAME"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;
