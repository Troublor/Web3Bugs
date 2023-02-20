import { Contracts } from '../../../existingContracts/compound.json';

import { ChainLinkAggregators, WBTCWhale, WhaleAccount, UNIWhale } from '../../../utils/constants';

export const testVars = [
    {
        Amount: 1,
        Whale1: WBTCWhale,
        Whale2: WhaleAccount,
        BorrowToken: Contracts.DAI,
        CollateralToken: Contracts.WBTC,
        liquidityBorrowToken: Contracts.cDAI,
        liquidityCollateralToken: Contracts.cWBTC2,
        chainlinkBorrow: ChainLinkAggregators['DAI/USD'],
        chainlinkCollateral: ChainLinkAggregators['BTC/USD'],
    },
    {
        Amount: 1,
        Whale1: WBTCWhale,
        Whale2: WhaleAccount,
        BorrowToken: Contracts.UNI,
        CollateralToken: Contracts.WBTC,
        liquidityBorrowToken: Contracts.cUNI,
        liquidityCollateralToken: Contracts.cWBTC2,
        chainlinkBorrow: ChainLinkAggregators['UNI/USD'],
        chainlinkCollateral: ChainLinkAggregators['BTC/USD'],
    },
    {
        Amount: 1,
        Whale1: WBTCWhale,
        Whale2: WhaleAccount,
        BorrowToken: Contracts.USDC,
        CollateralToken: Contracts.WBTC,
        liquidityBorrowToken: Contracts.cUSDC,
        liquidityCollateralToken: Contracts.cWBTC2,
        chainlinkBorrow: ChainLinkAggregators['USDC/USD'],
        chainlinkCollateral: ChainLinkAggregators['BTC/USD'],
    },
    // {
    //     Amount: 1,
    //     Whale1: WBTCWhale,
    //     Whale2: WhaleAccount,
    //     BorrowToken: Contracts.USDT,
    //     CollateralToken: Contracts.WBTC,
    //     liquidityBorrowToken: Contracts.cUSDT,
    //     liquidityCollateralToken: Contracts.cWBTC2,
    //     chainlinkBorrow: ChainLinkAggregators['USDT/USD'],
    //     chainlinkCollateral: ChainLinkAggregators['BTC/USD'],
    // },
    // {
    //     Amount: 10,
    //     Whale1: WBTCWhale,
    //     Whale2: WhaleAccount,
    //     BorrowToken: Contracts.Comp,
    //     CollateralToken: Contracts.WBTC,
    //     liquidityBorrowToken: Contracts.cComp,
    //     liquidityCollateralToken: Contracts.cWBTC2,
    //     chainlinkBorrow: ChainLinkAggregators['COMP/USD'],
    //     chainlinkCollateral: ChainLinkAggregators['BTC/USD'],
    // },
    {
        Amount: 100,
        Whale1: UNIWhale,
        Whale2: WhaleAccount,
        BorrowToken: Contracts.USDC,
        CollateralToken: Contracts.UNI,
        liquidityBorrowToken: Contracts.cUSDC,
        liquidityCollateralToken: Contracts.cUNI,
        chainlinkBorrow: ChainLinkAggregators['USDC/USD'],
        chainlinkCollateral: ChainLinkAggregators['UNI/USD'],
    },
    // {
    //     Amount: 100,
    //     Whale1: UNIWhale,
    //     Whale2: WhaleAccount,
    //     BorrowToken: Contracts.USDT,
    //     CollateralToken: Contracts.UNI,
    //     liquidityBorrowToken: Contracts.cUSDT,
    //     liquidityCollateralToken: Contracts.cUNI,
    //     chainlinkBorrow: ChainLinkAggregators['USDT/USD'],
    //     chainlinkCollateral: ChainLinkAggregators['UNI/USD'],
    // },
    {
        Amount: 100,
        Whale1: UNIWhale,
        Whale2: WhaleAccount,
        BorrowToken: Contracts.DAI,
        CollateralToken: Contracts.UNI,
        liquidityBorrowToken: Contracts.cDAI,
        liquidityCollateralToken: Contracts.cUNI,
        chainlinkBorrow: ChainLinkAggregators['DAI/USD'],
        chainlinkCollateral: ChainLinkAggregators['UNI/USD'],
    },
    {
        Amount: 100,
        Whale1: UNIWhale,
        Whale2: WhaleAccount,
        BorrowToken: Contracts.DAI,
        CollateralToken: Contracts.Comp,
        liquidityBorrowToken: Contracts.cDAI,
        liquidityCollateralToken: Contracts.cComp,
        chainlinkBorrow: ChainLinkAggregators['DAI/USD'],
        chainlinkCollateral: ChainLinkAggregators['COMP/USD'],
    },
    {
        Amount: 100,
        Whale1: UNIWhale,
        Whale2: WhaleAccount,
        BorrowToken: Contracts.USDC,
        CollateralToken: Contracts.Comp,
        liquidityBorrowToken: Contracts.cUSDC,
        liquidityCollateralToken: Contracts.cComp,
        chainlinkBorrow: ChainLinkAggregators['USDC/USD'],
        chainlinkCollateral: ChainLinkAggregators['COMP/USD'],
    },
    // {
    //     Amount: 100,
    //     Whale1: UNIWhale,
    //     Whale2: WhaleAccount,
    //     BorrowToken: Contracts.USDT,
    //     CollateralToken: Contracts.Comp,
    //     liquidityBorrowToken: Contracts.cUSDT,
    //     liquidityCollateralToken: Contracts.cComp,
    //     chainlinkBorrow: ChainLinkAggregators['USDT/USD'],
    //     chainlinkCollateral: ChainLinkAggregators['COMP/USD'],
    // },
    {
        Amount: 100,
        Whale1: UNIWhale,
        Whale2: WhaleAccount,
        BorrowToken: Contracts.UNI,
        CollateralToken: Contracts.Comp,
        liquidityBorrowToken: Contracts.cUNI,
        liquidityCollateralToken: Contracts.cComp,
        chainlinkBorrow: ChainLinkAggregators['UNI/USD'],
        chainlinkCollateral: ChainLinkAggregators['COMP/USD'],
    },
];