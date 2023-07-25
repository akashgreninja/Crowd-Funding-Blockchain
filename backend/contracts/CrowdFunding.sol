// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract CrowdFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint target;
        uint deadline;
        uint amountCollected;
        address[] donators;
        uint[] donations;
    }

    mapping(uint => Campaign) public campaigns;
    uint noOfCampaign = 0;

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint _target,
        uint _deadline
    ) public returns (uint256) {
        Campaign storage campaign = campaigns[noOfCampaign];

        require(
            campaign.deadline < block.timestamp,
            "something is wrong with the deadline"
        );
        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        noOfCampaign++;
        return noOfCampaign -1;
    }
    function donateTocampaign  ( uint256 _id  )public payable{
        uint256 amount = msg.value;
        Campaign storage campaign =campaigns[_id];
        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);
        (bool sent ,)=payable(campaign.owner).call{value:amount}("");
        if (sent){
            campaign.amountCollected=campaign.amountCollected+amount;

        }



    }
    function getDoner(uint256 _id) view public returns(address[] memory ,uint256[] memory ){
        return (campaigns[_id].donators,campaigns[_id].donations);
    }
    function getCampaigns()public view returns (Campaign[] memory){
        Campaign[] memory _campaigns = new Campaign[](noOfCampaign);
        for (uint i = 0; i < noOfCampaign; i++) {
            _campaigns[i] = campaigns[i];
        }
        return _campaigns;
    }
}
