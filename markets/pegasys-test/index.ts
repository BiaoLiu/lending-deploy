import { eEthereumNetwork, IAaveConfiguration } from "./../../helpers/types";
import { ZERO_ADDRESS } from "../../helpers/constants";
import { CommonsConfig } from "./commons";
import {
  strategyWAVAX,
  strategyUSDC,
  strategyAAVE,
  strategyWBTC,
  strategyWETH,
  strategyUSDT
} from "./reservesConfigs";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const PegasysTestMarket: IAaveConfiguration = {
  ...CommonsConfig,
  ProviderId: 38,
  WrappedNativeTokenSymbol: "WTSYS",
  MarketId: "Pegasys Aave Market",
  ATokenNamePrefix: "Pegasys",
  StableDebtTokenNamePrefix: "Pegasys",
  VariableDebtTokenNamePrefix: "Pegasys",
  SymbolPrefix: "Sys",
  ReservesConfig: {
    RBTC: strategyWBTC,
    RWETH: strategyWETH,
    WTSYS: strategyWAVAX,
    RUSDT: strategyUSDT,
    RUSDC: strategyUSDC,
    RPSYS: strategyAAVE,
  },
  ReserveAssets: {
    [eEthereumNetwork.tanenbaum]: {
      RBTC: '0xfA600253bB6fE44CEAb0538000a8448807e50c85',
      RWETH: '0x5eD4813824E5e2bAF9BBC211121b21aB38E02522',
      WTSYS: '0xcAc0759160d57A33D332Ed36a555C10957694407',
      RUSDT: '0x9D973BAc12BB62A55be0F9f7Ad201eEA4f9B8428',
      RUSDC: '0xf111Aa386823C4CF33F349597f1E772973Ac0913',
      RPSYS: '0xD451237dceE3395B63d84FF0DDC0a4dbCf005Cc1',
    },
  },
  ChainlinkAggregator: {
    [eEthereumNetwork.tanenbaum]: {
      RBTC: "0x5eD0B6460356f28F469aA30E402084445cD84E65",
      RWETH: "0x7C1cB41C2C852D96c06f58a47b36e068C9cf1E4a",
      WTSYS: "0x42cF8Fd3A114E3ed807379c6E4e6E7f9A30AC561",
      RUSDT: "0xcC34C2094C13ee22047B16BD31a25ABc6972d365",
      RUSDC: "0x128421A48C3E9AE386da855F10b825aD84701014",
      RPSYS: "0x42cF8Fd3A114E3ed807379c6E4e6E7f9A30AC561",
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["RUSDC", "RUSDT"],
    },
  },
  StkAaveProxy: {
    [eEthereumNetwork.tanenbaum]: "0x8858eeB3DfffA017D4BCE9801D340D36Cf895CCf",
  },
};

export default PegasysTestMarket;
