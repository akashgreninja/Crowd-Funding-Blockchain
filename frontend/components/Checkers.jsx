import React, { useContext } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { CrowdFundingContext } from "@/context/CrowdFunding";
import { crowdFundingAbi, crowdFundingAddress } from "../context/constants";
import { ethers } from "ethers";
const { abi: Abi } = crowdFundingAbi;


const Checkers = () => {
const dateoflife = Date.now();
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    user,
    isWeb3EnableLoading,
  } = useMoralis();
  const titleData="we are alive"
  const description="we are alive"
  const entrancefee = "100000000000000"
  // const dateoflife = Date(deadline).getTime();
  // const dateoflife="we are alive"

  const { runContractFunction: createCampaign } = useWeb3Contract({
    abi: Abi,
    contractAddress: crowdFundingAddress,
    functionName: "createCampaign",
    params: {
      _owner: account,
      _title: titleData,
      _description: description,
      _deadline: dateoflife,
      _entrancefee: entrancefee,
      _target: "1000000000000000000",

     
    },
    // msgValue: entrancefee,
  });

  const HandleClick = async () => {
    console.log(account)
    const data= await createCampaign();
    console.log(data);
    // await createCampaign({
 
    //   onSuccess: (response) => {
    //     console.log(response);

    //   },
    //   onError: (error) => {
    //     console.log(error);
    //   },
    // });
  };
  const { runContractFunction: getnoofcampaigns } = useWeb3Contract({
    abi: Abi,
    contractAddress: crowdFundingAddress,
    functionName: "getnumberofCampaigns",
    
    // msgValue: entrancefee,
  });

  const HandleClick5 = async () => {
    console.log(account)
    await getnoofcampaigns({
 
      onSuccess: (response) => {
        console.log(response.toString());
      },
      onError: (error) => {
        console.log(error);
      },
    });
    const data= await getnoofcampaigns();
    console.log(data);
    // await createCampaign({
 
    //   onSuccess: (response) => {
    //     console.log(response);

    //   },
    //   onError: (error) => {
    //     console.log(error);
    //   },
    // });
  };


  const { runContractFunction: getAllCampaigns } = useWeb3Contract({
    abi: Abi,
    contractAddress: crowdFundingAddress,
    functionName: "getCampaigns",
    params: {},
 
  });

  const HandleClick2 = async () => {
    // const data = await getUserCampaigns();
    // console.log(data);
    await getAllCampaigns({
 
      onSuccess: (response) => {
        console.log(response);
      },
      onError: (error) => {
        console.log(error);
      },
    });
    // const totdata = data.map((campaign, i) => ({
    //   owner: campaign.owner,
    //   title: campaign.title,
    //   description: campaign.description,
    //   target: ethers.utils.formatEther(campaign.target),
    //   deadline: campaign.deadline.toNumber(),
    //   amountCollected: ethers.utils.formatEther(
    //     campaign.amountCollected.toString()
    //   ),
    //   pId: 1,
    // }));
    // return totdata;
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
    console.log(data);
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
    contractAddress: crowdFundingAddress,
    functionName: "donateTocampaign",
    params: {
      // value: ethers.utils.parseEther(),
      _id: 1,
    },

    //   msgValue: entrancefee,
  });

  const handleClick4 = async (pId, Amount) => {
    // const data = await DonateToContract(pId, Amount);
     await DonateToContract({
 
      onSuccess: (response) => {
        console.log(response);

      },
      onError: (error) => {
        console.log(error);
      },
    });

    // return data;
  };

  const { runContractFunction: getDoner } = useWeb3Contract({
    abi: Abi,
    contractAddress: crowdFundingAddress,
    functionName: "getDoner",
    params: {
      _id:1
    },
    

    //   msgValue: entrancefee,
  });

  const handleClick6 = async (pId, Amount) => {
    const data = await getDoner(pId, Amount);
    // await enableWeb3();
    await getDoner({
 
      onSuccess: (response) => {
        console.log(response);

      },
      onError: (error) => {
        console.log(error);
      },
    });
  
  };
 
  return (<div>
    <div>

  <button onClick={HandleClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Create a campaign
</button>

  <button onClick={HandleClick2} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Get all campaigns
</button>
  <button onClick={HandleClick5} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  no of campaigns
</button>
  <button onClick={handleClick4} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  DonateToAcampaign
</button>
  <button onClick={handleClick6} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
 get Donators to campaign 1 
</button>

 


    </div>
  </div>)
};

export default Checkers;
