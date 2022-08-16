# devops-ec2-mysql

A simple exercise to deployment to AWS

## Requirements

- AWS CLI v2 [Installation](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- jq command (to read JSON files in bash) [Installation](https://stedolan.github.io/jq/download/)
- GNU Linux or similar (as MacOS) terminal to run commands

## Installation

The installation scripts assume that you have aws cli configurated correctly and use the `default` profile

### Infrastructure deployment

    ./deploy-infra

This command give you 4 values  `$DB_HOST`, `$DB_PASSWORD`, `$APP_HOST` and `$BASTION_IP`, this values must be used by the following command

### Application deployment

Make sure that `$DB_USER` exists and value is 'root', and `$DB_NAME` exists and value is 'appdb', `$DB_HOST` and `$DB_PASSWORD` are be defined using the previous command

    ./app-deploy
