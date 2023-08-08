<!DOCTYPE html>
<html>

<head>
  <title>Project README</title>
</head>

<body>

  <h1>Project README</h1>

  <h2>Frontend</h2>

  <p>The frontend of the application is built using React. Follow these steps to get it up and running:</p>

  <ol>
    <li>Navigate to the <code>frontend</code> folder using your terminal.</li>
    <li>Run the following command to install the required dependencies:</li>
  </ol>

  <pre><code>npm i</code></pre>

  <ol start="3">
    <li>Once the installation is complete, start the development server with:</li>
  </ol>

  <pre><code>npm run dev</code></pre>

  <p>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a> to see the application in
    action.</p>

  <p>Don't forget to update any necessary addresses or configurations for backend integration.</p>

  <h2>Backend</h2>

  <p>The backend of the application uses Hardhat for smart contract development and deployment. Follow these steps:</p>

  <ol>
    <li>Navigate to the <code>backend</code> folder using your terminal.</li>
    <li>Run the following command to install the required dependencies:</li>
  </ol>

  <pre><code>npm i</code></pre>

  <p>Compile the smart contracts using Hardhat:</p>

  <pre><code>hh compile</code></pre>

  <p>Run the local Hardhat node:</p>

  <pre><code>hh node</code></pre>

  <p>Deploy the contracts to the local network using the provided deploy script:</p>

  <pre><code>npx hardhat run --network localhost scripts/deploy.js</code></pre>

  <p><strong>Important:</strong> Make sure to update any addresses or configurations as required.</p>

  <p>Remember to copy the relevant files to the respective folders and follow these instructions to ensure a smooth
    setup.</p>

  <p><strong>Note:</strong> The addresses, configurations, and other specific details might vary based on your project
    requirements.</p>

</body>

</html>
