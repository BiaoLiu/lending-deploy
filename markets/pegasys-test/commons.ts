import {
  AssetType,
  TransferStrategy,
} from "./../../helpers/types";
import { ZERO_ADDRESS } from "../../helpers/constants";
import {
  ICommonConfiguration,
  eEthereumNetwork,
} from "../../helpers/types";
import {
  rateStrategyStableOne,
  rateStrategyStableTwo,
  rateStrategyVolatileOne,
} from "./rateStrategies";
// ----------------
// PROTOCOL GLOBAL
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: "Commons Aave Market",
  ATokenNamePrefix: "Ethereum",
  StableDebtTokenNamePrefix: "Ethereum",
  VariableDebtTokenNamePrefix: "Ethereum",
  SymbolPrefix: "Eth",
  ProviderId: 8080,
  OracleQuoteCurrencyAddress: ZERO_ADDRESS,
  OracleQuoteCurrency: "USD",
  OracleQuoteUnit: "8",
  WrappedNativeTokenSymbol: "WETH",
  ChainlinkAggregator: {
    
  },
  ReserveFactorTreasuryAddress: {

  },
  FallbackOracle: {
   
  },
  ReservesConfig: {},
  IncentivesConfig: {
    enabled: {
     
    },
    rewards: {
     
    },
    rewardsOracle: {
      
    },
    incentivesInput: {
    
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["USDC", "USDT", "DAI", "EURS"],
    },
  },
  L2PoolEnabled: {
   
  },
  ParaswapRegistry: {

  },
  FlashLoanPremiums: {
    total: 0.0005e4,
    protocol: 0.0004e4,
  },
  RateStrategies: {
    rateStrategyVolatileOne,
    rateStrategyStableOne,
    rateStrategyStableTwo,
  },
};
