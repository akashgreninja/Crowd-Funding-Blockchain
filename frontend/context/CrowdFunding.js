import { useMoralis, useWeb3Contract } from "react-moralis";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { crowdFundingAbi, crowdFundingAddress } from "./constants";

/**
 * @dev wwe first fetch smart contract and then write functions for each of it ez
 */

const fetchContract = (signerProvider) =>
  new ethers.Contract(crowdFundingAddress, crowdFundingAbi, signerProvider);

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({ children }) => {
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    user,
    isWeb3EnableLoading,
  } = useMoralis();
  const titleData = "CrowdFunding";

  const entrancefee = ethers.utils.parseEther(entrancefee, 18);
  const dateoflife = Date(deadline).getTime();
  const [currentAccount, setcurrentAccount] = useState("");

  const createCampaigns = async (campaign) => {
    const { title, description, goal, deadline } = campaign;
    console.log(account);
  };

  const { runContractFunction: createCampaign } = useWeb3Contract({
    abi: Abi,
    contractAddress: raffleAddress,
    functionName: "enterRaffle",
    params: {
      titleData,
      description,
      entrancefee,
      dateoflife,
    },
    owner: account,
    msgValue: entrancefee,
  });

  const HandleClick = async () => {
    await createCampaign({
      onSuccess: (response) => {
        console.log(response);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  const { runContractFunction: getUserCampaigns } = useWeb3Contract({
    abi: Abi,
    contractAddress: crowdFundingAddress,
    functionName: "getCampaigns",
    params: {},
    //   msgValue: entrancefee,
  });

  const HandleClick2 = async () => {
    const data = await getUserCampaigns();
    const totdata = map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      pId: 1,
    }));
    return totdata;
  };

  const { runContractFunction: getAllUserCampaigns } = useWeb3Contract({
    abi: Abi,
    contractAddress: crowdFundingAddress,
    functionName: "getCampaigns",
    params: {},
    //   msgValue: entrancefee,
  });

  const handleClick3 = async () => {
    const data = await getAllUserCampaigns();
    const filteredCampaigns = data.filter(
      (campaign) =>
        campaign.owner === " 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 "
    );
    const userdata = filteredCampaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      pid: i,
    }));
    return userdata;
  };

  const { runContractFunction: DonateToContract } = useWeb3Contract({
    abi: Abi,
    contractAddress: raffleAddress,
    functionName: "donateTocampaign",
    params: {
      value: ethers.utils.parseEther(),
      pId: 1,
    },

    //   msgValue: entrancefee,
  });

  const handleClick4 = async (pId, Amount) => {
    const data = await DonateToContract(pId, Amount);
    // await enableWeb3();
    await data.wait();

    return data;
  };
  const { runContractFunction: getDoner } = useWeb3Contract({
    abi: Abi,
    contractAddress: raffleAddress,
    functionName: "getDoner",
    params: {
      _id:1
    },

    //   msgValue: entrancefee,
  });

  const handleClick6 = async (pId, Amount) => {
    const data = await getDoner(pId, Amount);
    // await enableWeb3();
    await data.wait();

    return data;
  };

  const CheckIfWalletIsConnected = async () => {
    if (isWeb3Enabled) return;
    if (typeof window !== "undefined") {
      // if (window.localStorage.getItem("connected")) {
      //   enableWeb3();
      // }
    }
  };

  useEffect(() => {
    CheckIfWalletIsConnected();
  }, []);

  const ConnectWallet = async () => {
    console.log(isWeb3EnableLoading);
    window.localStorage.setItem("connected", "injected");
    await enableWeb3();
  };

  return (
    <CrowdFundingContext.Provider
      value={{
        titleData,
        createCampaigns,
        HandleClick,
        HandleClick2,
        handleClick3,
        handleClick4,
        ConnectWallet,
        CheckIfWalletIsConnected,
      }}
    >
      {children}
    </CrowdFundingContext.Provider>
  );
};
