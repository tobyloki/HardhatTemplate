import findConfig from 'find-config';
import dotenv from 'dotenv';
const envPath = findConfig('.env');
dotenv.config({ path: envPath });

import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const config: HardhatUserConfig = {
	solidity: '0.8.22',
	networks: {
		zkEVM: {
			url: `https://rpc.public.zkevm-test.net`,
			accounts: [process.env.ACCOUNT_PRIVATE_KEY]
		}
	}
};

export default config;
