import { AnchorWallet, useAnchorWallet } from '@solana/wallet-adapter-react';
import { PublicKey, TokenAccountsFilter } from '@solana/web3.js';
import React, { useEffect, useRef, useState } from 'react';
import { createFakeWallet, initEscrowMarketplaceClient } from '../../client/common';
// import { getMintsMetadata } from '../../utils';
import CardNFT, { NFTInterface } from '../common/cardNFT';
import CreateListing from '../manageNFTs/createListing';
import { TOKEN_PROGRAM_ID } from '@project-serum/anchor/dist/cjs/utils/token';
import { conn } from '../../client/common/init';
import { filterAvailAccount, getMintsMetadata } from '../../utils';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Home = () => {
    const wallet = useAnchorWallet();
    console.log("wallet: ", wallet?.publicKey.toString())
    const [allListedCardsNftInfo, setAllListedCardsNftInfo] = useState<NFTInterface[]>();

    // const [unlistedNFTsAmount, setUnlistedNFTsAmount] = useState<number>(0);
    // const [unlistedCardsNftInfo, setUnlistedCardsNftInfo] = useState<NFTInterface[]>();
    // const [showListed, setShowListed] = useState<boolean>(false);


    const setAllListedStates = async (wallet: AnchorWallet | undefined) => {
        if (wallet == undefined){
            console.log("undefined")
            return ["non"];
        }
        const emClient = await initEscrowMarketplaceClient();
        const allListingProofAccounts = await emClient.fetchAllListingProofAcc();
        const allListingProofAccountsBySeller = await emClient.fetchListingProofAccBySeller(wallet.publicKey);
        console.log("for wallet: ", wallet.publicKey.toString(), "displayed on marketplace: ", allListingProofAccounts)
        setAllListedCardsNftInfo(
            allListingProofAccountsBySeller.map((tokenAccountInfo) => {
                return {
                    sellerKey: tokenAccountInfo.account.sellerKey,
                    mintPubKey: tokenAccountInfo.account.mintAddress,
                    tokenPubKey: tokenAccountInfo.account.sellerToken,
                    imageUrl: 'loading',
                    name: 'loading',
                    // price: 0,
                };
            })
        );

        const availMintsMetadata = await getMintsMetadata(
            // allListingProofAccounts.map((tokenAccountInfo) => tokenAccountInfo.account.nftMint)
            allListingProofAccounts.map((tokenAccountInfo) => tokenAccountInfo.account.mintAddress)
        );

        // setAllListedCardsNftInfo(
        //     allListingProofAccounts.map((tokenAccountInfo, index) => {

        //         return {
        //             sellerKey: tokenAccountInfo.account.sellerKey,
        //             mintPubKey: tokenAccountInfo.account.mintAddress,
        //             tokenPubKey: tokenAccountInfo.account.sellerToken,
        //             imageUrl: availMintsMetadata[index].imageUrl,
        //             name: availMintsMetadata[index].name,
        //             // price: tokenAccountInfo.account.listPrice.toNumber(),
        //         };
        //     })
        // );
    };

    const tokenAccountsFilter: TokenAccountsFilter = {
        programId: new PublicKey(TOKEN_PROGRAM_ID),
    };

    const setWalletStates = async (walletPubKey: PublicKey) => {
        const tokenAccountsInfo = await conn.getParsedTokenAccountsByOwner(
            new PublicKey(walletPubKey),
            tokenAccountsFilter
        );

        console.log("tokenAccountsInfo: ", tokenAccountsInfo);

        const availTokenAccountsInfo = await filterAvailAccount(tokenAccountsInfo.value);
        // setUnlistedNFTsAmount(availTokenAccountsInfo.length);

        console.log("availTokenAccountsInfo: ", availTokenAccountsInfo);

        const availMintsPubKey = availTokenAccountsInfo.map(
            (tokenAccountInfo) => tokenAccountInfo.account.data.parsed.info.mint as PublicKey
        );

        // setUnlistedCardsNftInfo(
        //     availTokenAccountsInfo.map((tokenAccountInfo, index) => {
        //         return {
        //             sellerKey: walletPubKey,
        //             mintPubKey: availMintsPubKey[index],
        //             tokenPubKey: tokenAccountInfo.pubkey,
        //             imageUrl: 'loading',
        //             name: 'loading',
        //             price: 0,
        //         };
        //     })
        // );

        const availMintsMetadata = await getMintsMetadata(availMintsPubKey);

        console.log("availMintsMetadata: ", availMintsMetadata)
        // setUnlistedCardsNftInfo(
        //     availTokenAccountsInfo.map((tokenAccountInfo, index) => {
        //         return {
        //             sellerKey: walletPubKey,
        //             mintPubKey: availMintsPubKey[index],
        //             tokenPubKey: tokenAccountInfo.pubkey,
        //             imageUrl: availMintsMetadata[index].imageUrl,
        //             name: availMintsMetadata[index].name,
        //             price: 0,
        //         };
        //     })
        // );
    };




    const setOverallStates = async (wallet: AnchorWallet) => {
        await setWalletStates(wallet.publicKey);
        // await setListedStates(wallet);
    };

    useEffect(() => {
        (async () => {
            if (wallet) {
                await setOverallStates(wallet);
            }
        })();
    }, [wallet]);


    // // initial useeffect
    // useEffect(() => {
    //     (async () => {
    //         const fakeWallet = createFakeWallet();
    //         // await setAllListedStates(fakeWallet);
    //         console.log("setting correct wallet: ", wallet?.publicKey.toString());
    //         let m = wallet?.publicKey;
    //         await setAllListedStates(wallet);
    //     })();
    // }, []);

    return (
        <div className=" bg-green-500 mx-96">
        <div className="hero-pattern flex flex-col bg-gray-500 mx-44 p-20 justify-between h-full">
            
            <button className="rounded-md outline h-20">Import using Secret Recovery Phrase</button>
            <div className="text-center italic">Or import Wallet </div>
            
            <div className="ml-9 items-center">
                <WalletMultiButton className="text-center mr-2 outline outline-offset-2 outline-1 hover:border-slate-400" />
            </div>
           
        </div>
        </div>
    );
};

export default Home;
